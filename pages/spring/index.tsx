import React from "react";
import styles from "./SpringPage.module.scss";
import { useSpring, animated, AnimationResult } from "react-spring";

const SpringPage = () => {
  // Define spring
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return <animated.div style={props} className={styles.box}></animated.div>;
};

export default SpringPage;
