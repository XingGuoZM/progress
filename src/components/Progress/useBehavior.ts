import { useCallback, useMemo } from "react";

import { IProgress } from "./types";

export default function useBehavior(props: IProgress) {
  const { stageList, amount } = props;
  // 节点区间展示
  const rangeList = useMemo(() => {}, []);
  // 滚动至目标节点
  const scroll2Target = useCallback(() => {}, []);
}
