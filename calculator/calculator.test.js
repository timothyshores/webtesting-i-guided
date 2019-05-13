const calculator = require('./calculator.js');

// test away!

it('runs the test', () => {
    const expected = true;
    const actual = true;
    expect(actual).toBe(expected);
});

describe('calculator.js', () => {
    describe('add() method', () => {
        it('return the sum of two numbers', () => {
            const actual = calculator.add(2, 2);
            const expected = 2 + 2;
            expect(actual).toBe(expected);
        });
    });
});