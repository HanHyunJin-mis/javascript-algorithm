function selectSort() {
  let arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  let index;
  for (let i = 0; i < 10; i++) {
    let min = 9999;
    for (let j = i; j < 10; j++) {
      // 제일 작은 숫자 찾기
      if (min > arr[j]) {
        min = arr[j];
        index = j;
        console.log(min, index);
      }
    }
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }
  return arr;
}
console.log(selectSort());
