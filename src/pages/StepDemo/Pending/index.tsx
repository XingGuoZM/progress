import React from 'react';
import { IStage } from '../../../types';
import './index.css';

export default function Pending(props: IStage) {
    const { text } = props;

    return <div className="pendingStep">
        <div className="pendingStepImage">占位图</div>
        <div className="pendingStepText">{text}</div>
    </div>
}