//  递归回溯算法问题解析
// 组合-77
// 77. 组合 这是一道难度为 medium 的问题，其实算是比较有难度的问题了：
// 问题
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例:
// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

import { useState, userEffect } from 'react';
import './style/index.css';

export default function Recursive1() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          //   const result = runFunc([1, 2], [1, 2, 3]);
          const result = runFunc(4, 3);
          console.log('🚀 ~ file: recursive1.js ~ line 16 ~ Greedy1 ~ result', result);
        }}
      >
        组合问题 递归回溯算法
      </p>
    </div>
  );
}

function runFunc(n, k) {
  window.runFunc = runFunc;
  const result = [];
  function runInnerFunc(start, prevArr) {
    const length = prevArr.length;
    if (length === k) {
      result.push(prevArr);
      return;
    } else {
      // const restLen = k - prevArr.length; // 剪枝过程
      for (let i = start; i <= n; i++) {
        // if (n - i + 1 < restLen) {
        //   continue;
        // }
        runInnerFunc(i + 1, prevArr.concat(i));
      }
    }
  }
  runInnerFunc(1, []);
  return result;
}
