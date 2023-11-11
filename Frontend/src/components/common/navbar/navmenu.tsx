import { Dispatch, SetStateAction } from "react";
import { NavItem, NavItemType } from "./navItem";

type Props = {
  isMenuOpen: boolean;
  items: NavItemType[];
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navmenu: React.FC<Props> = ({
  isMenuOpen,
  items,
  setIsMenuOpen,
}) => {
  return (
    <div className={`navbar-collapse ${isMenuOpen ? "collapse" : ""}`}>
      <ul className="nav navbar-nav">
        {items.map((item) => (
          <NavItem
            setIsMenuOpen={setIsMenuOpen}
            key={item.id}
            id={item.id}
            label={item.label}
            link={item.link}
          />
        ))}
      </ul>
    </div>
  );
};
