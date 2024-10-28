// test/Triangle.test.js
const assert = require('assert');
const Triangle = require('..');

describe('Triangle', () => {
    describe('#isValid()', () => {
        it('should return true for a valid triangle', () => {
            const triangle = new Triangle(3, 4, 5);
            assert.strictEqual(triangle.isValid(), true);
        });

        it('should return false when triangle inequality is violated', () => {
            const triangle = new Triangle(1, 1, 3);
            assert.strictEqual(triangle.isValid(), false);
        });

        it('should return false for negative sides', () => {
            const triangle = new Triangle(-1, 2, 2);
            assert.strictEqual(triangle.isValid(), false);
        });

        it('should return false for zero sides', () => {
            const triangle = new Triangle(0, 1, 2);
            assert.strictEqual(triangle.isValid(), false);
        });
    });

    describe('#getType()', () => {
        it('should identify equilateral triangles', () => {
            const triangle = new Triangle(2, 2, 2);
            assert.strictEqual(triangle.getType(), 'Gleichseitig');
        });

        it('should identify isosceles triangles', () => {
            const triangle = new Triangle(2, 2, 3);
            assert.strictEqual(triangle.getType(), 'Gleichschenklig');
        });

        it('should identify scalene triangles', () => {
            const triangle = new Triangle(3, 4, 5);
            assert.strictEqual(triangle.getType(), 'Ungleichseitig');
        });

        it('should identify invalid triangles', () => {
            const triangle = new Triangle(1, 1, 3);
            assert.strictEqual(triangle.getType(), 'Invalid');
        });
    });
});