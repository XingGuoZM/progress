import React from "react";
import ProgressDemo from "./pages/ProgressDemo";
import StepDemo from "./pages/StepDemo";
import TimeLineDemo from "./pages/TimeLineDemo";
import CircleDemo from "./pages/CircleDemo";

export default function App() {
  return (
    <div>
      <ProgressDemo />
      <CircleDemo />
      <StepDemo />
      <TimeLineDemo />
    </div>
  );
}
