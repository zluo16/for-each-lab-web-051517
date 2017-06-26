function iterativeLog(array) {
  let newArr = [];
  array.forEach(function(ele, i, array) {
    newArr.push(`${i}: ${ele}`);
  });
  newArr.forEach(function(ele, i, array) {
    console.log(ele);
  });
};

function iterate(callback) {
  let arr = 'abcdefg'.split("");
  arr.forEach(function(ele) {
    callback(ele);
  });
  return arr;
};

function doToArray(array, callback) {
  array.forEach(function(ele) {
    callback(ele);
  });
};
