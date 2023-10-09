import "../App.css";
import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="links">
          <img src="../../Logo inicio.png" className="logoInicio"></img>
        </Link>
        {/* <Link to="/login" className="links">
          Login
        </Link> */}
        <Link to="/perfil" className="links">
          Perfil Usuario
        </Link>
        <Link to="/perfilServidor" className="links">
          Perfil Servidor
        </Link>
      </nav>
    </header>
  );
}
export default Cabecera;
