import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import styles from "./PageLayout.module.css";
const PageLayout = () => {
  return (
    <>
      <div className={styles.holder}>
        <Navigation />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
