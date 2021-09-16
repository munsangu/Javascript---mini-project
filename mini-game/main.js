import updateScore from "./update";

const p1Set = {
  score: 0,
  button: document.querySelector("#btnP1"),
  display: document.querySelector("#player1")
}
const p2Set = {
  score: 0,
  button: document.querySelector("#btnP2"),
  display: document.querySelector("#player2")
}
const setGame = document.querySelector("#playto");
const resetBtn = document.querySelector("#reset");

let winningScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
};

function reset() {
  isGameOver = false;
  for(let p of [p1Set, p2Set]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

p1Set.button.addEventListener("click", () => {
  updateScore(p1Set, p2Set);
});

p2Set.button.addEventListener("click", () => {
  updateScore(p2Set, p1Set);
});

setGame.addEventListener('change', () => {
  winningScore = Number(setGame.value);
  reset();
})

resetBtn.addEventListener("click", reset);



