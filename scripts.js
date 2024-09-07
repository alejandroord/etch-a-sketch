var randColor = 1;

function color(a) {
  let color;
  if (randColor == 0) {
    color = "white";
  } else {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  let cell = document.getElementById(a);
  let style = window.getComputedStyle(cell);
  let opacity = style.getPropertyValue("opacity");
  opacity = opacity - 0.1;
  cell.style.opacity = opacity;
  cell.style.backgroundColor = color;
}
function createCells(num) {
  let totalnum = num * num;
  document.getElementById("container").innerHTML = "";
  for (x = 0; x < totalnum; x++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = 800 / num + "px";
    cell.style.width = 800 / num + "px";
    cell.id = "cell-" + x;
    cell.setAttribute("onmouseover", 'color("cell-' + x + '")');
    document.getElementById("container").appendChild(cell);
  }
}
createCells(4);
function maxCells() {
  let maxCells = prompt("Number of cells");
  if (maxCells <= 100 && maxCells >= 1) {
    createCells(maxCells);
    document.getElementById("button").innerHTML="Set the number of cells: "+maxCells;
  } else {
    alert("Put a value");
  }
}
