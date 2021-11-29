import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./UIPage.module.scss";

const Header = () => {
  return (
    <div className={styles.UIHeader}>
      <h1>HEAD</h1>
    </div>
  );
};
const Footer = () => {
  return (
    <div className={styles.UIFooter}>
      <h1>Foot</h1>
    </div>
  );
};
const UIPage = () => {
  return <Layout header={<Header />} footer={<Footer />}></Layout>;
};

export default UIPage;
