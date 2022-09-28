import React from 'react';
import TimeLine from '../../components/TimeLine';
import Progress from '../../components/Progress';
import useStageProgress from "../../hooks/useStageProgress";
import data from "../../mock/progress.js";
import './index.css';
import { DirectionEnum } from '../../constant';

export default function StepProgressDemo() {
    const { stageList } = data;
    const { percentList } = useStageProgress(data);
    return <div className="timeLineDemo">
        <span>时间进度条Demo：</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {stageList.map((item, index) => <TimeLine {...item} key={item.id}>
                <div className='timeLineBar'>
                    <Progress direction={DirectionEnum.Column} percent={percentList[index]} />
                </div>
            </TimeLine>)}
        </div>
    </div>
}