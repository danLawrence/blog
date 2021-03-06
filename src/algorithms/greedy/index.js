// 贪心算法

import { useState, userEffect } from 'react';
import './style/index.css';
import Greedy1 from './greedy1';
import Greedy2 from './greedy2';

export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p className="hoverClick" onClick={e => setShow(!show)}>
        贪心算法的算法解析
      </p>
      {show && <Greedy1 />}
      {show && <Greedy2 />}
    </div>
  );
}
