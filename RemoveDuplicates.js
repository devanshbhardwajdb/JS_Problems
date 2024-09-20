// Remove Duplicates from an array

let input = [1, 1, 1, 2, 2, 2, 3, 3, 4];
let map = {};
let output = [];

for (let i = 0; i < input.length; i++) {
    if (!map[input[i]]) {
        map[input[i]] = true; // Mark the element as seen
        output.push(input[i]); // Add unique elements to output
    }
}

console.log(output); // Output: [1, 2, 3, 4]
