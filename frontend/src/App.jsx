import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar.jsx";

import './App.css';

import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import CursoDetalhe from "./pages/CursoDetalhe.jsx";

import { listarCursos } from "./services/api.js";

function App() {
  const [cursos, setCursos] = useState([]);

  async function carregarCursos() {
    const dados = await listarCursos();
    setCursos(dados);
  }

  useEffect(() => {
    carregarCursos();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home cursos={cursos} />} />

        <Route
          path="/admin"
          element={
            <Admin
              cursos={cursos}
              setCursos={setCursos}
              carregarCursos={carregarCursos}
            />
          }
        />

        <Route path="/curso/:id" element={<CursoDetalhe cursos={cursos} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
