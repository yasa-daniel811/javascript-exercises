const input = document.getElementById("calculator-head");
const numberButtons = document.getElementById("number-buttons").querySelectorAll("button");

numberButtons.forEach(button => button.addEventListener("click", (event) => {
    input.value = button.id;
}))