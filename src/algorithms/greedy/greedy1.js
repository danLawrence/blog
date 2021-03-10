// 贪心算法问题
// 分发饼干-455

// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值  gi ，
// 这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，
// 这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 注意：

// 你可以假设胃口值为正。
// 一个小朋友最多只能拥有一块饼干。

// 示例 1:

// 输入: [1,2,3], [1,1]

// 输出: 1

// 解释:
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。
// 示例 2:

// 输入: [1,2], [1,2,3]

// 输出: 2

// 解释:
// 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
// 你拥有的饼干数量和尺寸都足以让所有孩子满足。
// 所以你应该输出2.

// 把饼干和孩子的需求都排序好，然后从最小的饼干分配给需求最小的孩子开始，不断的尝试新的饼干和新的孩子，这样能保证每个分给孩子的饼干都恰到好处的不浪费，又满足需求。

// 利用双指针不断的更新 i 孩子的需求下标和 j饼干的值，直到两者有其一达到了终点位置：

// 如果当前的饼干不满足孩子的胃口，那么把 j++ 寻找下一个饼干，不用担心这个饼干被浪费，因为这个饼干更不可能满足下一个孩子（胃口更大）。
// 如果满足，那么 i++; j++; count++ 记录当前的成功数量，继续寻找下一个孩子和下一个饼干。

import { useState, userEffect } from 'react';
import './style/index.css';

export default function Greedy1() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p
        className="hoverClick subTitle"
        onClick={e => {
          //   const result = runFunc([1, 2], [1, 2, 3]);
          const result = runFunc([1, 2, 3], [1, 1]);
          console.log('🚀 ~ file: greedy1.js ~ line 53 ~ Greedy1 ~ result', result);
        }}
      >
        分发饼干贪心算法
      </p>
    </div>
  );
}

function runFunc(arrKid, arrCookie) {
  window.runFunc = runFunc;
  if (!arrKid || !arrCookie) return;
  if (arrKid.length === 0 || arrCookie.length === 0) return 0;
  arrKid.sort();
  arrCookie.sort();
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < arrKid.length && j < arrCookie.length) {
    if (arrCookie[j] >= arrKid[i]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return count;
}
