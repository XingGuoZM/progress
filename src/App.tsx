import React from 'react';
import Progress from "./components/Progress";
import Step from "./components/Step";
import useStageProgress from "./hooks/useStageProgress";
import data from "./mock/progress.js";
import "./App.css";

export default function App() {
  const { stageList } = data;
  const { percentList } = useStageProgress(data);
  const rangeList = new Array(stageList.length).fill(90);
  return (
    <div className="stageProgress">
      {rangeList.map((item, index) => (
        <Step key={index} {...stageList[index]}>
          <div className="progressWrap">
            <Progress item={item} percent={percentList[index]} />
          </div>
        </Step>
      ))}

      {/* <button onClick={handleData}>add</button> */}
    </div>
  );
}
