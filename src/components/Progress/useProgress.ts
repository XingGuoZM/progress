import { useEffect, useMemo } from 'react';
import { IProps, IBarStyle, IStyle } from './types';
import { DirectionEnum } from "../../constant";

export default function useProgress(props: IProps) {
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