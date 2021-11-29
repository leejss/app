import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./UIPage.module.scss";

const UIPage = () => {
  const [on, setOn] = React.useState(false);
  const handleClick = () => {
    setOn((p) => !p);
  };
  return (
    <div>
      {on ? "Hello?" : null}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UIPage;
