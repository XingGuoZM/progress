import React, { ReactNode } from "react";
import "./index.css";

interface IProps {
  key: number;
  text: string;
  status: string;
  children: ReactNode;
}

export default function Step(props: IProps) {
  const { text, status, children } = props;
  return (
    <div className="step-wrap">
      {children}
      <div className="step">
        <div className="step-image">占位图</div>
        <div className="step-text">{text}</div>
      </div>
    </div>
  );
}
