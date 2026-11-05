
    // spread operator
const number = [1, 2, 3, ];
const allNumber = [...number, 4, 5, 6];
console.log(allNumber); // Output: [1, 2, 3, 4, 5, 6]


console.log("------------------");


// rest operator
function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(2, 3, 4)); // Output: 24