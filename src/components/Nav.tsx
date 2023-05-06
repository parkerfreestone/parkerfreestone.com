import { Menu, FileText, Palette } from "lucide-react";
import { globalThemes, useTheme } from "../hooks/useTheme";

const navLinks = ["Home", "About Me", "Projects", "Contact"];

export const Nav = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div className="sticky top-0 z-20 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((link) => (
              <li>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Parker Freestone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="select select-bordered"
        >
          <option disabled selected>
            <Palette />
            Theme
          </option>
          {globalThemes.map((theme) => (
            <option className="normal-case">{theme}</option>
          ))}
        </select>
        <a className="btn btn-primary gap-2">
          <FileText />
          Resume
        </a>
      </div>
    </div>
  );
};
