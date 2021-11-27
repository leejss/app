import React from "react";
import { useMousePosition } from "../../hooks/useMousePosition";
import styles from "./MousePage.module.scss";

const MousePage = () => {
  const { x, y } = useMousePosition();
  return (
    <div>
      <div
        className={styles.Box}
        style={{
          top: `${y}px`,
          left: `${x}px`,
        }}
      />
      <h1>{x}</h1>
      <h1>{y}</h1>
    </div>
  );
};

export default MousePage;
