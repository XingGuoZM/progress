import React, { useState, useCallback } from 'react';
import Progress from '../../components/Progress';
import './index.css';

export default function ProgressDemo() {
    const [percent, setPercent] = useState(20);

    const handleClick = () => setPercent(v => v >= 100 ? 100 : v + 10);
    const handleChange = useCallback((val: number) => console.log('change', val), []);

    return (<div className='progressDemo'>
        <span>进度条demo：</span>
        <Progress className="progressDemoBar" barClassName="progressDemoBarInner" total='100%' strokeWidth='100%' percent={percent} onChange={handleChange}  >
            <div style={{ position: 'absolute', top: 0, fontSize: '14px', right: '10px' }}>{`${percent}%`}</div>
        </Progress>
        <button onClick={handleClick}>increase</button>
    </div>)

}