function operate(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return 10 + 5;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

console.log(operate(10, 5, add)); // Output: 15
console.log(operate(10, 5, subtract)); // Output: 5
console.log(operate(10, 5, multiply)); // Output: 50
console.log(operate(10, 5, divide)); // Output: 2