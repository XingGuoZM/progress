import React, { CSSProperties, useEffect, useRef } from "react";
import "./index.css";

const transition = "transform 0.5s ease";
const bgColor = "#ebeef5";
const barColor = "#409EFF";
interface IProps {
  percent: number;
  onComplete: () => void;
}

export default function Circle({ percent, onComplete }: IProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const setDomStyle = (target: HTMLDivElement, style: CSSProperties) => {
    const styleList = Object.entries(style);
    for (let [key, value] of styleList) {
      target.style[key] = value;
    }
  };

  useEffect(() => {
    console.log(percent);
    const left = leftRef.current;
    const right = rightRef.current;
    if (left && right && percent <= 100) {
      if (percent <= 0) {
        setDomStyle(left, { transform: "rotateZ(0deg)", transition: "none" });
        setDomStyle(right, {
          transform: "rotateZ(0deg)",
          transition: "none",
          borderColor: `${bgColor} ${bgColor} ${bgColor} transparent`,
        });
      } else if (percent <= 50) {
        setDomStyle(left, { transition });
        setDomStyle(right, {
          transition,
          transform: `rotateZ(${(percent * 180 * 2) / 100}deg)`,
        });
      } else {
        setDomStyle(right, {
          transform: "rotateZ(0deg)",
          transition: "none",
          borderColor: `${barColor} ${barColor} ${barColor} transparent`,
        });
        setDomStyle(left, {
          transition,
          transform: `rotateZ(${((percent - 50) * 180 * 2) / 100}deg)`,
        });

        left.addEventListener("transitionend", () => {
          percent >= 100 && onComplete && onComplete();
        });
      }
    }
  }, [percent]);

  return (
    <div
      className="circle-wrap"
      style={{ boxShadow: `0 0 0 5px ${barColor} inset` }}
    >
      <div
        className="circle-left circle"
        style={{ borderColor: `${bgColor} transparent ${bgColor} ${bgColor}` }}
        ref={leftRef}
      ></div>
      <div
        className="circle-right circle"
        style={{ borderColor: `${bgColor} ${bgColor} ${bgColor} transparent` }}
        ref={rightRef}
      ></div>
    </div>
  );
}
