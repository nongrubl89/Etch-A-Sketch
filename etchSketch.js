const container = document.getElementById("container");
let grids = document.getElementsByClassName("grid-item");
let btn= document.createElement("button");
btn.className="new-Grid";
let blackBtn = document.createElement("button")
blackBtn.className="new-Grid";
var color = random_rgba();
let other = document.getElementById("other");

function makeRows(rows,cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = 'grid-item';
    blackGrid();
  };
};

function colorGrid(){
    for(let i=0; i<grids.length; i++){
    grids[i].addEventListener("mouseover", function(){
    event.target.style.backgroundColor = color;
})
}
}

function blackGrid(){
    for(let i=0; i<grids.length; i++){
    grids[i].addEventListener("mouseover", function(){
    event.target.style.backgroundColor = "black";
})
}
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


btn.innerHTML = "New Colored Grid";
other.appendChild(btn);
btn.addEventListener("click", newGrid);
blackBtn.innerHTML="New Black Grid";
other.appendChild(blackBtn);
blackBtn.addEventListener("click",newGrid);

function newGrid(){
    container.innerHTML="";
    let rows=Number(prompt('How big do you want your grid?'));
  let cols = rows; 
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = 'grid-item';
    colorGrid();
}}




makeRows(5,5);