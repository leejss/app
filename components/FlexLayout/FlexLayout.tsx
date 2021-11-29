import React from "react";
import { useFullHeight } from "../../hooks/useFullHeight";
import styles from "./FlexLayout.module.scss";
import cx from "classnames";
import { css } from "@emotion/css";

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

interface FlexLayoutProps {
  backgroundColor?: string;
}

const FlexLayout: React.FC<FlexLayoutProps> & CompoundLayoutComposiiton = ({
  children,
  backgroundColor,
}) => {
  const height = useFullHeight();
  const heightStyle = css`
    height: ${height}px;
  `;
  const backgroundStyle = css`
    background-color: ${backgroundColor};
  `;
  const classNames = cx(
    styles.LayoutContainer,
    heightStyle,
    backgroundColor && backgroundStyle
  );
  return <div className={classNames}>{children}</div>;
};

FlexLayout.Top = Top;
FlexLayout.Body = Body;
FlexLayout.Bottom = Bottom;

export default FlexLayout;
