import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavButton.module.css";

const NavButton = ({ title, link, subnav }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.holder}>
        <Link to={link}>{title}</Link>
      </div>
    </>
  );
};

export default NavButton;
