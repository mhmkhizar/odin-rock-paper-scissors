playGame();

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const roundCountSpan = document.querySelector(".round-count-text > .count");
const commentaryPara = document.querySelector(".commentary-text");
const commentarySpan = document.querySelector(".commentary-text > .text");
const playerChoicePara = document.querySelector(".player-choice");
const playerScoreSpan = document.querySelector(".player-score .score");
const computerChoicePara = document.querySelector(".computer-choice");
const computerScoreSpan = document.querySelector(".computer-score .score");
const gameOverModal = document.getElementById("game-over-modal");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.getElementById("play-again");

function playGame() {
  const playerChoices = document.querySelector(".emojis-container");

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
    commentarySpan.textContent = "It's a draw.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    commentarySpan.textContent = "You win.";
  } else {
    computerScore++;
    commentarySpan.textContent = "You lose.";
  }

  roundCountSpan.textContent = roundCount;
  commentaryPara.classList.add("text-highlight");
  playerChoicePara.textContent = convertChoiceTextToEmoji(playerChoice);
  playerScoreSpan.textContent = playerScore;
  computerChoicePara.textContent = convertChoiceTextToEmoji(computerChoice);
  computerScoreSpan.textContent = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    gameOverModal.classList.remove("hidden");
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

  gameOverModal.classList.add("hidden");
  roundCountSpan.textContent = roundCount;
  commentaryPara.classList.remove("text-highlight");
  commentarySpan.textContent = "First to score 5 points wins the game.";
  playerChoicePara.textContent = "❓";
  playerScoreSpan.textContent = playerScore;
  computerChoicePara.textContent = "❓";
  computerScoreSpan.textContent = computerScore;
}
