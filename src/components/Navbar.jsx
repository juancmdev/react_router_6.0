import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="btn btn-outline-primary" to="/">
          Inicio
        </Link>
        <Link className="btn btn-outline-primary" to="/nosotros">
          Nosotros
        </Link>
        <Link className="btn btn-outline-primary" to="/contacto">
          Contacto
        </Link>
        <Link className="btn btn-outline-primary" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
