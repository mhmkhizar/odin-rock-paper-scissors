getComputerChoice();

function getComputerChoice() {
  // get random number between 1 to 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // return a choice on the bases of the generated number
  if (randomNumber === 1) {
    return console.log("rock");
  } else if (randomNumber === 2) {
    return console.log("paper");
  } else {
    return console.log("scissors");
  }
}
