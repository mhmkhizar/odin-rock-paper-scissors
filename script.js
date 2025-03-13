playGame();

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const roundCountParaSpan = document.querySelector(".round-count-text > .count");
const commentaryPara = document.querySelector(".commentary-text");
const commentaryParaSpan = document.querySelector(".commentary-text > .text");
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
const popup = document.getElementById("game-over-popup");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.getElementById("play-again");

function playGame() {
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

      const computerCurrentChoice = getComputerChoice();

      playRound(
        playerCurrentChoice,
        computerCurrentChoice,
        playerScore,
        computerScore,
        roundCount
      );
    }
  });
}

function playRound(playerChoice, computerChoice) {
  roundCount++;

  if (playerChoice === computerChoice) {
    commentaryParaSpan.textContent = "It's a draw.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    commentaryParaSpan.textContent = "You win.";
  } else {
    computerScore++;
    commentaryParaSpan.textContent = "You lose.";
  }

  roundCountParaSpan.textContent = roundCount;
  commentaryPara.classList.add("text-highlight");
  playerCurrentChoicePara.textContent = convertChoiceTextToEmoji(playerChoice);
  playerCurrentScoreParaSpan.textContent = playerScore;
  computerCurrentChoicePara.textContent =
    convertChoiceTextToEmoji(computerChoice);
  computerCurrentScoreParaSpan.textContent = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    popup.classList.remove("hidden");
    resultText.textContent =
      playerScore === 5 ? "Congratulations! You won!" : "Uh-Oh! Computer won!";
    playAgainBtn.addEventListener("click", resetGame);
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

function resetGame(e) {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;

  popup.classList.add("hidden");
  roundCountParaSpan.textContent = roundCount;
  commentaryPara.classList.remove("text-highlight");
  commentaryParaSpan.textContent = "First to score 5 points wins the game.";
  playerCurrentChoicePara.textContent = "❓";
  playerCurrentScoreParaSpan.textContent = playerScore;
  computerCurrentChoicePara.textContent = "❓";
  computerCurrentScoreParaSpan.textContent = computerScore;
}
