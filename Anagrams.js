// Group all anagrams in a given array 
// so the output[] = [ [ 'ate', 'tea', 'eat' ], [ 'tab', 'bat' ], [ 'pencil' ] ]

let input = ['ate','tea','eat','tab','bat','pencil']

let map = {}
let output = [] 

for(let i =0;i<input.length;i++){
    let sorted = input[i].split("").sort().join("")

    if(map[sorted]){
        map[sorted].push(input[i])
    }
    else{
        let temp = [input[i]]
        map[sorted] = temp
    }
}

for(let x in map){
  output.push(map[x])
}

console.log(output)