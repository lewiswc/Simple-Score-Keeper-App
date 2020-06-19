var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var Reset = document.getElementById("Re");
var gameOver = false;
var winningScore = 5;
var pwinner = document.getElementById("pwinner");

var p1Display = document.querySelector("#p1Display");
var p1score = 0;

var p2Display = document.querySelector("#p2Display");
var p2score = 0;

p1button.addEventListener("click", function () {
  if (!gameOver) {
    p1score++;
    p1Display.textContent = p1score;
  }
  if (p1score === winningScore) {
    p1Display.classList.add("winner");
    pwinner.textContent = "Player 1 Wins !!! ";
    pwinner.classList.add("winner");
    gameOver = true;
  }
});

p2button.addEventListener("click", function () {
  if (!gameOver) {
    p2score++;
    p2Display.textContent = p2score;
  }
  if (p2score === winningScore) {
    p2Display.classList.add("winner");
    pwinner.textContent = "Player 2 Wins !!! ";
    pwinner.classList.add("winner");
    gameOver = true;
  }
});

Reset.addEventListener("click", function () {
  p1score = 0;
  p2score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  pwinner.textContent = "First To Five";
  pwinner.classList.remove("winner");
  gameOver = false;
});
