// 阮一峰版快速排序，都理解，都在采用，被人诟病的是用了splice，用了新数组增加了空间成本
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

// 面试官大干阮一峰 改良版快速排序

// 以最左端为比较值进行改良版快速排序
let quickSort2 = (arr, start, end) => {
  if (arr.length <= 1) return arr;
  const devideArr = (array, s, e) => {
    let i = s;
    let j = e;
    let base = array[s];
    while (i < j) {
      while (arr[j] >= base && i < j) j--;
      while (arr[i] <= base && i < j) i++;
      if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return i;
  };
  const index = devideArr(arr, start, end);
  [arr[start], arr[index]] = [arr[index], arr[start]];
  if (start < index - 1) quickSort2(arr, start, index - 1);
  if (index + 1 < end) quickSort2(arr, index + 1, end);
  return arr;
};

export default function quickSortDisplay() {
  const arr = new Array(15).fill(0).map((a, i) => i);
  arr.sort(() => 0.5 - Math.random());
  return (
    <div>
      <p className="subTitle">快速排序展示</p>
      <p className="subTitle">[{String(arr)}]</p>
      <p className="subTitle">[{String(quickSort2(arr, 0, arr.length - 1))}]</p>
    </div>
  );
}
