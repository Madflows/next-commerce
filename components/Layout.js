import { Navbar } from "./Navbar";

import styles from "../styles/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};
