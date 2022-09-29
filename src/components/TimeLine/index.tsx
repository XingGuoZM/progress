import React, { ReactNode } from "react";
import { DirectionEnum } from "../../constant";
import Progress from "../Progress";
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
      <Progress className='dot-progress' direction={DirectionEnum.Column} percent={20} total='100px' strokeWidth='10px' />
      <div className="dot">
        <div className='dot-icon' />
        <div className="dot-title">{text}</div>
      </div>
    </div>
  );
}
