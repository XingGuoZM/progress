import React from 'react';
import Progress from "../../components/Progress";
import Step from "../../components/Step";
import useStageProgress from "../../hooks/useStageProgress";
import data from "../../mock/progress.js";
import './index.css';

export default function StepProgressDemo(){
    const { stageList } = data;
    const { percentList } = useStageProgress(data);
    const rangeList = new Array(stageList.length).fill(100);
    
    return <div className="stepProgressDemo">
          <span>阶段进度条Demo：</span>
          <div className="stageProgress">
            {rangeList.map((item, index) => (
                <Step key={index} {...stageList[index]}>
                <div className="progressWrap">
                    <Progress total={`${item}px`} percent={percentList[index]} />
                </div>
                </Step>
            ))}
        </div>
    </div>
    
}