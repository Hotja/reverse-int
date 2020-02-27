module.exports = function reverse (n) {
    a = String(Math.abs(n));
    return +(a.split("").reverse().join(""));
}
