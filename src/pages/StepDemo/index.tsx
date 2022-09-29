import React from 'react';
import data from '../../mock/progress';
import useStageProgress from '../../hooks/useStageProgress';
import { CompMap } from './register';
import Progress from '../../components/Progress';
import './index.css';

export default function StepDemo() {
  const { stageList } = data;
  const { percentList } = useStageProgress(data);
  const rangeList = new Array(stageList.length).fill(100);
  const strokeList = new Array(stageList.length).fill('10px');

  return <div className='stepDemo'>
    <span>步骤条Demo：</span>
    {stageList.map((item, index) => {
      const StepItem = CompMap[item.status];
      return <div className='stepItemWrap'>
        <Progress className='stepItemBar' barClassName='stepItemBarInner' total={rangeList[index]} percent={percentList[index]} strokeWidth={strokeList[index]} />
        <StepItem {...item} />
      </div>
    })}
  </div >
}