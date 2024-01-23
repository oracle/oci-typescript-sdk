import { expect } from "chai";
//import { OciError } from "../../../target/lib/common";
import { delay } from "../lib/waiter";
import common = require("oci-common");
const CircuitBreaker = require("opossum");

// Mock client meant to simulate any service client. Creates fake requests that can either
// succeed or fail, in order to test circuit breaker mechanics.
class MockClient {
  returnSuccessOnCallNumber: number;
  currentCalls: number;
  exceptionToThrow: Error;
  public circuitBreaker: common.CircuitBreaker;

  constructor(
    returnSuccessOnCallNumber: number,
    exceptionToThrow: Error,
    circuitBreakerOptions: any
  ) {
    this.returnSuccessOnCallNumber = returnSuccessOnCallNumber;
    this.currentCalls = 0;
    this.exceptionToThrow = exceptionToThrow;

    // Override circuit breaker to not use FetchWrapper, since we are mocking our service calls
    this.circuitBreaker = new common.CircuitBreaker();
    this.circuitBreaker.circuit = new CircuitBreaker(this.do_call, circuitBreakerOptions);
  }

  do_call_with_circuit(): Promise<Response> {
    this.currentCalls = this.currentCalls + 1;
    return this.circuitBreaker.circuit
      .fire(this.currentCalls, this.returnSuccessOnCallNumber, this.exceptionToThrow)
      .then((e: any) => {
        return e;
      })
      .catch((e: any) => {
        throw e;
      });
  }

  do_call(
    currentCalls: number,
    returnSuccessOnCallNumber: number,
    exceptionToThrow: common.OciError
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      if (currentCalls >= returnSuccessOnCallNumber) {
        var myOptions = { status: 200, statusText: "200" };
        var resp = new Response("data", myOptions);
        resolve(resp);
      } else {
        reject(exceptionToThrow);
      }
    });
  }

  // Mock version of client method 'shutdown'
  shutdown() {
    if (this.circuitBreaker.circuit) {
      this.circuitBreaker.circuit.shutdown();
    }
  }
}

describe("Test Circuit Breaker ", () => {
  it("Test With Circuit Breaker Options", async function() {
    const options = {
      timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
      errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
      resetTimeout: 500, // After 10 seconds, try again.
      volumeThreshold: 1
    };

    var mockClient = new MockClient(
      3,
      new common.OciError(
        429,
        "TooManyRequests",
        "Too many Requests",
        null,
        "mock",
        "mock",
        new Date().toString(),
        "mock",
        "mock"
      ),
      options
    );

    // Try 1. Should fail from mock service error response
    try {
      await mockClient.do_call_with_circuit();
      expect(false).true; // Should fail before this point
    } catch (e) {
      expect(e instanceof common.OciError).true;
    }

    // Circuit breaker has failed once and is in open state
    var breakerStats = mockClient.circuitBreaker.circuit.stats;
    var isOpen = mockClient.circuitBreaker.circuit.opened;
    expect(breakerStats.failures).equals(1);
    expect(isOpen).true;

    // Try 2. Should fail due to Circuit Breaker being in open state.
    try {
      await mockClient.do_call_with_circuit();
      expect(false).true; // Should fail before this point
    } catch (e) {
      expect(e.code).equals("EOPENBREAKER"); // Circuit breaker threw an error
    }

    // 'Sleep' until breaker is half open
    await delay(0.5);
    var isHalfOpen = mockClient.circuitBreaker.circuit.halfOpen;
    expect(isHalfOpen).true;

    // Successful call while the circuit breaker is in half open state
    // should cause it to transition back to closed state
    var resp = await mockClient.do_call_with_circuit();
    expect(resp.status).equals(200);
    var isClosed = mockClient.circuitBreaker.circuit.closed;
    expect(isClosed).true;
  });

  it("Test Shutdown", async function() {
    const options = {
      timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
      errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
      resetTimeout: 500, // After 10 seconds, try again.
      volumeThreshold: 1
    };

    var mockClient = new MockClient(
      3,
      new common.OciError(
        429,
        "TooManyRequests",
        "Too many Requests",
        null,
        "mock",
        "mock",
        new Date().toString(),
        "mock",
        "mock"
      ),
      options
    );

    // Try 1. Should fail from mock service error response
    try {
      await mockClient.do_call_with_circuit();
      expect(false).true; // Should fail before this point
    } catch (e) {
      expect(e instanceof common.OciError).true;
    }

    // Shutdown the circuit breaker
    mockClient.shutdown();
    var isShutdown = mockClient.circuitBreaker.circuit.isShutdown;
    expect(isShutdown).true;

    // Try 2. Should fail again but NOT with an open circuit breaker
    // error, but instead with a shutdown circuitbreaker error
    try {
      await mockClient.do_call_with_circuit();
      expect(false).true; // Should fail before this point
    } catch (e) {
      expect(e.code).equals("ESHUTDOWN"); // Circuit breaker threw an error
    }
  });

  it("Test Default Error Filter Function", async function() {
    var tooManyRequests = new common.OciError(
      429,
      "TooManyRequests",
      "Too many Requests",
      null,
      "mock",
      "mock",
      new Date().toString(),
      "mock",
      "mock"
    );

    var genericRetriable = new common.OciError(
      500,
      "genericError",
      "Generic Retriable Error",
      null,
      "mock",
      "mock",
      new Date().toString(),
      "mock",
      "mock"
    );

    var nonRetriable = new common.OciError(
      408,
      "",
      "Generic Non Retriable Error",
      null,
      "mock",
      "mock",
      new Date().toString(),
      "mock",
      "mock"
    );

    // 429 is usually retriable, but we do not have the correct
    // status code (TooManyRequests)
    var wrongCode = new common.OciError(
      429,
      "wrongCode",
      "Wrong Status Code",
      null,
      "mock",
      "mock",
      new Date().toString(),
      "mock",
      "mock"
    );

    expect(common.CircuitBreaker.defaultConfiguration.errorFilter);
    if (common.CircuitBreaker.defaultConfiguration.errorFilter) {
      let isNotRetriable = common.CircuitBreaker.defaultConfiguration.errorFilter;

      expect(isNotRetriable({ errorObject: genericRetriable })).false;
      expect(isNotRetriable({ errorObject: tooManyRequests })).false;

      expect(isNotRetriable({ errorObject: nonRetriable })).true;
      expect(isNotRetriable({ errorObject: wrongCode })).true;
    }
  });
});
