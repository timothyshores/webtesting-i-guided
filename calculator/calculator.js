module.exports = {
    add,
};

function add(args) {
    const array = Array.isArray(args) ? args : [...arguments];

    return array.reduce((previous, current) =>
        previous + current, 0
    );
}