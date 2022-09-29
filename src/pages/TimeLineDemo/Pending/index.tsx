import React from 'react';
import { IStage } from '../../../types';
import './index.css';

export default function Pending({ text }: IStage) {

    return <div className="pending">
        <div className='pendingIcon' />
        <div className="pendingTitle">
            {text}
        </div>
    </div>
}