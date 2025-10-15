const { useDeferredValue } = require("react");

const listContainer = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputText = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = inputText;
    listItem.appendChild(listButton);
    listButton.textContent = 'Delete';
    listContainer.appendChild(listItem);
})