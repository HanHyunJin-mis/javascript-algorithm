function insertSort() {
  let arr = [10, 1, 5, 8, 7, 6, 4, 3, 2, 9];
  for (let i = 1; i < 10; i++) {
    let j = i;
    while (arr[j - 1] > arr[j] && j >= 0) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--; // 빼먹지 말 것
    }
    console.log(arr);
  }
  return arr;
}
console.log(insertSort());
