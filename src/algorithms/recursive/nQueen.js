//  递归回溯算法问题解析
// n皇后问题
// 问题
// 先来看问题，其实问题不难理解：
// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 上图为 8 皇后问题的一种解法。
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
// 示例:
// 输入: 4
// 输出: [
//  [".Q..",  // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // 解法 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// 解释: 4 皇后问题存在两个不同的解法。
// 复制代码提示：

// 皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自 百度百科 - 皇后 ）

import { useState, userEffect } from 'react';
import './style/index.css';

export default function nQueen() {
  //   const [showSort, setShowSort] = useState(false);
  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          //   const result = runFunc([1, 2], [1, 2, 3]);
          const result = runFunc(4);
          console.log('🚀 ~ file: nQueen.js ~ line 16 ~ Recursive2 ~ result', result);
        }}
      >
        n皇后问题 递归回溯算法
      </p>
    </div>
  );
}

function runFunc(n) {
  window.runFunc = runFunc;
  const result = [];
  const columns = [];
  const leftArc = [];
  const rightArc = [];

  function makeTable(arr) {
    const res = [];
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        if (j === arr[i]) row += 'Q';
        else row += '.';
      }
      res.push(row);
    }
    return res;
  }

  function placeItem(row, column, bool) {
    columns[column] = bool;
    leftArc[row + column] = bool;
    rightArc[row - column] = bool;
  }

  function check(row, column) {
    return !columns[column] && !leftArc[row + column] && !rightArc[row - column];
  }

  function runInnerFunc(start, prev) {
    if (prev.length === n) {
      result.push(makeTable(prev));
      return;
    } else {
      for (let i = 0; i < n; i++) {
        const isOk = check(start, i);
        if (!isOk) continue;
        placeItem(start, i, true);
        runInnerFunc(start + 1, prev.concat(i));
        placeItem(start, i, false);
      }
    }
  }
  runInnerFunc(0, []);
  return result;
}
