import React from 'react';
import Step from '../../components/Step';
import Progress from '../../components/Progress';
import data from '../../mock/progress';
import './index.css';

export default function StepDemo(){
    const { stageList } = data;
    return <div className='stepDemo'>
        <span>步骤条Demo：</span>
        <Step {...stageList[0]}>
          <div className="stepDemoProgress">
            <Progress total='150px' percent = {0.2}/>
          </div>
        </Step>
    </div>
}