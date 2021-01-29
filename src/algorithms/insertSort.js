// 最初的插入排序
const insertSort = (arr, start, end) => {
  end = end || arr.length;
  for (let i = start; i < end; i++) {
    for (let j = i; j > start && arr[j - 1] > arr[j]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
};

// 优化后的插入排序 不需要每次交换
const insertSortBetter = (arr, start, end) => {
  end = end || arr.length;
  for (let i = start; i < end; i++) {
    let tmp = arr[i];
    let j = 0;
    for (j = i; j > start && arr[j - 1] > tmp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
};

export default insertSort;
