const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    
    event.preventDefault();
    const inputText = input.value;
    alert(inputText);
    input.textContent = "";
})