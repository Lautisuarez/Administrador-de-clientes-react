// Conexion a bd -> json-server --watch db.json --port 4000
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layout
import Layout from "./layout/Layout"
// paginas
import Inicio from "./paginas/Inicio"
import NuevoCliente from "./paginas/NuevoCliente"
import EditarCliente from "./paginas/EditarCliente"
import VerCliente from "./paginas/VerCliente"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
