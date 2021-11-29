import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import styles from "./Spring.module.scss";

const left = {
  bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
  justifySelf: "end",
};
const right = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: "start",
};

const Spring: React.FC = ({ children }) => {
  const [{ x, y, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    ...left,
  }));
  const bind = useDrag(({ active, movement: [mx, my] }) => {
    return api.start({
      x: active ? mx : 0,
      y: active ? my : 0,
      scale: active ? 1.1 : 1,
      ...(mx < 0 ? left : right),
      immediate: (key) => active && key === "x",
    });
  });
  // const bind = useDrag((state) => {
  //   console.log(state.active);
  // });

  return (
    <animated.div
      {...bind()}
      style={{ background: bg, x, y }}
      className={styles.item}
    ></animated.div>
  );
};

export default Spring;

function leftRight(mx: number) {
  return mx > 150 ? 1000 : -1000;
}
