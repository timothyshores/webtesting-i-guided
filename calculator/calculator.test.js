const { add } = require('./calculator.js');

// test away!

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
    });
});