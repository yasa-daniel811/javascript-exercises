const input = document.getElementById("calculator-head");
const numberButtons = document.getElementById("number-buttons").querySelectorAll("button");
const operatorButtons = document.getElementById("function-buttons").querySelectorAll(".operator");
const cancelButton = document.getElementById("c");

let numberList = [];
let number = "";
let operatorList = [];

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(intArray) {
	return intArray.reduce((sum, int) => sum + int, 0);
};

const multiply = function(intArray) {
  return intArray.reduce((product, int) => product * int);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
};


numberButtons.forEach(button => button.addEventListener("click", (event) => {
    number = number.concat(button.id);
    input.value = number;
}))


operatorButtons.forEach(button => button.addEventListener("click", (event) => {
    operatorList.push(button.id);
    numberList.push(number);
    // reset the 'screen' and internal number
    number = "";
    input.value = number;

    console.log("numberList: ");
    numberList.forEach(number => {
      console.log(number);
    });
    console.log("operatorList: ");
    operatorList.forEach(operator => {
      console.log(operator);
    });
}));

cancelButton.addEventListener("click", (event) => {
    input.value = "";
    number = "";
    numberList = [];
    operator = "";
    operatorList = [];
});