// 栈问题
// 有效的括号-20

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

import { useState, userEffect } from 'react';
import './style/index.css';

export default function Index() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p className="hoverClick" onClick={e => runStack()}>
        Stack栈的算法解析
      </p>
    </div>
  );
}

function runStack() {
  console.log('🚀 ~ file: index.js ~ line 40 ~ runStack ~ sata');
}
