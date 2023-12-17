import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavButton.module.css";

const NavButton = ({ title, link, subnav }) => {
  const [open, setOpen] = useState(false);
  if (subnav.length > 0) console.log("subnav", subnav);
  return (
    <>
      <div className={styles.holder}>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link to={link}>{title} </Link>
        </div>
        {open && (
          <div className={styles.subholder}>
            {subnav.map((item) => {
              return <div>{item.title}</div>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default NavButton;
