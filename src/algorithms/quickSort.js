let quickSort = arr => {
  if (arr.length <= 1) return arr;
  let thirdIndex = arr.length >> 1;
  let pivot = arr.splice(thirdIndex, 1)[0];
  let left = [];
  let right = [];
  arr.forEach(item => {
    if (item < pivot) left.push(item);
    else right.push(item);
  });

  return quickSort(left).concat(pivot, quickSort(right));
};

export default quickSort;
