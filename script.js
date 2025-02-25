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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
      console.log("Ok, we aren't playing now.");
    } else if (humanChoice === undefined || humanChoice === "") {
      console.log("Please choose Rock, Paper or Scissors.");
    } else if (
      !(
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
      )
    ) {
      console.log(
        "Please choose only Rock, Paper, or Scissors (spelling matters, but case doesn't). Try again."
      );
    } else if (humanChoice === computerChoice) {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      humanScore++;
      console.log(`You Chose: ${humanChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log("Uh-Oh! It's a draw.");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      humanScore++;
      console.log(`You Chose: ${humanChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
    } else {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      computerScore++;
      console.log(`You Chose: ${humanChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  playRound(humanSelection, computerSelection);
}
