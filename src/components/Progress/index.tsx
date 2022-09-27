import React from 'react';
import "./index.css";

interface IProps{
    total?:string;
    percent:number;
}

export default function Progress(props:IProps) {
  const { total,percent } = props;

  return (
    <div className="progress" style={{width:total}}>
      <div
        className="progress-bar"
        style={{
          transform: `translateX(${percent * 100 - 100}%)`
        }}
      />
    </div>
  );
}
