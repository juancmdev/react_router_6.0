import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Not found</h2>
      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </>
  );
};

export default Notfound;
