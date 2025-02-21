const computerSelection = console.log(getComputerChoice());
const humanSelection = console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

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
  const userChoice = prompt("Rock, Paper or Scissors?");

  if (
    userChoice.toLowerCase() === "rock" ||
    userChoice.toLowerCase() === "paper" ||
    userChoice.toLowerCase() === "scissors"
  ) {
    return userChoice.toLowerCase();
  } else {
    return "Please choose Rock or Paper or Scissors only. Try again.";
  }
}
