const container = document.getElementById("container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const input = document.querySelector("label input");
const clear = document.getElementById("clear");
const warning = document.getElementById("warning");

let SQUARES = 0;

input.addEventListener("change", (e) => {
  // console.log(Number(e.target.value));
  let value = e.target.value;

  if(value > 0 && value < 701) {
    SQUARES = Number(value);
  }  else {
    warning.innerText = "Write a number in range";
  }

  for(let i = 0 ; i < SQUARES ; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      setColor(square);
    })
    square.addEventListener("mouseout", () => {
      removeColor(square);
    })
    container.appendChild(square);
  }
  input.value = "";
})

clear.addEventListener("click", () => {
  const sqars = document.querySelectorAll(".square");
  sqars.forEach(sqar => sqar.remove());
  input.value = "";
  warning.innerText ="";
})

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
