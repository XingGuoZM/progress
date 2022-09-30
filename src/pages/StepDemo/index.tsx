import React, { useRef } from 'react';
import data from '../../mock/progress';
import useStageProgress from '../../hooks/useProgressStage';
import { CompMap } from './register';
import Progress from '../../components/Progress';
import useElementScroll from '../../hooks/useElementScroll'
import './index.css';
import { IStage } from '../../types';

const { stageList } = data;
// 节点间距
const range = new Array(stageList.length).fill(100);
// 节点间进度条粗细
const stroke = new Array(stageList.length).fill(10);
// 计算滚动距离
const targetId = '4';
const targetIndex = stageList.findIndex((item: IStage) => item.id === targetId);
const left = range.slice(0, targetIndex + 1).reduce((pre, cur) => pre + cur)

export default function StepDemo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { percentList } = useStageProgress(data);

  const onComplete = () => {
    console.log('step progress scroll completed')
  }

  useElementScroll({ scrollRef, left, onComplete });

  return <div className='stepDemo'>
    <span>步骤条Demo：</span>
    <div className='stepDemoListWrap' ref={scrollRef}>
      <div className='stepDemoList' >
        {stageList.map((item, index) => {
          const StepItem = CompMap[item.status];
          return <div className='stepItemWrap' key={item.id}>
            <Progress
              className='stepItemBar'
              barClassName='stepItemBarInner'
              total={`${range[index]}px`}
              percent={percentList[index]}
              strokeWidth={`${stroke[index]}px`}
            />
            <StepItem {...item} />
          </div>
        })}
      </div>
    </div>
  </div>
}