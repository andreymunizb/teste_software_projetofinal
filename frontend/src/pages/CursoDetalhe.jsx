import { useParams } from "react-router-dom";

function CursoDetalhe({ cursos }) {
  const { id } = useParams();

  const curso = cursos.find((item) => item.id === Number(id));

  if (!curso) {
    return <h1>Curso não encontrado</h1>;
  }

  return (
    <div className="pagina-curso">
      <section className="hero-curso">
        <div className="hero-left">
          <span className="tag-ifms">CURSO INSTITUCIONAL IFMS</span>
    
          <h1>{curso.titulo}</h1>

          <p>{curso.detalhes}</p>

          <div className="preco-box">
            <h2>R$ {curso.preco}</h2>
          </div>

          <button className="comprar-btn">COMPRAR AGORA</button>

          <div className="beneficios">
            <div>Acesso Vitalício</div>
            <div>Certificado Incluso</div>
            <div>Suporte ao Aluno</div>
            <div>Atualizações Grátis</div>
          </div>
        </div>

        <div className="hero-right">
          <img src={curso.imagem} alt={curso.titulo} className="hero-img" />
        </div>
      </section>


      {curso.video && (
        <section className="video-section">
          <h2>Veja uma demonstração do curso</h2>
          <iframe
            width="100%"
            height="500"
            src={curso.video}
            title="Vídeo de demonstração"
            allowFullScreen
          ></iframe>
        </section>
      )}

      <section className="cta-final">
        <h1>Comece hoje mesmo</h1>
        <p>Inscreva-se e garanta sua vaga na turma atual.</p>
        <button className="comprar-btn grande">QUERO ME INSCREVER</button>
      </section>
    </div>
  );
}

export default CursoDetalhe;
