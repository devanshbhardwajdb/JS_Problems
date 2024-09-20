// This line will output undefined due to hoisting because hoisting makes all variables at top and set them as declared as undefined in the Memory Phase
console.log(age) 

// Now the value has been assigned so it will put the value in "Code Phase"
var age = 20

console.log(age)