const API = "http://localhost:3000";

export async function listarCursos() {
  const response = await fetch(`${API}/cursos`);
  return response.json();
}

export async function criarCurso(curso) {
  await fetch(`${API}/cursos`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(curso),
  });
}

export async function editarCurso(id, curso) {
  await fetch(`${API}/cursos/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(curso),
  });
}

export async function apagarCurso(id) {
  await fetch(`${API}/cursos/${id}`, {
    method: "DELETE",
  });
}
