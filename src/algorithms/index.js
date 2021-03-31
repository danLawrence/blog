import { useState, userEffect } from 'react';
// import './style/index.css';
import Stack from './stack';
import DP from './dynamicProgram';
import Greedy from './greedy';
import Sort from './sort';
import Recursive from './recursive';
import Map from './map';

export default function Index() {
  return (
    <>
      <h2>算法专题</h2>
      <Stack />
      <DP />
      <Greedy />
      <Sort />
      <Recursive />
      <Map />
    </>
  );
}
