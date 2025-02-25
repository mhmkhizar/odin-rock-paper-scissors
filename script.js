playGame();

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

  function playRound(humanChoice, computerChoice, count) {
    if (humanChoice === null) {
      console.warn("Ok, we aren't playing now.");
    } else if (humanChoice === undefined || humanChoice === "") {
      console.warn("Please choose Rock, Paper or Scissors.");
    } else if (
      !(
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
      )
    ) {
      console.warn(
        "Please choose only Rock, Paper, or Scissors (spelling matters, but case doesn't). Try again."
      );
    } else if (humanChoice === computerChoice) {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      humanScore++;
      console.log(`Round: ${count}`);
      console.log(`You Chose: ${humanChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log("Uh-Oh! It's a draw.");
      console.log(
        `Score Card: You(${humanScore}) | Computer(${computerScore})`
      );
      console.log(`------------------------`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      humanScore++;
      console.log(`Round: ${count}`);
      console.log(`You Chose: ${humanChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
      console.log(
        `Score Card: You(${humanScore}) | Computer(${computerScore})`
      );
      console.log(`------------------------`);
    } else {
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      computerScore++;
      console.log(`Round: ${count}`);
      console.log(`You Chose: ${humanChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      console.log(
        `Score Card: You(${humanScore}) | Computer(${computerScore})`
      );
      console.log(`------------------------`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection, i);

    if (humanSelection === null) {
      i = 1;
      break;
    } else if (
      (humanSelection === undefined || humanSelection === "") &&
      i >= 1
    ) {
      i--;
    } else if (
      !(
        humanSelection === "rock" ||
        humanSelection === "paper" ||
        humanSelection === "scissors"
      ) &&
      i >= 1
    ) {
      i--;
    }
  }
}
