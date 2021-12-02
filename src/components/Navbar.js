import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/projects"> Projects </a>
      </ul>
    </nav>
  );
}

export default Navbar;
