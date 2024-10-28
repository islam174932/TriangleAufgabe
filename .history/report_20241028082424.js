const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "cucumber-report.json", // Specify the location of your JSON report
  output: "cucumber_report.html", // Output file name for the HTML report
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "QA",
    Browser: "Chrome",
    Platform: "Windows",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
