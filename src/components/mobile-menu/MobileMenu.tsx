import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../top-nav/TopNav.css';
import './MobileMenu.css';

interface MobileMenuProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  setHireModalOpen: (isOpen: boolean) => void;
}

export const MobileMenu = ({
  open,
  setOpen,
  setHireModalOpen,
}: MobileMenuProps) => {
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
        {['about me', 'projects'].map((link) => (
          <a
            key={link}
            className={'nav-item'}
            href={`#${link.replace(/\s+/g, '')}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <div className="divider">
          {[
            { text: 'say hi', route: 'mailto:parkerfreestone@gmail.com' },
            { text: 'hire me', onClick: () => setHireModalOpen(true) },
          ].map(({ text, route, onClick }, i) => (
            <a
              className="nav-item"
              href={route}
              onClick={() => {
                !!onClick && onClick();
                setOpen(false);
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </nav>
    </CSSTransition>
  );
};
