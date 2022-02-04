// The methods here don't need to be exported as they affect global types.
// Load these as early into the application as possible.

Number.prototype.between = function (a, b) {
    var min = Math.min.apply(Math, [a, b]),
        max = Math.max.apply(Math, [a, b]);
    return this > min && this < max;
};
