const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const TriangleCalculator = require("../../pages/TriangleCalculator");

let calculator;
let isValidTriangle;
let triangleType;

Given("I have sides {int}, {int}, and {int}", function (a, b, c) {
  calculator = new TriangleCalculator();
  calculator.createTriangle(a, b, c);
});

When("I check if it forms a valid triangle", function () {
  isValidTriangle = calculator.validateTriangle();
});

When("I check the triangle type", function () {
  triangleType = calculator.getTriangleType();
});

Then("the result should be {string}", function (result) {
  assert.strictEqual(isValidTriangle, result === "true");
});

Then("the type should be {string}", function (expectedType) {
  assert.strictEqual(triangleType, expectedType);
});
