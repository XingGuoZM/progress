import React, { ReactNode } from "react";
import { DirectionEnum } from "../../constant";
import Progress from "../Progress";
import "./index.css";

interface IProps {
  key?: string;
  percent: number;
  strokeWidth: string;
  children: ReactNode;
}

export default function TimeLine(props: IProps) {
  const { percent, strokeWidth, children } = props;

  return (
    <div className="dot-wrap">
      <Progress direction={DirectionEnum.Column} percent={percent} strokeWidth={strokeWidth} />
      {children}
    </div>
  );
}
