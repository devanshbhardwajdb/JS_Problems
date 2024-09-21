// Check if number is an Armstrong number
let input = 153
let num = input

let n = num.toString().length
let sum = 0

// console.log(num%10)

while (num !== 0) {
    let temp = num % 10
    sum += Math.pow(temp,n)
    console.log(sum)
    num = Math.floor(num / 10)
}

if (sum === input) {
    console.log(true)
}
else {
    console.log(false)
}