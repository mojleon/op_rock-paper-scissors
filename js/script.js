var aScore = [0, 0];
var aHand = ["PAPER", "ROCK", "SCISSORS"];

let drawSection = document.querySelector("#draw").style;
let scoreSection = document.querySelector("#score").style;

function computerHand() {
  return aHand[Math.floor(Math.random() * 3)];
}

function playGame(playerHand, computerHand) {
  if (playerHand == computerHand) {
    draw();
    return;
  }

  let oWin = {
    0: 1,
    1: 2,
    2: 0,
  };

  if (oWin[aHand.indexOf(playerHand)] == aHand.indexOf(computerHand))
    aScore[0]++;
  else aScore[1]++;

  changeDom();
  gameOver();
}

function changeDom() {
  document.querySelector("#win").innerText = aScore[0];
  document.querySelector("#lose").innerText = aScore[1];
}

function gameOver() {
  if (aScore[0] == 5) alert("YOU WIN!");
  if (aScore[1] == 5) alert("YOU LOSE!");
}

function draw() {
  drawSection.display = "block";
  scoreSection.display = "none";
}

function resetScreen() {
  drawSection.display = "none";
  scoreSection.display = "flex";
}

function startGame(butValue) {
  if (aScore.includes(5)) return;

  resetScreen();
  playGame(butValue, computerHand());
}
