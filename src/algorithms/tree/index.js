import { useState, userEffect } from 'react';
import BFS from './bfs';
import './style/index.css';

export default function Index() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p className="hoverClick" onClick={e => setShow(!show)}>
        树结构的算法解析
      </p>
      {show && <BFS />}
    </div>
  );
}
