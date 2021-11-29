import React from "react";

export const useFullHeight = () => {
  const [fullHeight, setFullHeight] = React.useState<number>();

  React.useEffect(() => {
    setFullHeight(window.innerHeight);
  }, []);

  return fullHeight;
};
