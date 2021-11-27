import React from "react";
type MousePosition = {
  x: number;
  y: number;
};
export const useMousePosition = () => {
  const [position, setPosition] = React.useState<MousePosition | null>(null);

  const mouseEventHandler = React.useCallback((event: MouseEvent) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    setPosition({
      ...newPosition,
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseEventHandler);
    return () => window.removeEventListener("mousemove", mouseEventHandler);
  }, [mouseEventHandler]);

  return {
    x: position?.x ?? null,
    y: position?.y ?? null,
  };
};
