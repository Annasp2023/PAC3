import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cabecera from "./components/cabecera";
import Login from "./components/login";
import Inicio from "./components/inicio";
import PiePagina from "./components/piePagina";
import PerfilUsuario from "./components/perfil";
import Derribos from "./components/derribos";
import PerfilServidor from "./components/perfilServidor";
import ConsultarCliente from "./components/consultarCliente";
function App() {
  return (
    <BrowserRouter>
      <>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/derribos" element={<Derribos />} />
          <Route path="/perfilServidor" element={<PerfilServidor />} />
        </Routes>

        <PiePagina />
      </>
    </BrowserRouter>
  );
}

export default App;
