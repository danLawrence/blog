// 打家劫舍 - 198

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//   偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2:

// 输入: [2,7,9,3,1]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//   偷窃到的最高金额 = 2 + 9 + 1 = 12 。

// ----------------------------------------------------------------------------------------------------------------------

// 动态规划的一个很重要的过程就是找到「状态」和「状态转移方程」，在这个问题里，设 i 是当前屋子的下标，状态就是 以 i 为起点偷窃的最大价值

// 在某一个房子面前，盗贼只有两种选择：偷或者不偷。

// 偷的话，价值就是「当前房子的价值」+「下两个房子开始盗窃的最大价值」
// 不偷的话，价值就是「下一个房子开始盗窃的最大价值」
// 在这两个值中，选择最大值记录在 dp[i]中，就得到了以 i 为起点所能偷窃的最大价值。。

// 动态规划的起手式，找基础状态，在这题中，以终点为起点的最大价值一定是最好找的，因为终点不可能再继续往后偷窃了，所以设 n 为房子的总数量， dp[n - 1] 就是 nums[n - 1]，小偷只能选择偷窃这个房子，而不能跳过去选择下一个不存在的房子。

// 那么就找到了动态规划的状态转移方程：
// 从头开始往后
// 打劫当前家：num[i] + dp[i-2]
// 不打劫当前家：dp[i-1]
// 转移方程是：dp[i] = max(num[i]+dp[i-2], dp[i-1])
// 返回dp[n-1]

// 从结尾开始
// 打劫当前家：num[i] + dp[i+2]
// 不打劫当前家：dp[i+1]
// 转移方程是：dp[i] = max(num[i]+dp[i+2], dp[i+1])
// 返回dp[0]

import { useState, userEffect } from 'react';
import './style/index.css';

export default function Dp1() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p
        className="hoverClick"
        onClick={e => {
          const result = runFunc([]);
        }}
      >
        打家劫舍动态规划
      </p>
    </div>
  );
}

function runFunc(arr) {
  window.runFunc = runFunc;

  const dp = [];
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[arr.length - 1];
}
