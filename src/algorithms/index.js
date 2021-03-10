import { useState, userEffect } from 'react';
// import './style/index.css';
import Stack from './stack';
import DP from './dynamicProgram';
import Greedy from './greedy';

export default function Index() {
  return (
    <div>
      <h2>算法专题</h2>
      <Stack />
      <DP />
      <Greedy />
    </div>
  );
}
