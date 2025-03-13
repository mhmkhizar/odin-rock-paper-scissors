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
      e.target.classList.add("button-press");
      e.target.addEventListener(
        "transitionend",
        (e) => {
          e.target.classList.remove("button-press");
        },
        { once: true }
      );

      roundCount++;
      const computerCurrentChoice = getComputerChoice();
      playRound(playerCurrentChoice, computerCurrentChoice, roundCount);
    }
  });

  function playRound(playerChoice, computerChoice, roundCount) {
    const roundCountParaSpan = document.querySelector(
      ".round-count-text > .count"
    );
    const commentaryPara = document.querySelector(".commentary-text");
    const commentaryParaSpan = document.querySelector(
      ".commentary-text > .text"
    );
    const playerCurrentChoicePara = document.querySelector(
      ".player-progress > .player-current-choice"
    );
    const playerCurrentScoreParaSpan = document.querySelector(
      ".player-progress > .player-current-score > .score"
    );
    const computerCurrentChoicePara = document.querySelector(
      ".computer-progress > .computer-current-choice"
    );
    const computerCurrentScoreParaSpan = document.querySelector(
      ".computer-progress > .computer-current-score > .score"
    );

    if (playerChoice === computerChoice) {
      roundCountParaSpan.textContent = roundCount;
      commentaryPara.classList.add("text-highlight");
      commentaryParaSpan.textContent = "It's a draw.";
      playerCurrentChoicePara.textContent =
        convertChoiceTextToEmoji(playerChoice);
      playerCurrentScoreParaSpan.textContent = playerScore;
      computerCurrentChoicePara.textContent =
        convertChoiceTextToEmoji(computerChoice);
      computerCurrentScoreParaSpan.textContent = computerScore;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      roundCountParaSpan.textContent = roundCount;
      commentaryPara.classList.add("text-highlight");
      commentaryParaSpan.textContent = "You win.";
      playerCurrentChoicePara.textContent =
        convertChoiceTextToEmoji(playerChoice);
      playerCurrentScoreParaSpan.textContent = playerScore;
      computerCurrentChoicePara.textContent =
        convertChoiceTextToEmoji(computerChoice);
      computerCurrentScoreParaSpan.textContent = computerScore;
    } else {
      computerScore++;
      roundCountParaSpan.textContent = roundCount;
      commentaryPara.classList.add("text-highlight");
      commentaryParaSpan.textContent = "You lose.";
      playerCurrentChoicePara.textContent =
        convertChoiceTextToEmoji(playerChoice);
      playerCurrentScoreParaSpan.textContent = playerScore;
      computerCurrentChoicePara.textContent =
        convertChoiceTextToEmoji(computerChoice);
      computerCurrentScoreParaSpan.textContent = computerScore;
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

function convertChoiceTextToEmoji(text) {
  switch (text) {
    case "rock":
      return "🪨";
    case "paper":
      return "📄";
    case "scissors":
      return "✂️";
    default:
      return null;
  }
}
