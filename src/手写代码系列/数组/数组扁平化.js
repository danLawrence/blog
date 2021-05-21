// es5写法
function flatten(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

//es6写法
function flattenES6(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

[1, [2, [3]]].flat(2); // [1, 2, 3]
