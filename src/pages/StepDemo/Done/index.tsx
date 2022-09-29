import React from 'react';
import { IStage } from '../../../types';
import './index.css';

export default function Done(props: IStage) {
    const { text } = props;

    return <div className="doneStep">
        <div className="doneStepImage">占位图</div>
        <div className="doneStepText">{text}</div>
    </div>
}