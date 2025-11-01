const input = document.getElementById("calculator-head");
const numberButtons = document.getElementById("number-buttons").querySelectorAll("button");
const operatorButtons = document.getElementById("function-buttons").querySelectorAll(".operator");
const cancelButton = document.getElementById("c");
const equalButton = document.getElementById("=");

let numberList = [];
let number = "";
let operatorList = [];

function add(a, b) {
	return a + b;
};

function subract(a, b) {
	return a - b
};

 function sum(intArray) {
	return intArray.reduce((sum, int) => sum + int, 0);
};

function multiply(intArray) {
  return intArray.reduce((product, int) => product * int);
};

function divide(intArray) {
  return intArray.reduce((factor, int) => factor / int);
}

function power(a, b) {
	return Math.pow(a, b);
};

function factorial(a) {
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

    console.log(numberList);
    console.log(operatorList);
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
  if (operatorList.length > 0) {
    updateFormulaBar();
    numberList.push(number);
    operatorPrecedenceList = ["/", "*", "+", "-"]
    operatorPrecedenceList.forEach(operator => {
      while (operatorList.find(element => element === operator)) {
        operatorIndex = operatorList.indexOf(operator);
        result = calculate(numberList[operatorIndex], numberList[operatorIndex + 1], operator);
        numberList.splice(operatorIndex, 2, result);
        operatorList.splice(operatorIndex, 1);
        console.log(numberList);
        console.log(operatorList);
      }
    })
  }

  console.log(numberList);
  input.value = numberList[0];
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

function calculate(num1, num2, operator) {
  int1 = parseFloat(num1);
  int2 = parseFloat(num2);
  if (operator==="/") 
    return divide([int1, int2]);
  else if (operator==="*")
    return multiply([int1, int2]);
  else if (operator==="+")
    return add(int1, int2);
  else if (operator==="-")
    return subract(int1, int2);
}
