const assert = require("assert");
const Triangle = require("../models/Triangle");

// Test isValid()
console.log("\n=== Testing Triangle Validation ===");

try {
  // Test valid triangle
  const validTriangle = new Triangle(3, 4, 5);
  assert.strictEqual(validTriangle.isValid(), true);
  console.log("✓ Valid triangle test passed (3,4,5)");

  // Test invalid triangle (inequality violation)
  const invalidTriangle = new Triangle(1, 1, 3);
  assert.strictEqual(invalidTriangle.isValid(), false);
  console.log("✓ Invalid triangle test passed (1,1,3)");

  // Test negative sides
  const negativeTriangle = new Triangle(-1, 2, 2);
  assert.strictEqual(negativeTriangle.isValid(), false);
  console.log("✓ Negative sides test passed (-1,2,2)");

  // Test zero sides
  const zeroTriangle = new Triangle(0, 1, 2);
  assert.strictEqual(zeroTriangle.isValid(), false);
  console.log("✓ Zero sides test passed (0,1,2)");

  console.log("\n=== Testing Triangle Types ===");

  // Test equilateral triangle
  const equilateral = new Triangle(2, 2, 2);
  assert.strictEqual(equilateral.getType(), "Gleichseitig");
  console.log("✓ Equilateral triangle test passed (2,2,2)");

  // Test isosceles triangle
  const isosceles = new Triangle(2, 2, 3);
  assert.strictEqual(isosceles.getType(), "Gleichschenklig");
  console.log("✓ Isosceles triangle test passed (2,2,3)");

  // Test scalene triangle
  const scalene = new Triangle(3, 4, 5);
  assert.strictEqual(scalene.getType(), "Ungleichseitig");
  console.log("✓ Scalene triangle test passed (3,4,5)");

  // Test invalid triangle type
  const invalid = new Triangle(1, 1, 3);
  assert.strictEqual(invalid.getType(), "Invalid");
  console.log("✓ Invalid triangle type test passed (1,1,3)");

  console.log("\n✅ All tests passed successfully!\n");
} catch (error) {
  console.error("\n❌ Test failed:", error.message);
  process.exit(1);
}
