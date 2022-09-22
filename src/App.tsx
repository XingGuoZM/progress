import { useCallback, useState, useRef } from "react";
import Progress from "./components/Progress";
import data from "./mock/progress.js";

export default function App() {
  const [list, setList] = useState(data);
  const amountRef = useRef<string>(data.amount);

  const handleData = useCallback(() => {
    const { stageList } = list;
    amountRef.current = String(Number(amountRef.current) + 10);
    setList({ stageList, amount: amountRef.current });
  }, []);

  return (
    <div style={{ height: "20px" }}>
      <Progress {...list} />
      <button onClick={handleData}>add</button>
    </div>
  );
}
