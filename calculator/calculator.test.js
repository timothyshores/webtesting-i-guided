const { add } = require('./calculator.js');

it('runs the test', () => {
    const expected = true;
    const actual = true;
    expect(actual).toBe(expected);
});

describe('calculator.js', () => {
    describe('add() method', () => {
        it('return the sum of two numbers', () => {
            expect(add(2, 2)).toBe(4);
            expect(add(2, 1)).toBe(3);
            expect(add(2, 0)).toBe(2);
            expect(add(0, 1)).toBe(1);
        });
        it('returns 0 when called without arguments', () => {
            expect(add()).toBe(0);
        });
        it('returns the number if only one value is provided', () => {
            expect(add(1)).toBe(1);
            expect(add(0)).toBe(0);
        });
        it('returns the sum of multiple values', () => {
            expect(add(1, 2, 3)).toBe(6);
            expect(add(1, 2, 3, 4)).toBe(10);
            expect(add(1, 2, 3, 4, 5)).toBe(15);
        });
        it('returns the sum of an array', () => {
            expect(add([1, 2])).toBe(3);
            expect(add([1, 2, 3])).toBe(6);
            expect(add([1, 2, 3, 4])).toBe(10);
        });
    });
});