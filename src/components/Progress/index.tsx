import React, { forwardRef, useRef } from 'react';
import "./index.css";
import { IProps } from './types';
import useProgress from './useProgress';

function Progress(props: IProps) {
  const bar = useRef<HTMLDivElement>(null);
  const { barStyle, style } = useProgress({ ...props, target: bar.current });

  return (
    <div className="progress" style={style}>
      <div className="progress-bar" ref={bar} style={barStyle} />
    </div>
  );
}
export default Progress;