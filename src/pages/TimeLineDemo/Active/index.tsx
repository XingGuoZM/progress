import React from 'react';
import { IStage } from '../../../types';
import './index.css';

export default function Active({ text }: IStage) {

    return <div className="active">
        <div className='activeIcon' />
        <div className="activeTitle">
            {text}
        </div>
    </div>
}