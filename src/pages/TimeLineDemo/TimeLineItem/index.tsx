import React, { ReactElement } from 'react';
import { StatusEnum } from '../../../constant';
import { IStage } from '../../../types';
import './index.css';

type ICompMap = {
    [key: string]: ReactElement;
};

export default function TimeLineItem({ text, status }: IStage) {
    const CompMap: ICompMap = {
        [StatusEnum.Pending]: <div className='timeLineItemPending' >{text}</div>,
        [StatusEnum.Active]: <div className='timeLineItemActive' >{text}</div>,
        [StatusEnum.Done]: <div className='timeLineItemDone' >{text}</div>
    }
    return <div className="timeLineItem">
        <div className='timeLineItemIcon' />
        <div className="timeLineItemTitle">
            {CompMap[status]}
        </div>
    </div>
}