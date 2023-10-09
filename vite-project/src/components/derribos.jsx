import UploadImages from "./uploadImage";
import InsertarCliente from "./insertarCliente";
import CabeceraPerfilServidor from "./cabeceraPerfilServidor";

function Derribos() {
  return (
    <>
      <div className="perfil">
        <InsertarCliente />
        <UploadImages />
        <div className="datosObra">
          <CabeceraPerfilServidor />
        </div>
      </div>
    </>
  );
}
export default Derribos;
