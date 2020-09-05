function bubbleSort() {
  let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}
console.log(bubbleSort());
