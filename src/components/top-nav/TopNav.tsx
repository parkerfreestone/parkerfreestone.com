import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import "./TopNav.css";

export const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className={`${!menuOpen ? "top" : "top bg-dark"}`}>
        <h1>parkerfreestone</h1>
        <div className="menu">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              size="xl"
              color={!menuOpen ? "black" : "white"}
              icon={!menuOpen ? faBarsStaggered : faClose}
            />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} setOpen={setMenuOpen} />

      <div className="nav">
        <div>
          {["about me", "projects", "social"].map((link) => (
            <a
              key={link}
              className="nav-item"
              href={`#${link.replace(/\s+/g, "")}`}
            >
              {link}
            </a>
          ))}
        </div>
        <div>
          {[
            { text: "say hi", route: "#say-hi" },
            { text: "hire me", route: "hire-me" },
          ].map(({ text, route }, i) => (
            <a
              className={
                i % 2 === 0
                  ? "nav-item-button-outlined"
                  : "nav-item-button-dark"
              }
              href={route}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
