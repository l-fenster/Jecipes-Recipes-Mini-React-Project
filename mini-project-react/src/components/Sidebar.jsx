import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="body" id="sidebar">
      <ul className="side-items">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <br />
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Sidebar;
