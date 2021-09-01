import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="flex flex-col mt-4">
      <NavLink url="/" label="Home" />
      <NavLink url="/profile" label="Profile" />
      <NavLink url="/article" label="Articles" />
      <NavLink url="/utilities" label="Utilities" />
    </nav>
  );
};

export default NavBar;
