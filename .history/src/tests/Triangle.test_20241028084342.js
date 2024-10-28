const Triangle = require('../Triangle'); // Adjust the path if necessary

describe('Triangle Class', () => {
    test('Triangle (3, 4, 5) should return "Scalene triangle"', () => {
        const triangle1 = new Triangle(3, 4, 5);
        expect(triangle1.getType()).toBe('Scalene triangle');
    });

    test('Triangle (2, 2, 2) should return "Equilateral triangle"', () => {
        const triangle2 = new Triangle(2, 2, 2);
        expect(triangle2.getType()).toBe('Equilateral triangle');
    });

    test('Triangle (2, 2, 3) should return "Isosceles triangle"', () => {
        const triangle3 = new Triangle(2, 2, 3);
        expect(triangle3.getType()).toBe('Isosceles triangle');
    });

    test('Triangle (1, 2, 3) should return "Not a triangle"', () => {
        const triangle4 = new Triangle(1, 2, 3);
        expect(triangle4.getType()).toBe('Not a triangle');
    });
});
