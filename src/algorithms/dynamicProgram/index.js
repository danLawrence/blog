//  动态规划

import { useState, userEffect } from 'react';
import './style/index.css';
import DP1 from './dp1';

export default function Index() {
  //   const [showSort, setShowSort] = useState(false);

  return (
    <div>
      <p
        className="hoverClick"
        onClick={e => {
          const result = runStack('[(]');
          console.log('🚀 ~ file: index.js ~ line 44 ~ Index ~ result', result);
        }}
      >
        动态规划的算法解析
      </p>
      <DP1 />
    </div>
  );
}
