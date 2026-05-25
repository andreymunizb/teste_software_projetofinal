import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>IFMS Cursos</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
