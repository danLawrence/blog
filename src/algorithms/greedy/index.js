// 贪心算法

import { useState, userEffect } from 'react';
import './style/index.css';
import Greedy1 from './greedy1';

export default function Index() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <p className="hoverClick" onClick={e => setShow(!show)}>
        贪心算法的算法解析
      </p>
      {show && <Greedy1 />}
    </div>
  );
}
