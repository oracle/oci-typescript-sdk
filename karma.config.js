module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "chai"],
    files: ["dist/*.js"],
    client: {
      mocha: {
        timeout: 999999
        // grep: 'listTags',
      }
    },
    browserNoActivityTimeout: 900000,
    reporters: ["progress"],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless", "Firefox"],
    autoWatch: false,
    concurrency: Infinity,
    customLaunchers: {
      ChromeHeadlessCors: {
        base: "ChromeHeadless",
        flags: ["--disable-web-security"]
      },
      FirefoxHeadless: {
        base: "Firefox",
        flags: ["-headless"]
      }
    },
    failOnEmptyTestSuite: false
  });
};
