// features/step_definitions/triangle_steps.js
const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const TriangleCalculator = require("..");

let calculator;
let result;

Given("I have sides {float}, {float}, and {float}", function (a, b, c) {
  calculator = new TriangleCalculator();
  calculator.createTriangle(a, b, c);
});

When("I check if it forms a valid triangle", function () {
  result = calculator.validateTriangle();
});

When("I check the triangle type", function () {
  result = calculator.getTriangleType();
});

Then("the result should be {boolean}", function (expected) {
  assert.strictEqual(result, expected);
});

Then("the type should be {string}", function (expected) {
  assert.strictEqual(result, expected);
});
