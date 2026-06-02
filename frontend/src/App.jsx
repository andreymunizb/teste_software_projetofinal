import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CursoDetalhe from "./pages/CursoDetalhe";
import "./landing.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CursoDetalhe />} />
      </Routes>
    </Router>
  );
}

export default App;
