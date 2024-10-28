// cucumber.js
// cucumber.js
module.exports = {
  default: {
    require: ["src/features/step_definitions/**/*.js"], // Adjust the path as necessary
    format: ["json:cucumber-report.json"], // This is the line to check
  },
};
