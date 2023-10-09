import ProgressBar from "./progressBar";
import "../App.css";
import { Link } from "react-router-dom";
("react-router-dom");

function CabeceraPerfilServidor() {
  return (
    <>
      <div className="cabeceraPerfil">
        <Link to="/derribos" className="links">
          Derribos
        </Link>
        <Link to="/climatización" className="links">
          Climatización
        </Link>
        <Link to="/pavimiento-y-revestimiento" className="links">
          Pavimiento y revestimiento
        </Link>
        <Link to="/instalaciones" className="links">
          Instalaciones
        </Link>
        <Link to="/carpinteria" className="links">
          Carpintería
        </Link>
      </div>
    </>
  );
}
export default CabeceraPerfilServidor;
