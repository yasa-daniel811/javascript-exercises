const input = document.getElementById("calculator-head");
const numberButtons = document.getElementById("number-buttons").querySelectorAll("button");
const operatorButtons = document.getElementById("function-buttons").querySelectorAll(".operator");
const cancelButton = document.getElementById("c");
const equalButton = document.getElementById("=");

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
    //if there are the same number of operators as numbers, do nothing (avoid stacking operators)
    if (numberList.length === (operatorList.length + 1)) return;

    //add the current number and the operator to their arrays for calculating later
    operatorList.push(button.id);
    numberList.push(number);

    //reset the 'screen' and internal number
    number = "";
    input.value = "";

    updateFormulaBar();
}));

cancelButton.addEventListener("click", event => {
    input.value = "";
    number = "";
    numberList = [];
    operator = "";
    operatorList = [];
    updateFormulaBar();
});

equalButton.addEventListener("click", event => {
  

})

function updateFormulaBar() {
  const formulaBar = document.getElementById("formula-bar");
  let formula = "";
  for (let i = 0; i < numberList.length; i++) {
    console.log(numberList[i]);
    formula = formula.concat(numberList[i]);
    formula = formula.concat(operatorList[i]);
  }
  formulaBar.textContent = formula;
}
