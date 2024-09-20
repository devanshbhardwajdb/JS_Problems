// Find the second largest number in an array

let input = [22, 33, 1, 44, 100]
let max = 0
let secondMax = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] > max) max = input[i]
}
for (let i = 0; i < input.length; i++) {
    if (input[i] < max && input[i]>secondMax) secondMax = input[i]
}

console.log(secondMax)