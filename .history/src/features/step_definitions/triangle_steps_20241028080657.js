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

// This is the missing implementation for validating the result
Then("the result should be {string}", function (expectedResult) {
  assert.strictEqual(isValidTriangle, expectedResult === "true");
});

// Assuming you want to check the triangle type as well
When("I check the triangle type", function () {
  triangleType = calculator.getTriangleType();
});

Then("the type should be {string}", function (expectedType) {
  assert.strictEqual(triangleType, expectedType);
});
