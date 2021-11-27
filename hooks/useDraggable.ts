import React from "react";

export const useDraggbleRef = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const mouseDownHandler = (event: MouseEvent) => {
    let initialX = event.clientX;
    let initialY = event.clientY;

    const mouseMoveHanlder = (event: MouseEvent) => {
      const differenceX = event.clientX - initialX;
      const differenceY = event.clientY - initialY;
      // Move the element
      if (ref.current) {
        ref.current.style.position = "absolute";
        ref.current.style.top = `${ref.current.offsetTop + differenceY}px`;
        ref.current.style.left = `${ref.current.offsetLeft + differenceX}px`;
      }
      initialX = event.clientX;
      initialY = event.clientY;
    };
    const mouseUpHandler = () => {
      ref.current?.removeEventListener("mousemove", mouseMoveHanlder);
      ref.current?.removeEventListener("mouseup", mouseUpHandler);
    };
    ref.current?.addEventListener("mousemove", mouseMoveHanlder);
    ref.current?.addEventListener("mouseup", mouseUpHandler);
  };
  React.useEffect(() => {
    const element = ref.current;
    element?.addEventListener("mousedown", mouseDownHandler);

    return () => element?.removeEventListener("mousedown", mouseDownHandler);
  }, []);

  return ref;
};
