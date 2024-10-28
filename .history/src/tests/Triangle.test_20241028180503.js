const Triangle = require("../models/Triangle");

describe("Triangle", () => {
  describe("#isValid()", () => {
    it("should return true for a valid triangle", () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.isValid()).toBe(true);
    });

    it("should return false when triangle inequality is violated", () => {
      const triangle = new Triangle(1, 1, 3);
      expect(triangle.isValid()).toBe(false);
    });

    it("should return false for negative sides", () => {
      const triangle = new Triangle(-1, 2, 2);
      expect(triangle.isValid()).toBe(false);
    });

    it("should return false for zero sides", () => {
      const triangle = new Triangle(0, 1, 2);
      expect(triangle.isValid()).toBe(false);
    });
  });

  describe("#getType()", () => {
    it("should identify equilateral triangles", () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.getType()).toBe("Gleichseitig");
    });

    it("should identify isosceles triangles", () => {
      const triangle = new Triangle(2, 2, 3);
      expect(triangle.getType()).toBe("Gleichschenklig");
    });

    it("should identify scalene triangles", () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.getType()).toBe("Ungleichseitig");
    });

    it("should identify invalid triangles", () => {
      const triangle = new Triangle(1, 1, 3);
      expect(triangle.getType()).toBe("Invalid");
    });
  });
});
