import "./NavItem.scss";

function NavItem(props) {
  const link = props.link;
  return (
    <a href={link} className="nav-item">
      {props.children}
    </a>
  );
}

export default NavItem;
