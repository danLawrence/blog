// 广度优先遍历（BFS）问题
// 在每个树行中找最大值-515

// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row

// 您需要在二叉树的每一行中找到最大的值。

// 输入:

//           1
//          / \
//         3   2
//        / \   \
//       5   3   9

// 输出: [1, 3, 9]

import { useState, userEffect } from 'react';
import './style/index.css';

export default function BFS() {
  //   const [showSort, setShowSort] = useState(false);
  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          //   const result = runFunc([1, 2], [1, 2, 3]);
          const result = runFunc(4);
          console.log('🚀 ~ file: bfs.js ~ line 30 ~ BFS ~ result', result);
        }}
      >
        BFS算法
      </p>
    </div>
  );
}

function runFunc(n) {
  window.runFunc = runFunc;
}
