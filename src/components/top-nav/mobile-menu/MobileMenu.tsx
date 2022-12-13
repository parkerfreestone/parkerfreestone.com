import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../TopNav.css";
import "./MobileMenu.css";

interface MobileMenuProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={open}
      classNames="menu"
      unmountOnExit
      timeout={200}
    >
      <nav ref={nodeRef} className="mobile-menu">
        {["about me", "projects", "social"].map((link) => (
          <a
            key={link}
            className={"nav-item"}
            href={`#${link.replace(/\s+/g, "")}`}
          >
            {link}
          </a>
        ))}
        <div className="divider">
          {[
            { text: "say hi", route: "#say-hi" },
            { text: "hire me", route: "hire-me" },
          ].map(({ text, route }, i) => (
            <a className="nav-item" href={route}>
              {text}
            </a>
          ))}
        </div>
      </nav>
    </CSSTransition>
  );
};
