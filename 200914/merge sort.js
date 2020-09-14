function merge(arr, start, mid, end) {}
function mergeSort(arr, start, end) {
  // 쪼개지는 과정 재귀,
  if (start > end) {
    let mid = parseInt((start + end) / 2); //중간값구하기
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    // 다 쪼개었을 때 merge
    merge(arr, start, mid, end);
  }
}
let arr = [10, 1, 5, 8, 7, 6, 4, 3, 2, 9];
console.log(mergeSort(arr, 0, arr.length - 1));
