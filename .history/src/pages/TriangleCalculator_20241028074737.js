// src/pages/TriangleCalculator.js
const Triangle = require('../models/Triangle');

class TriangleCalculator {
    constructor() {
        this.triangle = null;
    }

    createTriangle(a, b, c) {
        this.triangle = new Triangle(a, b, c);
        return this.triangle;
    }

    validateTriangle() {
        return this.triangle.isValid();
    }

    getTriangleType() {
        return this.triangle.getType();
    }
}

module.exports = TriangleCalculator;