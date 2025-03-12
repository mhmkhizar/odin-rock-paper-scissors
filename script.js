playGame();

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let roundCount = 0;

  const playerChoices = document.querySelector(
    ".player-choice-section > .emojis-container"
  );
  playerChoices.addEventListener("click", (e) => {
    const playerCurrentChoice = getPlayerChoice(e);

    if (playerCurrentChoice) {
      e.target.classList.add("highlight");
      e.target.addEventListener(
        "transitionend",
        function (e) {
          if (e.propertyName === "transform") {
            this.classList.remove("highlight");
          }
        },
        { once: true }
      );
      roundCount++;
      const computerCurrentChoice = getComputerChoice();
      playRound(playerCurrentChoice, computerCurrentChoice, roundCount);
    }
  });

  function playRound(playerChoice, computerChoice, roundCount) {
    if (playerChoice === computerChoice) {
      playerChoice =
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      console.log(`Round: ${roundCount}`);
      console.log(`You Chose: ${playerChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log("Uh-Oh! It's a draw.");
      console.log(
        `Score Card: You(${playerScore}) | Computer(${computerScore})`
      );
      console.log(`------------------------`);
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      playerChoice =
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      console.log(`Round: ${roundCount}`);
      console.log(`You Chose: ${playerChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
      console.log(
        `Score Card: You(${playerScore}) | Computer(${computerScore})`
      );
      console.log(`------------------------`);
    } else {
      computerScore++;
      playerChoice =
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
      computerChoice =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      console.log(`Round: ${roundCount}`);
      console.log(`You Chose: ${playerChoice}`);
      console.log(`Computer Chose: ${computerChoice}`);
      console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
      console.log(
        `Score Card: You(${playerScore}) | Computer(${computerScore})`
      );
      console.log(`------------------------`);
    }
  }
}

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

function getPlayerChoice(e) {
  const validChoices = ["rock", "paper", "scissors"];
  const choice = e.target.id;

  if (validChoices.includes(choice)) {
    return choice;
  }

  return null;
}
