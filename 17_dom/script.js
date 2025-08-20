const container = document.querySelector("#container");

const newPara = document.createElement("p");
newPara.textContent = "Hey I'm red!";
newPara.style.color = "red";

const newHeader = document.createElement("h3");
newHeader.textContent = "I'm a blue h3!";
newHeader.style.color = "blue";

const div = document.createElement("div");
const newHeader1 = document.createElement("h1");
const para = document.createElement("p");
newHeader1.textContent = "I'm in a div!"
para.textContent = "ME TOO!";
div.append(newHeader1, para);

container.appendChild(newPara);
container.appendChild(newHeader);
container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#button");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

// OR...

function alertFunction() {
    alert("ALERT");
}

btn2.addEventListener("click", function (e) {
    console.log(e);
});