// 贪心算法，盛最多水的容器
// 题目描述
// 给定 n 个非负整数 a1，a2，…，an，每个数代表坐标中的一个点 (i, ai) 。画 n 条垂直线，使得垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 注意：你不能倾斜容器，n 至少是2。

// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 示例:

// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49
import { useState, userEffect } from 'react';
import './style/index.css';

export default function Greedy2() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          const result = runFunc([1, 8, 6, 2, 5, 4, 8, 3, 7]);
          console.log('🚀 ~ file: greedy2.js ~ line 25 ~ Greedy2 ~ result', result);
        }}
      >
        盛最多水的容器， 双指针贪心算法
      </p>
    </div>
  );
}

function runFunc(arr) {
  window.runFunc = runFunc;
  if (!arr) return 0;
  if (arr.length <= 1) return 0;
  let count = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    count = Math.max(Math.min(arr[left], arr[right]) * (right - left), count);
    if (arr[left] <= arr[right]) left++;
    else right--;
  }
  return count;
}
