// cucumber.js
module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "synchronous",
    },
    paths: ["src/features/"],
    format: ["progress", ["json:cucumber-report.json"]],
    require: ["src/features/step_definitions/*.js"],
  },
};
