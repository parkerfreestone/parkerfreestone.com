import { useState } from "react";
import { Menu, FileText, Palette } from "lucide-react";
import { globalThemes, useTheme } from "../hooks/useTheme";

import Resume from "../assets/Resume.pdf";

const navLinks = ["Home", "About Me", "Projects", "Experience"];

export const Nav = () => {
  const [_, setTheme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
            <li>
              <a href={Resume} download={Resume}>
                Resume
              </a>
            </li>
            <li>
              <select
                onChange={(e) => setTheme(e.target.value)}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  <Palette />
                  Theme
                </option>
                {globalThemes.map((theme) => (
                  <option key={theme} className="normal-case">
                    {theme}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Parker Freestone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="select select-bordered hidden lg:block"
        >
          <option disabled selected>
            <Palette />
            Theme
          </option>
          {globalThemes.map((theme) => (
            <option key={theme} className="normal-case">
              {theme}
            </option>
          ))}
        </select>
        <a
          href={Resume}
          download={Resume}
          className="btn btn-primary gap-2 hidden lg:flex"
        >
          <FileText />
          Resume
        </a>
      </div>
    </div>
  );
};
