// src/models/Triangle.js
class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = parseFloat(sideA);
    this.sideB = parseFloat(sideB);
    this.sideC = parseFloat(sideC);
  }

  isValid() {
    // Check for positive sides
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      return false;
    }

   
    return (
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideB + this.sideC > this.sideA
    );
  }

  getType() {
    if (!this.isValid()) {
      return "Invalid";
    }

    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return "Gleichseitig"; 
    }

    if (
      this.sideA === this.sideB ||
      this.sideB === this.sideC ||
      this.sideA === this.sideC
    ) {
      return "Gleichschenklig"; 
    }

    return "Ungleichseitig"; 
  }
}

module.exports = Triangle;
