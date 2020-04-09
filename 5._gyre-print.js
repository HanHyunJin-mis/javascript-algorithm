// 연습문제 : 나선형으로 출력

// 증가하는 2중 배열 만들기

let newArray = [];
function jaggedArray(row, column) {
  newArray = new Array(row);

  for (let i = 0; i < row; i++) {
    newArray[i] = new Array(column);
  }

  let rowCount = 0;
  let columnCount = 0;
  for (let j = 1; j <= row * column; j++) {
    if (column === columnCount) {
      rowCount += 1;
      columnCount = 0;
    }
    newArray[rowCount][columnCount] = j;
    columnCount++;
  }
  return newArray;
}

console.log(jaggedArray(4, 5));

// 나선형으로 출력하기
let row = 4;
let column = 5;

function gyrePrint(row, column) {
  let tempRow = row; // 4
  let tempColumn = column; // 5
  for (let i = 0; i < row * column; i++) {}
  console.log(newArray[tempRow][tempColumn]);
}

gyrePrint(row, column);
