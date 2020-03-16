// 내가 생각한 방법 : 처음 배열에서 중복된 것을 뽑으려 했을 때 생각했던 것은 객체에 { 중복 숫자 : 중복된 횟수 }로 저장을 하려고 생각을 했다.
function commonElements(kArray) {
  var hashmap = {},
    last,
    answer = [];

  for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i];
    last = null;
    for (
      var j = 0, currentArrayLen = currentArray.length;
      j < currentArrayLen;
      j++
    ) {
      var currentElement = currentArray[j];
      if (last != currentElement) {
        // 예외처리
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  // Iterate through hashmap
  for (var prop in hashmap) {
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}

commonElements([
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2]
]); // [ 1, 2 ]
