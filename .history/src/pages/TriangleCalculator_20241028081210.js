// src/pages/TriangleCalculator.js
class TriangleCalculator {
  constructor() {
    this.sides = [];
  }

  createTriangle(a, b, c) {
    this.sides = [a, b, c];
  }

  validateTriangle() {
    const [a, b, c] = this.sides;

    // Check if all sides are positive
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }

    // Triangle inequality theorem
    return a + b > c && b + c > a && a + c > b;
  }

  getTriangleType() {
    // First check if it's a valid triangle
    if (!this.validateTriangle()) {
      return "Invalid";
    }

    const [a, b, c] = this.sides;

    // Check if all sides are equal
    if (a === b && b === c) {
      return "Gleichseitig"; // Equilateral
    }

    // Check if any two sides are equal
    if (a === b || b === c || a === c) {
      return "Gleichschenklig"; // Isosceles
    }

    // If no sides are equal
    return "Ungleichseitig"; // Scalene
  }
}

module.exports = TriangleCalculator;
