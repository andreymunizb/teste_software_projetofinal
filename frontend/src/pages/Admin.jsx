import { useState } from "react";

import { criarCurso, editarCurso, apagarCurso } from "../services/api.js";

function Admin({ cursos, carregarCursos }) {
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    detalhes: "",
    preco: "",
    imagem: "",
    video: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function salvarCurso() {
    if (editando) {
      await editarCurso(editando, form);

      alert("Curso atualizado!");
    } else {
      await criarCurso(form);

      alert("Curso criado!");
    }

    limparFormulario();

    carregarCursos();
  }

  async function deletar(id) {
    const confirmar = confirm("Deseja apagar?");

    if (!confirmar) return;

    await apagarCurso(id);

    carregarCursos();
  }

  function editar(curso) {
    setEditando(curso.id);

    setForm(curso);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function limparFormulario() {
    setEditando(null);

    setForm({
      titulo: "",
      descricao: "",
      detalhes: "",
      preco: "",
      imagem: "",
      video: "",
    });
  }

  return (
    <div className="admin">
      <h1>Painel Administrativo</h1>

      {/* FORM */}

      <div className="formulario">
        <input
          type="text"
          name="titulo"
          placeholder="Nome do curso"
          value={form.titulo}
          onChange={handleChange}
        />

        <textarea
          name="descricao"
          placeholder="Descrição curta"
          value={form.descricao}
          onChange={handleChange}
        />

        <textarea
          name="detalhes"
          placeholder="Descrição completa"
          value={form.detalhes}
          onChange={handleChange}
        />

        <input
          type="text"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={handleChange}
        />

        <input
          type="text"
          name="video"
          placeholder="URL embed do vídeo"
          value={form.video}
          onChange={handleChange}
        />

        <button onClick={salvarCurso}>
          {editando ? "Salvar Alterações" : "Criar Curso"}
        </button>
      </div>

      {/* LISTA */}

      <div className="admin-grid">
        {cursos.map((curso) => (
          <div className="admin-card" key={curso.id}>
            <img src={curso.imagem} alt={curso.titulo} />

            <h2>{curso.titulo}</h2>

            <p>{curso.descricao}</p>

            <h3>R$ {curso.preco}</h3>

            <div className="admin-actions">
              <button className="editar-btn" onClick={() => editar(curso)}>
                Editar
              </button>

              <button className="delete-btn" onClick={() => deletar(curso.id)}>
                Apagar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
