import React from "react";
import styles from "./FlexLayout.module.scss";

const Top: React.FC = ({ children }) => {
  return <div className={styles.TopContainer}>{children}</div>;
};

const Body: React.FC = ({ children }) => {
  return <div className={styles.BodyContainer}>{children}</div>;
};

const Bottom: React.FC = ({ children }) => {
  return <div className={styles.BottomContainer}>{children}</div>;
};

interface CompoundLayoutComposiiton {
  Top: typeof Top;
  Body: typeof Body;
  Bottom: typeof Bottom;
}

const FlexLayout: React.FC & CompoundLayoutComposiiton = ({ children }) => {
  return <div className={styles.LayoutContainer}>{children}</div>;
};

FlexLayout.Top = Top;
FlexLayout.Body = Body;
FlexLayout.Bottom = Bottom;

export default FlexLayout;
