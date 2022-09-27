import React from 'react';
import Progress from '../../components/Progress';
import './index.css';

export default function ProgressDemo(){
    return (<div className='progressDemo'>
        <span>进度条demo：</span>
        <Progress total='150px' percent = {0.2}/>
    </div>)
    
}