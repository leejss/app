import React from "react";
import FlexLayout from "../../components/FlexLayout/FlexLayout";
import styles from "./FlexPage.module.scss";

const FlexPage = () => {
  const [vh, setVh] = React.useState(0);
  React.useEffect(() => {
    setVh(window.innerHeight);
  }, []);
  return (
    <FlexLayout>
      <FlexLayout.Top>
        <div className={styles.top}></div>
      </FlexLayout.Top>
      <FlexLayout.Body>
        <h1>{vh}</h1>
      </FlexLayout.Body>
      <FlexLayout.Bottom>
        <div className={styles.bottom}></div>
      </FlexLayout.Bottom>
    </FlexLayout>
  );
};

export default FlexPage;
