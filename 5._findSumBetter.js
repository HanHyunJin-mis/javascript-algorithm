function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[currentElement]];
    } else {
      // store index
      hashtable[difference] = i;
    }
  }
  return -1;
}
findSumBetter([1, 2, 3, 4, 5], 9); // [ 4, 3 ]
