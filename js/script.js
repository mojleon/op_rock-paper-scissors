var aScore = [0, 0];
var aHand = ["PAPER", "ROCK", "SCISSORS"];

function computerHand() {
  return aHand[Math.floor(Math.random() * 3)];
}

function playGame(playerHand, computerHand) {
  if (playerHand == computerHand) {
    alert("draw");
    return startGame();
  }

  let oWin = {
    0: 1,
    1: 2,
    2: 0,
  };

  if (oWin[aHand.indexOf(playerHand)] == aHand.indexOf(computerHand)) {
    alert("VICTORY!");
    aScore[0]++;
    return startGame();
  }

  alert("LOSER!");
  aScore[1]++;
  return startGame();
}

function startGame() {
  console.log(`The score so far is: 
YOU ${aScore[0]} COM ${aScore[1]}`);

  let sCalWin = calculateWinner();

  if (sCalWin) return console.log("GAME OVER!");

  let sValue = prompt(
    `Input one of the following options:
ROCK, PAPER, SCISSORS`,
    aHand[Math.floor(Math.random() * 3)]
  );

  sValue = sValue.toUpperCase();

  if (!aHand.includes(sValue)) return startGame();

  playGame(sValue, computerHand());
}

function calculateWinner() {
  if (aScore.includes(5)) return true;
}

startGame();
