import { NavItem, NavItemType } from "./navItem";

type Props = {
  isMenuOpen: boolean;
  items: NavItemType[];
};

export const Navmenu = ({ isMenuOpen, items }: Props) => {
  return (
    <div className={`navbar-collapse ${isMenuOpen ? "collapse" : ""}`}>
      <ul className="nav navbar-nav">
        {items.map((item) => (
          <NavItem id={item.id} label={item.label} link={item.link} />
        ))}
      </ul>
    </div>
  );
};
