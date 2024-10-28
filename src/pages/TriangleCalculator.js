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

    
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }

    
    return a + b > c && b + c > a && a + c > b;
  }

  getTriangleType() {
    // First check if it's a valid triangle
    if (!this.validateTriangle()) {
      return "Invalid";
    }

    const [a, b, c] = this.sides;

    
    if (a === b && b === c) {
      return "Gleichseitig"; 
    }

    
    if (a === b || b === c || a === c) {
      return "Gleichschenklig"; 
    }

    
    return "Ungleichseitig"; 
  }
}

module.exports = TriangleCalculator;
