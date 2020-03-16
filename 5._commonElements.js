// 내가 생각한 방법 : 처음 배열에서 중복된 것을 뽑으려 했을 때 생각했던 것은 객체에 { 중복 숫자 : 중복된 횟수 }로 저장을 하려고 생각을 했다.

function commonElements(kArray) {
  var hashmap = {},
    last,
    answer = [];
  // 중복을 찾아내려는 배열의 수 만큼의 반복문
  for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    var currentArray = kArray[i];
    last = null;
    // 하나의 배열에서 요소를 검사하는 반복문
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

```
의문점 : 이렇게 하면 한 배열에 같은 숫자가 있는 경우, 그리고 다른 배열에는 그 숫자가 없는 경우에 걸러질까?

ex. [1, 2, 2]와 [3, 4, 5] 의 경우
```;
