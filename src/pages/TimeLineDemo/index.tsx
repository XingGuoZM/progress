import React, { createRef, RefObject, useEffect, useRef, useState } from 'react';
import data from "../../mock/progress.js";
import useStageProgress from '../../hooks/useProgressStage';
import Progress from '../../components/Progress';
import { DirectionEnum } from '../../constant';
import { CompMap } from './register';
import useElementScroll from '../../hooks/useElementScroll';
import './index.css';

export default function StepProgressDemo() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { stageList } = data;
    const { percentList } = useStageProgress(data);
    const strokeList = new Array(stageList.length).fill('10px');

    const onComplete = () => { console.log('timeline scroll complted') }
    useElementScroll({ scrollRef, top: 500, onComplete });

    return <div className="timeLineDemo">
        <span>时间进度条Demo：</span>
        <div className='timeLineListWrap' ref={scrollRef}>
            <div className="timeLineList" >
                {stageList.map((item, index) => {
                    const TimeLineItem = CompMap[item.status];
                    return <div className='timeLineItemWrap' key={item.id}>
                        <Progress
                            className='timeLineItemBar'
                            barClassName='timeLineItemBarInner'
                            direction={DirectionEnum.Column}
                            percent={percentList[index]}
                            strokeWidth={strokeList[index]}
                        />
                        <div className="timeLineItem">
                            <TimeLineItem {...item} />
                        </div>
                    </div>
                })}
            </div>
        </div>

    </div>
}