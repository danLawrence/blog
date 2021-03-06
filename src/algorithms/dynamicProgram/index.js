//  动态规划

import { useState, userEffect } from 'react';
import './style/index.css';
import DP1 from './dp1';

export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p className="hoverClick" onClick={e => setShow(!show)}>
        动态规划的算法解析
      </p>
      {show && <DP1 />}
    </div>
  );
}
