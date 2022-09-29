import React from 'react';
import { IStage } from '../../../types';
import './index.css';

export default function Done({ text }: IStage) {

    return <div className="done">
        <div className='doneIcon' />
        <div className="doneTitle">
            {text}
        </div>
    </div>
}