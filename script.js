function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Choose Rock, Paper or Scissors:");

  if (humanChoice === null || humanChoice === undefined || humanChoice === "") {
    return humanChoice;
  } else {
    return humanChoice.toLowerCase();
  }
}

let humanScore = 0;
let computerScore = 0;
