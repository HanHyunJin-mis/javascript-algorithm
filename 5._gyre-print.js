// 나선형으로 출력

// 증가하는 2중 배열 만들기

function jaggedArray(row, column) {
  let newArray = new Array(row);

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
}

jaggedArray(3, 4);
