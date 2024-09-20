// Rotate an array by n positions

let input = [1,2,3,4,5,6]
let n = 3

let N = n%input.length

let temp = input.slice(-N)
let temp2 = input.slice(0,N)


let output = temp.concat(temp2)
console.log(output)