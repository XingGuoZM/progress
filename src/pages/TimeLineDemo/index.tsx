import React from 'react';
import data from "../../mock/progress.js";
import useStageProgress from '../../hooks/useStageProgress';
import Progress from '../../components/Progress';
import { DirectionEnum } from '../../constant';
import { CompMap } from './register';
import './index.css';

export default function StepProgressDemo() {
    const { stageList } = data;
    const { percentList } = useStageProgress(data);
    const strokeList = new Array(stageList.length).fill('10px');

    return <div className="timeLineDemo">
        <span>时间进度条Demo：</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
}