import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faClose } from '@fortawesome/free-solid-svg-icons';
import { MobileMenu } from '../mobile-menu/MobileMenu';
import './TopNav.css';
import { HireMeModal } from '../modal/Modal';

export const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);

  return (
    <>
      <nav>
        <div className={`${!menuOpen ? 'top' : 'top bg-dark'}`}>
          <h1>parkerfreestone</h1>
          <div className="menu">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon
                size="xl"
                color={!menuOpen ? 'black' : 'white'}
                icon={!menuOpen ? faBarsStaggered : faClose}
              />
            </button>
          </div>
        </div>

        <MobileMenu open={menuOpen} setOpen={setMenuOpen} />

        <div className="nav">
          <div>
            {['about me', 'projects'].map((link) => (
              <a
                key={link}
                className="nav-item"
                href={`#${link.replace(/\s+/g, '')}`}
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {[
              { text: 'say hi', route: 'mailto:parkerfreestone@gmail.com' },
              {
                text: 'hire me',
                onClick: () => setHireModalOpen(!hireModalOpen),
              },
            ].map(({ text, route, onClick }, i) => (
              <a
                className={
                  i % 2 === 0
                    ? 'nav-item-button-outlined'
                    : 'nav-item-button-dark'
                }
                href={route}
                onClick={onClick}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {hireModalOpen && <HireMeModal setOpen={setHireModalOpen} />}
    </>
  );
};
