import { useGesture } from "@use-gesture/react";
import React from "react";
import { useSprings, animated, UseSpringProps } from "react-spring";
import styles from "./DraggableList.module.scss";

interface DraggableListProps {
  items: string[];
}

const fn =
  (
    order: number[],
    down: boolean,
    originalIndex: number,
    currentIndex: number,
    y: number
  ) =>
  (index: number): UseSpringProps =>
    down && index === originalIndex
      ? {
          y: currentIndex * 100 + y,
          scale: 1.1,
          zIndex: "1",
          shadow: 15,
          immediate: (n) => n === "y" || n === "zIndex",
        }
      : {
          y: order.indexOf(index) * 100,
          scale: 1,
          zIndex: "0",
          shadow: 1,
          immediate: false,
        };

const DraggableList: React.FC<DraggableListProps> = ({ items }) => {
  const order = React.useRef(items.map((_, index) => index));
  const [springs, setSprings] = useSprings(4, fn(order.current));
  const bind = useGesture(
    ({ args: [originalIndex], down, delta: [, y] }) => {}
  );
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        {springs.map(({ zIndex, shadow, y, scale }, index) => (
          <animated.div key={index}>{items[index]}</animated.div>
        ))}
      </div>
    </div>
  );
};

export default DraggableList;
