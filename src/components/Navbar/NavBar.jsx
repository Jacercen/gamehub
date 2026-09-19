import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
