console.log("안녕 좋은아침ㅎㅎ");

let $squareFrame = document.querySelector(".squares-frame");

window.onload = function () {
  console.log("온로드!", $squareFrame);
  let squareCount = parseInt(Math.random() * 50 + 1);

  console.log("0~50 랜덤 수", squareCount);
  for (let i = 0; i < squareCount; i++) {
    addSquare();
  }
};

function addSquare() {
  let square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * 1500) + "px";
  square.style.top = parseInt(Math.random() * 700) + "px";

  square.style.backgroundColor = getRandomColor();
  let squareArea = document.getElementById("squares-frame");
  console.log(squareArea, square);

  squareArea.appendChild(square);
}

function getRandomColor() {
  let letters = "0123456789abcdef";
  let result = "#";
  for (let i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));
  }
  console.log(result);

  return result;
}

function changeColors() {
  let squares = document.querySelectorAll("#squares-frame div");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = getRandomColor();
  }
}

function squareClick() {}
