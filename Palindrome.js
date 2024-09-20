// Check is a string is palindrome or not

let input = "namann"

let reversed = input.toLowerCase().split("").reverse().join("")

if(input===reversed){
    console.log("This is Palindrome String")
}
else{
    console.log("This is not a Palindrome")
}