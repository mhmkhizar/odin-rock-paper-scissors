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
  const humanChoice = prompt("Choose Rock, Paper or Scissors?");
  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  function playRound(humanChoice, computerChoice) {
    if (
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
      console.log("Uh-Oh! It's a tie.");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You Won! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }
}

playGame();
