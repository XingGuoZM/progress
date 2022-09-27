import React, { ReactNode } from "react";
import "./index.css";

interface IProps {
  key?: string;
  text: string;
  status: string;
  children?: ReactNode;
}

export default function TimeLine(props: IProps) {
  const { text, status, children } = props;
  return (
    <div className="dot-wrap">
      {children}
      <div className="dot">
          <div className='dot-icon'/>
        <div className="dot-title">{text}</div>    
      </div>
    </div>
  );
}
