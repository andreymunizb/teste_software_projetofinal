import CardCurso from "../components/CardCurso";

function Home({ cursos }) {
  return (
    <div className="container">
      <h1>Cursos Disponíveis</h1>

      <div className="grid">
        {cursos.map((curso) => (
          <CardCurso key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
}

export default Home;
