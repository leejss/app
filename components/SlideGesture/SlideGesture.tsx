import React from "react";
import styles from "./SlideGesture.module.scss";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

const SlideGesture = () => {
  const [style, apis] = useSpring(() => ({
    from: {
      x: 0,
    },
  }));
  const bind = useDrag(({ active, movement: [mx], offset: [ox] }) => {
    if (active) {
      apis.start({
        x: ox,
      });
    }
  });

  return (
    <div className={styles.container}>
      <animated.div
        {...bind()}
        className={styles.box1}
        style={{
          x: style.x,
        }}
      ></animated.div>
      <div className={styles.box2}></div>
    </div>
  );
};

export default SlideGesture;
