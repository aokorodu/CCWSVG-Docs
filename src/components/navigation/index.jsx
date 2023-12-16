import { useContext } from "react";
import { AppContext } from "../../App";
import NavButton from "./nav-button";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const nav = useContext(AppContext);
  const pages = nav.pages;

  const getPages = () => {
    return pages.map((pageData) => {
      return <NavButton {...pageData} />;
    });
  };
  return (
    <>
      <div className={styles.container}>{getPages()}</div>
    </>
  );
};

export default Navigation;
