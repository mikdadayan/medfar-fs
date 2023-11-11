import { Link } from "react-router-dom";

export type NavItemType = { id: number; label: string; link: string };

export const NavItem = ({ link, label }: NavItemType) => {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link">
        {label}
      </Link>
    </li>
  );
};
