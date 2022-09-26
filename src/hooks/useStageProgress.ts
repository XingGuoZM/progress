import { useEffect, useCallback, useMemo } from "react";
import { IStage, IStageProgress } from "../types";
import { StatusEnum } from "../constant";

export default function useStageProgress(props: IStageProgress) {
  const { stageList, amount } = props;
  // 数据转换：对象数组 -> 区间二维数组
  const format2Matrix = useCallback((list:IStage[]) => {
    let prev = {  id: '',text: '',status: '',threshold: '',index:-1};
    return list.map((item:IStage, index:number) => {
      const matrixItem = [prev, item];
      prev = { ...item, index };
      return matrixItem;
    });
  }, []);
  // 获取当前进度所在区间
  const current = useMemo(() => {
    let target = new Array<IStage>();
    const curr = Number(amount);
    const matrix = format2Matrix(stageList);
    for (let item of matrix) {
      const low = Number(item[0].threshold || 0);
      const up = Number(item[1].threshold);
      if (curr >= low && curr < up) {
        target = [item[0], item[1]];
        break;
      }
    }
    return target;
  }, [stageList, format2Matrix, amount]);
  // 获取激活的节点列表
  const activeList = useMemo(() => {
    return stageList.filter((item) => item.status === StatusEnum.Active);
  }, [stageList]);
  // 各个区间进度百分比
  const percentList = useMemo(() => {
    const matrix = format2Matrix(stageList);
    const curr = Number(amount);
    const percent = new Array<number>()
    for (let item of matrix) {
      const low = Number(item[0].threshold || 0);
      const up = Number(item[1].threshold);

      let per = (curr - low) / (up - low);
      if (per >= 1) {
        percent.push(1);
      } else if (per <= 0) {
        percent.push(0);
      } else {
        percent.push(Number(per.toFixed(3)));
      }
    }
    return percent;
  }, [stageList, format2Matrix, amount]);

  useEffect(() => { }, []);

  return { format2Matrix, current, activeList, percentList };
}
