import { NextPage } from "next";
import React from "react";
import CompoundLayout from "../../components/CompoundLayout/CompoundLayout";
import styles from "./CompoundPage.module.scss";

const CompoundPage: NextPage = () => {
  return (
    <CompoundLayout>
      <CompoundLayout.Header>
        <header className={styles.header}>asd</header>
      </CompoundLayout.Header>
      <CompoundLayout.Body>
        <div className={styles.body}></div>
      </CompoundLayout.Body>
    </CompoundLayout>
  );
};

export default CompoundPage;
