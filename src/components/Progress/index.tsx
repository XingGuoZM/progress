import React from 'react';
import useStageProgress from "../../hooks/useStageProgress";
import { IStageProgress } from "../../types";
import "./index.css";

export default function Progress(props: IStageProgress) {
  const { stageList } = props;
  const { percentList } = useStageProgress(props);
  const rangeList = new Array(stageList.length).fill(100);
  return (
    <div className="progress-wrap">
      <div style={{ display: "flex" }}>
        {rangeList.map((item, index) => (
          <div key={index} className="progress" style={{ width: `${item}px` }}>
            <div
              className="progress-bar"
              style={{
                transform: `translateX(${percentList[index] * 100 - 100}%)`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
