console.log("hello");

let titleDiv = document.getElementById("title");
let colorRed = document.getElementById("red");
let colorYellow = document.getElementById("yellow");
let colorGreen = document.getElementById("green");

console.log("before:", titleDiv.innerText);

let message = "GoodBye Nigeria!";
titleDiv.innerText = message;
console.log("after:", titleDiv.innerText);

titleDiv.innerHTML = `<p>${message}</p>`;

titleDiv.style.backgroundColor = "blue";

// colorRed.onclick = () => console.log("red");
// colorYellow.onclick = () => console.log("yellow");
// colorGreen.onclick = () => console.log("green");

const squares = document.querySelectorAll(".colorSquare");
// console.log(squares);

// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value);

// FOREACH LOOP
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
    // console.log(squares.value)
  };
});

function clearScores() {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => {
    square.innerText = '';
  });
}
const clearBtns = document.getElementById("clear-game");
clearBtns.onclick = () => clearScores();


