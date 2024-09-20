// Reverse all the words that have length equal to or greater than 5

let input = "These are the people of Devansh."
let arr = input.split(" ")
let newArr = []

for(let i=0;i<arr.length;i++){
    if(arr[i].length>=5){
        let reversed = arr[i].split("").reverse().join("")
        newArr.push(reversed) 
    }
    else{
        newArr.push(arr[i])
    }
}

let output = newArr.join(" ")

console.log(output)