import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../elements/button";
import { Navmenu } from "./navmenu";

import menuLogo from "../../../assets/bar-menu.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const navbarItems = useMemo(
    () => [
      { id: 1, label: "Example", link: "/example" },
      { id: 2, label: "Exam", link: "/exam" },
    ],
    []
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MEDFAR
        </Link>
        <Button
          type="button"
          className="navbar-toggler"
          onClick={toggleMenu}
          style={{ color: "white" }}
        >
          <img src={menuLogo} alt="Medfar Logo" />
        </Button>
        <Navmenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          items={navbarItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
