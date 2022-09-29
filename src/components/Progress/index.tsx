import React, { useRef } from 'react';
import { IProps } from './types';
import useProgress from './useProgress';
import classnames from 'classnames';
import "./index.css";

function Progress(props: IProps) {
  const { children, className, barClassName } = props;
  const bar = useRef<HTMLDivElement>(null);
  const { barStyle, style } = useProgress({ ...props, target: bar.current });

  return (
    <div className={classnames("progress", className)} style={style}>
      <div className={classnames("progress-bar", barClassName)} ref={bar} style={barStyle} />
      {children}
    </div>
  );
}
export default Progress;