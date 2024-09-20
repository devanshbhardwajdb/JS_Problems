// function to return first N and Last N elements of an array 

const arr = [1,2,3,4,5,6,7,8,9,10]

function firstN (n){
    return arr.slice(0,n)
}
function lastN (n){
    return arr.slice(-n)
}

const newarr = firstN(4)
const lastarr = lastN(1)

console.log(newarr)
console.log(lastarr)