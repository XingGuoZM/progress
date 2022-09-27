import React from 'react';
import "./index.css";

interface IProps{
    total?:string;
    percent:number;
    direction?:'row' | 'column';
}

export default function Progress(props:IProps) {
  const { total,percent,direction = 'row' } = props;
  if(direction==='column'){
      return <div className="progress" style={{height:total}}>
      <div
        className="progress-bar"
        style={{
          transform: `translateY(${percent * 100 - 100}%)`
        }}
      />
    </div>
  }
  
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
