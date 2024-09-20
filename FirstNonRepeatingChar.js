// Find the first non-repeating character in a string

let input = "ddddddds"

let map = {}

for(let x in input){
    map[input[x]] ? map[input[x]]++ : map[input[x]] = 1;
}
console.log(map)
for(let x in input){
    if(map[input[x]]===1){
        console.log("First Non-Repeating Character is : ", input[x])
        break;
    }
}