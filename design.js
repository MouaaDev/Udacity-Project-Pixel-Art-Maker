// Selecting necessary DOM Elements
const pixelCanvas = document.querySelector("#pixelCanvas");
const gridWidth = document.querySelector("#inputWidth");
const gridHeight = document.querySelector("#inputHeight");
const colorPicker = document.querySelector("#colorPicker");
const submitBtn = document.querySelector("#submit-btn");

let isDrawing = false;
//Add Event to the button
submitBtn.addEventListener("click", myGrid);
//Creating Grid
function myGrid(event) {
  event.preventDefault();
  //Clearing the previous canvas when the user set another width & height
  pixelCanvas.innerHTML = "";

  for (let row = 0; row < gridHeight.value; row++) {
    const gridRow = document.createElement("tr");
    for (let col = 0; col < gridWidth.value; col++) {
      const gridCol = document.createElement("td");
      gridCol.classList.add("pixel");
      gridRow.appendChild(gridCol);
    }
    pixelCanvas.appendChild(gridRow);
  }
  //Add Event to the created grid
  pixelCanvas.addEventListener("mousedown", function () {
    isDrawing = true;
  });
  pixelCanvas.addEventListener("mousemove", draw);
}

// function to draw pixels
function draw(event) {
  if (isDrawing) {
    event.stopPropagation();
    const color = colorPicker.value;
    event.target.style.backgroundColor = color;
  }
}

// Stop drawing once the user stop using mouse
window.addEventListener("mouseup", function () {
  if (isDrawing) {
    isDrawing = false;
  }
});
