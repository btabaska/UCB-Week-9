const { sum, difference, product, quotient } = require("./maths.js");
var operation = process.argv[3];
var numOne = process.argv[2];
var numTwo = process.argv[4];

switch (operation) {
  case "+":
    console.log(sum(numOne, numTwo));
    break;
  case "-":
    console.log(difference(numOne, numTwo));
    break;
  case "x":
    console.log(product(numOne, numTwo));
    break;
  case "/":
    console.log(quotient(numOne, numTwo));
    break;
}
