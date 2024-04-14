let mainDiv;
let section = document.querySelector(".section");
let gridDivs = [];
let userInput = document.querySelector("input");
let number;
let randomColor = "#";
function getRandomColor() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  //   6
  for (let i = 0; i < 6; i++) {
    let random = parseInt(Math.random() * digits.length);
    randomColor += digits[random];
  }
  return randomColor;
}

document.querySelector(".rainBow").addEventListener("mouseover", () => {
  getRandomColor();
  document.querySelector(".hover").style.backgroundColor = randomColor;
});

document.querySelector(".addBtn").addEventListener("click", () => {
  number = Number(userInput.value);
  console.log(number);
  getGrid();
  console.log(number);
});
document.querySelector(".removeBtn").addEventListener("click", () => {
  clearDiv();
});

function getGrid() {
  clearDiv();
  for (let i = 0; i < number; i++) {
    mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "main");
    section.appendChild(mainDiv);
    for (let j = 0; j < number; j++) {
      column();
    }
  }
  function column() {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("class", "grid");
    mainDiv.appendChild(gridDiv);
    gridDivs.push(gridDiv);
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.classList.add("class", "hover");
    });
  }
}

function clearDiv() {
  section.innerHTML = "";
  gridDivs = [];
}
