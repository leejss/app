import React from "react";
import Spring from "../components/Spring";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles["body"]}>
      <Spring />
    </div>
  );
};

export default HomePage;
