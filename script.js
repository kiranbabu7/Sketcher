const gridContainer = document.querySelector(".grid-container");
const div = gridContainer.children;
const clearbtn = document.querySelector(".clear");
const eraserbtn = document.querySelector(".eraser");
const choosecolorbrn = document.querySelector(".choose-color");
const slider = document.querySelector(".slider");
const rainbow = document.querySelector(".rainbow");
const sliderText = document.querySelector(".slider-text");
let color = document.querySelector("#color").value;

eraserbtn.addEventListener("click", eraser);
clearbtn.addEventListener("click", clear);
choosecolorbrn.addEventListener("click", draw);
rainbow.addEventListener("click", randomColor);

slider.addEventListener("mouseup", gridGenerator);
function gridGenerator() {
  for (let i = 0; i <= slider.value * slider.value; i++) {
    const square = document.createElement("div");
    gridContainer.appendChild(square);
    gridContainer.style.cssText = `grid-template-columns: repeat(${slider.value}, 1fr);
    grid-template-rows: repeat(${slider.value}, 1fr)`;
    sliderText.textContent = `${slider.value} X ${slider.value}`;
  }
}
function draw() {
  gridContainer.addEventListener("mouseover", function (e) {
    color = document.querySelector("#color").value;
    e.target.style.backgroundColor = color;
  });
}

function eraser(e) {
  gridContainer.addEventListener("mouseover", function (e) {
    color = "white";
    e.target.style.backgroundColor = color;
  });
}

function clear() {
  for (let i = 0; i <= div.length - 1; i++) {
    div[i].style.backgroundColor = "white";
  }
  // div[0].style.backgroundColor = "white";
}

function randomColor() {
  gridContainer.addEventListener("mouseover", function (e) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    color = "#" + randomColor;
    e.target.style.backgroundColor = color;
  });
}
gridGenerator();
draw();
