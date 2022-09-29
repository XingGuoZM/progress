import React, { useRef } from 'react';
import "./index.css";
import { IProps } from './types';
import useProgress from './useProgress';
import classnames from 'classnames';

function Progress(props: IProps) {
  const { children, className } = props;
  const bar = useRef<HTMLDivElement>(null);
  const { barStyle, style } = useProgress({ ...props, target: bar.current });

  return (
    <div className={classnames("progress", className)} style={style}>
      <div className="progress-bar" ref={bar} style={barStyle} />
      {children}
    </div>
  );
}
export default Progress;