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

// 가로 이동 -> 세로 이동 -> 가로 이동 -> 세로 이동 ...
// 가로와 세로 이동을 한번씩 줄여가기
// 가로 변수와 세로 변수를 만들어 반복문이 돌 때마다 변수 -1을 하면 된다고 생각했다.

// 책에 나와있는 방법
// - 왼쪽에서 오른쪽으로 출력하기
// - 위에서 아래쪽으로 출력하기
// - 오른쪽에서 왼쪽으로 출력하기
// - 아래쪽에서 위쪽으로 출력하기
function gyrePrint(array) {
  let topRow = 0;
  let leftCol = 0;
  let btmRow = array.length - 1;
  let rightCol = array[0].length - 1;
}

gyrePrint(newArray);
