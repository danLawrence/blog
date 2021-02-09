import { useState, userEffect } from 'react';
import InsertSortDisplay from './insertSort';
import QuickSortDisplay from './quickSort';
import './style/index.css';

export default function Index() {
  const [showSort, setShowSort] = useState(false);
  return (
    <div>
      <h2>算法专题</h2>
      <p className="hoverClick" onClick={e => setShowSort(!showSort)}>
        Array的sort算法解析
      </p>
      {showSort && <InsertSortDisplay />}
      {showSort && <QuickSortDisplay />}
    </div>
  );
}
