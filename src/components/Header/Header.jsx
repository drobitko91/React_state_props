import "./Header.scss";
import Logo from "./Logo";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <p className="header-title">Blog Name</p>
      <nav className="header-nav">
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </nav>
    </header>
  );
}

export default Header;
