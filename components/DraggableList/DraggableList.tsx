import { useDrag } from "@use-gesture/react";
import React from "react";
import { useSprings, animated, UseSpringProps } from "react-spring";
import styles from "./DraggableList.module.scss";
import _ from "lodash";
import { swap } from "../../utils/helpers";

interface DraggableListProps {
  items: string[];
}

const fn =
  (
    order: number[],
    active = false,
    originalIndex = 0,
    currentIndex = 0,
    y = 0
  ) =>
  (index: number): UseSpringProps =>
    active && index === originalIndex
      ? // Controlling y posiiton, scale, zIndex, shadow
        {
          y: currentIndex * 100 + y,
          scale: 1.1,
          zIndex: "1",
          shadow: 15,
          immediate: (key: string) => key === "zIndex",
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
  // Create springs
  const [springs, apis] = useSprings(4, fn(order.current));
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    //  WHY?
    const currentIndex = order.current.indexOf(originalIndex);
    const currentRow = _.clamp(
      Math.round((currentIndex * 100 + y) / 100),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, currentIndex, currentRow);
    // Animation
    apis.start(fn(newOrder, active, originalIndex, currentIndex, y));
    if (!active) order.current = newOrder;
    console.log(order.current);
  });

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        {springs.map(({ zIndex, shadow, y, scale }, index) => (
          <animated.div
            {...bind(index)}
            key={index}
            style={{
              zIndex,
              boxShadow: shadow.to(
                (s: number) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
              ),
              y,
              scale,
            }}
          >
            {items[index]}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default DraggableList;
