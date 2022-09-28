import React, { useState, useCallback } from 'react';
import Progress from '../../components/Progress';
import './index.css';

export default function ProgressDemo() {
    const [percent, setPercent] = useState(20);

    const handleClick = () => setPercent(v => v >= 100 ? 100 : v + 10);
    const handleChange = useCallback((val: number) => console.log('change', val), []);

    return (<div className='progressDemo'>
        <span>进度条demo：</span>
        <Progress total='150px' percent={percent} onChange={handleChange} strokeWidth='10px' />
        <button onClick={handleClick}>increase</button>
    </div>)

}