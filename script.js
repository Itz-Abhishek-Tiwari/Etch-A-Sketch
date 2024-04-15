let grid = document.querySelector(".grid");
let number;
let addBtn = document.querySelector(".addBtn");
let removeBtn = document.querySelector(".removeBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");
let hover = document.querySelector(".hover");

function rowFunction() {
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  grid.appendChild(row);
}

function boxFunction() {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  grid.lastChild.appendChild(box);

  box.addEventListener("mouseover", () => {
    // box.classList.add("hover");
    box.style.backgroundColor = "#dc8a78";
    console.log(box);
  });
}
function boxFunctionTwo() {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  grid.lastChild.appendChild(box);

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = rainbow();
    console.log(box);
  });
}

addBtn.addEventListener("click", () => {
  gridMaker();
});
rainbowBtn.addEventListener("click", () => {
  gridMakerTwo();
});
function gridMaker() {
  number = Number(document.querySelector(".userInput").value);
  clearGrid();
  if (number >= 51) {
    grid.innerHTML = "<h3>Please add value less than or equal to 50</h3>";
  } else {
    for (let i = 0; i < number; i++) {
      rowFunction();
      for (let j = 0; j < number; j++) {
        boxFunction();
      }
    }
  }
}
function gridMakerTwo() {
  number = Number(document.querySelector(".userInput").value);
  clearGrid();
  if (number >= 51) {
    grid.innerHTML = "<h3>Please add value less than or equal to 50</h3>";
  } else {
    for (let i = 0; i < number; i++) {
      rowFunction();
      for (let j = 0; j < number; j++) {
        boxFunctionTwo();
      }
    }
  }
}

function rainbow() {
  const colors = [
    "#dc8a78", // Rosewater
    "#dd7878", // Flamingo
    "#ea76cb", // Pink
    "#8839ef", // Mauve
    "#d20f39", // Red
    "#e64553", // Maroon
    "#fe640b", // Peach
    "#df8e1d", // Yellow
    "#40a02b", // Green
    "#179299", // Teal
    "#04a5e5", // Sky
    "#209fb5", // Sapphire
    "#1e66f5", // Blue
    "#7287fd", // Lavender
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
removeBtn.addEventListener("click", () => {
  clearGrid();
});

function clearGrid() {
  grid.innerHTML = "";
}
