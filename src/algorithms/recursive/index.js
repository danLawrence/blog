import { useState, userEffect } from 'react';
import './style/index.css';
import Recursive1 from './recursive1';
import Recursive2 from './recursive2';
import NQueen from './nQueen';

export default function Index() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p className="hoverClick" onClick={e => setShow(!show)}>
        递归回溯算法的算法解析
      </p>
      {show && <Recursive1 />}
      {show && <Recursive2 />}
      {show && <NQueen />}
    </div>
  );
}
