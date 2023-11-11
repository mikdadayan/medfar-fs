import { Link } from "react-router-dom";

export type NavItemType = { id: number; label: string; link: string };

export const NavItem = ({ id, link, label }: NavItemType) => {
  return (
    <li key={id} className="nav-item">
      <Link to={link} className="nav-link">
        {label}
      </Link>
    </li>
  );
};
