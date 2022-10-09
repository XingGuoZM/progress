import React, { useCallback, useEffect, useState } from "react";
import Circle from "../../components/Circle";

export default function CircleDemo() {
  const [percent, setPercent] = useState(0);

  const handleAdd = useCallback(() => {
    setPercent((val) => val + 10);
  }, []);
  const handleReset = useCallback(() => {
    setPercent(0);
  }, []);
  const handleComplete = useCallback(() => {
    console.log("completed");
    handleReset();
  }, []);
  useEffect(() => {
    // setInterval(() => {
    //     setPercent(val => val + 5);
    // }, 500);
  }, []);

  return (
    <div className="circleDemo">
      <Circle percent={percent} onComplete={handleComplete} />
      <button onClick={handleAdd}>increase</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
