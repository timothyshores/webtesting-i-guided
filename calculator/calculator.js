module.exports = {
    add,
};

function add(...args) {
    return args.reduce((previous, current) =>
        previous + current, 0
    );
}