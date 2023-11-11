import { useState } from "react";
import { Link } from "react-router-dom";

import menuLogo from "../../../assets/bar-menu.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MEDFAR
        </Link>
        <button
          className="navbar-toggler"
          style={{ color: "white" }}
          onClick={() => setShowMenu(showMenu)}
        >
          <img src={menuLogo} alt="Medfar Logo" />
        </button>
        <div className={`navbar-collapse ${showMenu ? "collapse" : ""}`}>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/example" className="nav-link">
                Example
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/exam" className="nav-link">
                Exam
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
