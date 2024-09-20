// Write a function that flattens an array of arrays into a single array.

let input = [[1, 2], [3, 4], [4, 5, 6]];

let output = input.flat(); // Flattens the array by one level

console.log(output); // Output: [1, 2, 3, 4, 4, 5, 6]


// OR 

// let input = [[1, 2], [3, 4], [4, 5, 6]];
// let output = [];

// for (let i = 0; i < input.length; i++) {
//     output = output.concat(input[i]); // Use concat method to merge arrays
// }

// console.log(output); // Output: [1, 2, 3, 4, 4, 5, 6]
