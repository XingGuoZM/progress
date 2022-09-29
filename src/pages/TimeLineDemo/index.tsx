import React from 'react';
import TimeLine from '../../components/TimeLine';
import TimeLineItem from './TimeLineItem';
import data from "../../mock/progress.js";
import './index.css';
import useStageProgress from '../../hooks/useStageProgress';

export default function StepProgressDemo() {
    const { stageList } = data;
    const { percentList } = useStageProgress(data);
    return <div className="timeLineDemo">
        <span>时间进度条Demo：</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {stageList.map((item, index) => <TimeLine key={item.id} strokeWidth='10px' percent={percentList[index]}>
                <TimeLineItem {...item} index={index} />
            </TimeLine>)}
        </div>
    </div>
}