import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";

export const TopNav = () => {
  return (
    <nav>
      <h1 className={styles.top}>parkerfreestone</h1>
      <div className={styles.nav}>
        <div className="linkList">
          {["about me", "projects", "social"].map((link) => (
            <a className={styles.navItem} href={`#${link.replace(/\s+/g, "")}`}>
              {link}
            </a>
          ))}
        </div>
        <div className={styles.navActions}>
          {[
            { text: "say hi", route: "say-hi" },
            { text: "hire me", route: "hire-me" },
          ].map(({ text, route }) => (
            <Link to={route}>{text}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
