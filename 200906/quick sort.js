let arr = [10, 1, 5, 8, 7, 6, 4, 3, 2, 9];
function quickSort(arr, start, end) {
  // 필요한 변수 : start, end, mid
  // 왼쪽 -> 오른쪽으로 옮길 변수 left와 오른쪽 -> 왼쪽으로 옮길 변수 right
  let left = start;
  let right = end;
  // 중간값 정하기
  let mid = parseInt((left + right) / 2);
  // left값이 right 값을 넘지 않아야 함
  while (left <= right) {
    // left 값이 중간값을 넘는 경우 찾기
    while (arr[left] < arr[mid]) {
      left++;
    }
    // right 값이 중간값을 넘는 경우 찾기
    while (arr[right] > arr[mid]) {
      right--;
    }
  }

  // 재귀
  quickSort(arr, start, right);
  quickSort(arr, left, end);
}
console.log(quickSort(arr, 0, arr.length - 1));
