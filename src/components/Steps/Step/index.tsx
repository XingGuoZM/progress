import React from 'react';
import {IStage} from '../../../types';
import './index.css';

export default function Step(props:IStage){
    const { text} = props;
    return (
        <div className="step">
            <div className="step-image">占位图</div>
            <div className="step-text">{text}</div>
        </div>
    );
}