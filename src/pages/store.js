import React from "react";
import styles from "~/styles/Store.module.scss";

export default function Store() {
  return (
    <>
      <div className={styles.btnWrapper}>
        <button className={styles.searchBtn}>検索</button>
      </div>
    </>
  );
}
