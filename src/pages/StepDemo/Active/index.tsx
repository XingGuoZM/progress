import React from 'react';
import { IStage } from '../../../types';
import './index.css';

export default function Active(props: IStage) {
    const { text } = props;

    return <div className="activeStep">
        <div className="activeStepImage">占位图</div>
        <div className="activeStepText">{text}</div>
    </div>
}