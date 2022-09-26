import React from 'react';
import Step from './Step/index.tsx';
import {IStage,IStageProgress} from '../../types';
import './index.css';

export default function Steps(props:IStageProgress){
    const { stageList} = props;
    return <div className="steps-wrap">
        {stageList.map((item:IStage,index:number)=>(
            <div style={{display:'flex'}}>
                <Step {...item}/>
                <div style={{width:'50px',height:'100%'}}/>
            </div>
        ))}
      </div>
}