import { useCallback, useMemo, ReactNode, useEffect } from "react";
import { DirectionEnum } from "../constant";

export interface IProps {
  target?: HTMLDivElement | null;
  total?: string | undefined;
  strokeWidth?: string | undefined;
  percent: number;
  className?: string;
  barClassName?: string;
  direction?: DirectionEnum | undefined;
  children?: ReactNode;
  onChange?: (percent: number) => void;
}
export interface IBarStyle {
  transform: string;
  transition: string;
}
export interface IStyle {
  width: string | undefined;
  height: string | undefined;
}

export default function useProgressBehavior(props: IProps) {
  const { target, total, strokeWidth = '100%', percent, direction = DirectionEnum.Row, onChange } = props;

  const barPercent = percent >= 100 ? '0' : `${percent - 100}%`;
  const transition = 'transform 0.2s ease';
  const isHorizontal = useMemo(() => direction === DirectionEnum.Row, [direction]);

  const barStyle: IBarStyle = { transform: isHorizontal ? `translateX(${barPercent})` : `translateY(${barPercent})`, transition }
  const style: IStyle = { width: isHorizontal ? total : strokeWidth, height: isHorizontal ? strokeWidth : total };

  useEffect(() => {
    const handleChange = () => onChange && onChange(percent);

    target && target.addEventListener('webkitTransitionEnd', handleChange, false);
    return () => {
      target && target.removeEventListener('webkitTransitionEnd', handleChange, false);
    }
  }, [percent]);
  return { barStyle, style }
}
