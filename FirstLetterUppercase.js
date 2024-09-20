// Make first letter of every word to uppercase in a string

const str = "hi bhai kesa hai devansh";

const capital = str
  .split(" ")
  .map((item) => item[0].toUpperCase() + item.substr(1))
  .join(" ");

console.log(capital);
