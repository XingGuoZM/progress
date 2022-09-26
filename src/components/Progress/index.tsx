import React from 'react';
import "./index.css";

export default function Progress(props) {
  const { item, percent } = props;

  return (
    <div className="progress" style={{ width: `${item}px` }}>
      <div
        className="progress-bar"
        style={{
          transform: `translateX(${percent * 100 - 100}%)`
        }}
      />
    </div>
  );
}
