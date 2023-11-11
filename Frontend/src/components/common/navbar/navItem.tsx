import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export type NavItemType = {
  id: number;
  label: string;
  link: string;
};

type Props = {
  id: number;
  label: string;
  link: string;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavItem: React.FC<Props> = ({ link, label, setIsMenuOpen }) => {
  const handleMenuItemClick = () => setIsMenuOpen((prevState) => !prevState);
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link" onClick={handleMenuItemClick}>
        {label}
      </Link>
    </li>
  );
};
