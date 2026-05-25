import { Link } from "react-router-dom";

function CardCurso({ curso }) {
  return (
    <div className="card">
      <img src={curso.imagem} alt={curso.titulo} className="card-img" />

      <div className="card-content">
        <h2>{curso.titulo}</h2>

        <p>{curso.descricao}</p>

        <h3>R$ {curso.preco}</h3>

        <Link to={`/curso/${curso.id}`}>
          <button>Comprar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCurso;
