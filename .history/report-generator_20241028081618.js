// report-generator.js
const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "./",
  reportPath: "./cucumber-report/",
  metadata: {
    browser: {
      name: "NodeJS",
      version: process.version,
    },
    device: "Local Machine",
    platform: {
      name: process.platform,
      version: process.release.lts,
    },
  },
  customData: {
    title: "Test Execution Info",
    data: [
      { label: "Project", value: "Triangle Validator" },
      { label: "Execution Date", value: new Date().toISOString() },
      { label: "Environment", value: "Test" },
    ],
  },
});
