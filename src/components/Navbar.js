import { Link } from "react-router-dom";   // <== IMPORT

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>

      </ul>
    </nav>
  );
}

export default Navbar;
