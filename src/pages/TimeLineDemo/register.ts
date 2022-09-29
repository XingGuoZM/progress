import { ReactElement, createElement } from "react";
import Active from "./Active";
import Pending from './Pending';
import Done from './Done';
import { StatusEnum } from '../../constant';
import { IStage } from "../../types";

type ICompMap = {
    [key: string]: (props: IStage) => ReactElement;
}

export const CompMap: ICompMap = {
    [StatusEnum.Pending]: (props) => createElement(Pending, props),
    [StatusEnum.Active]: (props) => createElement(Active, props),
    [StatusEnum.Done]: (props) => createElement(Done, props)
}
