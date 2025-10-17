
let humanScore = 0;
let computerScore = 0;

console.log(`Computer chose ${computerAnswer}!`)

if (userAnswer === 1 && computerAnswer === 2) {
    console.log("Computer wins!");
}
else if (userAnswer === 1 && computerAnswer === 3) {
    console.log("You win!");
}
else if (userAnswer === 2 && computerAnswer === 1) {
    console.log("You win!");
}
else if (userAnswer === 2 && computerAnswer === 3) {
    console.log("Computer wins!");
}
else if (userAnswer === 3 && computerAnswer === 1) {
    console.log("Computer wins!");
}
else if (userAnswer === 3 && computerAnswer === 2) {
    console.log("You win!");
}
else if (userAnswer === computerAnswer) {
    console.log("It's a draw...");
}

function getComputerChoice() {
    let choice = getRndInteger(1,3);
    if (choice === 1) {
        return "Rock";
    }
    else if (choice === 2) {
        return "Paper";
    }
    else if (choice === 3) {
        return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?: ");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}