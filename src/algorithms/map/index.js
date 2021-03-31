// 贪心算法

import { useState, userEffect } from 'react';
import './style/index.css';
import Map1 from './map1';

export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p className="hoverClick" onClick={e => setShow(!show)}>
        查找表问题的算法解析
      </p>
      {show && <Map1 />}
    </div>
  );
}
