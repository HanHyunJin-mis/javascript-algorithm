// 배열 속에서 index가 다른 두 수를 더해서 원하는 값을 구하는 방법

function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    console.log("hashtable : ", hashtable);
    var currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
      console.log("통과");
      return [i, hashtable[currentElement]];
    } else {
      // store index
      console.log("인덱스 저장");
      hashtable[difference] = i;
      // hashtable에는 해당되는 index의 값과 index가 저장된다.
    }
  }
  return -1;
}
console.log(findSumBetter([1, 2, 3, 4, 5], 9)); // [ 4, 3 ]
