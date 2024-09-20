// Find the First Longest Word in a Sentence

let input = "I am Devansh Bhardwaj"

let arr = input.split(" ")
let max = "";

for(let i = 0;i<arr.length;i++){
    if(arr[i].length>max.length) max = arr[i]
}

console.log(max)