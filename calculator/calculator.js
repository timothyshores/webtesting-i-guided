module.exports = {
    add,
};

function add(args) {
    const numbers = Array.isArray(args) ? args : [...arguments];

    return numbers.reduce((previous, current) =>
        previous + current, 0
    );
}