import { DirectionEnum } from "../../constant";

export interface IProps {
    target?: HTMLDivElement | null;
    total?: string | undefined;
    strokeWidth?: string | undefined;
    percent: number;
    direction?: DirectionEnum | undefined;
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