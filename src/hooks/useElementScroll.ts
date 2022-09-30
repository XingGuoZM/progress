import { RefObject, useEffect } from "react";

interface IProps {
    scrollRef: RefObject<HTMLDivElement | null>;
    top?: number;
    left?: number;
    onComplete?: () => void;
}
interface IScrollOptions {
    element: HTMLDivElement;
    top?: number;
    left?: number;
    behavior?: "auto" | "smooth";
    onComplete?: () => void;
}
// 滚动函数
function scrollTo({ element, top, left, behavior, onComplete }: IScrollOptions) {
    const xFixedOffset = left ? left.toFixed(2) : 0;
    const yFixedOffset = top ? top.toFixed(2) : 0;
    const onScroll = () => {
        if (
            Number(element.scrollLeft.toFixed(2)) === Number(xFixedOffset) ||
            Number(element.scrollTop.toFixed(2)) === Number(yFixedOffset)
        ) {
            element.removeEventListener('scroll', onScroll)
            onComplete && onComplete();
        }
    }
    element.addEventListener('scroll', onScroll)
    onScroll()
    element.scrollTo({ left, top, behavior })
}

export default function useElementScroll({ scrollRef, left, top, onComplete }: IProps) {
    // 滚动至目标距离
    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            const scrollTotal = left ? element.offsetWidth : element.offsetHeight;
            scrollTo({
                element,
                left: left && left - scrollTotal / 2, // 滚动至可视区域中间,水平滚
                // left,
                top: top && top - scrollTotal / 2, // 滚动至可视区域中间，垂直滚
                // top,
                behavior: 'smooth',
                onComplete
            });
        }

    }, [scrollRef.current, left, top]);
}