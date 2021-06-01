import { expect } from "chai";
import { Readable } from "stream";
import { join } from "path";
import fs from "fs";
import crypto from "crypto";
import { getChunk } from "oci-common";
import { RawData } from "../lib/upload-manager/upload-manager";
const MEMIBYTE = 1024 * 1024;
const partSize = 20 * MEMIBYTE;
const sampleString = "This is sample file for upload manager unit tests.";
const sampleBuffer = Buffer.from(sampleString);

describe("Test Chunker", () => {
  var filename = "sample-file.txt";
  var fullpath = join(__dirname, filename);
  let stream;
  let dataFeeder;
  let dataPart: RawData;
  const text = fs.readFileSync(fullpath, "utf8");
  const hash = crypto.createHash("md5");
  hash.update(text);
  const md5HashResult = hash.digest("base64");

  it("should return correct MD5 hash for the stream ", async function() {
    stream = fs.createReadStream(fullpath);
    dataFeeder = getChunk(stream, partSize);
    dataPart = (await dataFeeder.next()).value as RawData;
    expect(dataPart.md5Hash).equals(md5HashResult);
  });

  it("should return correct Data for the stream ", async function() {
    expect(dataPart.data.toString()).equals("This is sample file for upload manager unit tests.");
  });

  it("should return correct MD5 hash for the string ", async function() {
    dataFeeder = getChunk(sampleString, partSize);
    dataPart = (await dataFeeder.next()).value as RawData;
    expect(dataPart.md5Hash).equals(md5HashResult);
  });

  it("should return correct Data for the string ", async function() {
    expect(dataPart.data.toString()).equals("This is sample file for upload manager unit tests.");
  });

  it("should return correct MD5 hash for the buffer ", async function() {
    dataFeeder = getChunk(sampleBuffer, partSize);
    dataPart = (await dataFeeder.next()).value as RawData;
    expect(dataPart.md5Hash).equals(md5HashResult);
  });

  it("should return correct Data for the Buffer ", async function() {
    expect(dataPart.data.toString()).equals("This is sample file for upload manager unit tests.");
  });
});
