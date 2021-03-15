//  递归回溯算法问题解析
// 前端电商 sku 的全排列算法
// 需求
// 需求描述起来很简单，有这样三个数组：
// let names = ["iPhone X", "iPhone XS"]

// let colors = ["黑色", "白色"]

// let storages = ["64g", "256g"]
// 需要把他们的所有组合穷举出来，最终得到这样一个数组：
// [
//   ["iPhone X", "黑色", "64g"],
//   ["iPhone X", "黑色", "256g"],
//   ["iPhone X", "白色", "64g"],
//   ["iPhone X", "白色", "256g"],
//   ["iPhone XS", "黑色", "64g"],
//   ["iPhone XS", "黑色", "256g"],
//   ["iPhone XS", "白色", "64g"],
//   ["iPhone XS", "白色", "256g"],
// ]

import { useState, userEffect } from 'react';
import './style/index.css';

export default function Recursive2() {
  //   const [showSort, setShowSort] = useState(false);
  let names = ['iPhone X', 'iPhone XS'];

  let colors = ['黑色', '白色'];

  let storages = ['64g', '256g'];
  // let size = ['6寸', '8寸', '10寸', '12寸'];
  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          //   const result = runFunc([1, 2], [1, 2, 3]);
          const result = runFunc(names, colors, storages);
          console.log('🚀 ~ file: recursive2.js ~ line 40 ~ Recursive2 ~ result', result);
        }}
      >
        前端电商 sku 的全排列算法 递归回溯算法
      </p>
    </div>
  );
}

function runFunc(...args) {
  window.runFunc = runFunc;
  const result = [];
  const length = args.length;

  function runInnerFunc(start, prev) {
    if (prev.length === length) {
      result.push(prev);
      return;
    } else {
      const thisArr = args[start];
      for (let i = 0; i < thisArr.length; i++) {
        runInnerFunc(start + 1, prev.concat(thisArr[i]));
      }
    }
  }
  runInnerFunc(0, []);
  return result;
}
