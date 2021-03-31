// 查找表问题
// 两个数组的交集 II-350

// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
import { useState, userEffect } from 'react';
import './style/index.css';

export default function Map1() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          const result = runFunc([1, 2, 2, 1, 3], [2, 2, 1]);
          console.log('🚀 ~ file: map1.js ~ line 26 ~ Map1 ~ result', result);
        }}
      >
        查找表问题，两个数组的交集
      </p>
    </div>
  );
}

function runFunc(arr1, arr2) {
  window.runFunc = runFunc;
  const map1 = new Map();
  const map2 = new Map();
  const result = [];
  arr1.forEach(item => map1.set(item, map1.get(item) ? map1.get(item) + 1 : 1));
  arr2.forEach(item => map2.set(item, map2.get(item) ? map2.get(item) + 1 : 1));
  for (let i of map1.keys()) {
    const num = Math.min(map1.get(i), map2.get(i) || 0);
    for (let j = 0; j < num; j++) result.push(i);
  }
  return result;
}
