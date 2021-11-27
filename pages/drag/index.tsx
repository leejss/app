import React from "react";
import { useDraggbleRef } from "../../hooks/useDraggable";
import styles from "./DragPage.module.scss";

// offestTop, offsetLeft => CSS top, left value

// To make draggable div
// 1. Get the initial mouse position
// 2. Calculate differenceX and differenceY
// 3. Move the element
// 4. Update the mouse position

// Use 3 MouseEvent

// mousedown
// mousemove
// mouseup

const DragPage = () => {
  const boxRef = useDraggbleRef();

  return (
    <div>
      <div className={styles.Box} ref={boxRef} />
    </div>
  );
};

export default DragPage;
