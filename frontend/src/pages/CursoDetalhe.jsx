import React, { useState, useEffect } from "react";
import { landingPageConteudo } from "../conteudo";
import "../landing.css";

export default function CursoDetalhe() {
  const {
    config,
    header,
    videoSection,
    certificacoes,
    passosObjetivo,
    caracteristicas,
    utilidade,
    feedbacks,
    autor,
    faqGarantia,
    venda,
    desenvolvedores,
    rodape,
  } = landingPageConteudo;

  // Temporizador
  const [tempo, setTempo] = useState(config.tempoCronometroMinutos * 60);

  useEffect(() => {
    if (tempo <= 0) return;
    const intervalo = setInterval(() => {
      setTempo((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tempo]);

  const formatarTempo = (totalSegundos) => {
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    return {
      minutos: String(minutos).padStart(2, "0"),
      segundos: String(segundos).padStart(2, "0"),
    };
  };

  const { minutos, segundos } = formatarTempo(tempo);

  //Rolamento de tela até a aba de pagamento
  const rolarParaCheckout = () => {
    const elemento = document.getElementById("checkout-section");
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pagina-landing">
      {/* 1. HEADER */}
      <header className="topbar-urgencia">
        <div className="marca-topo">{config.nomeMarca}</div>
        <div className="textos-urgencia">
          <h4>{header.tagUrgencia}</h4>
          <p>{header.subtagUrgencia}</p>
        </div>
        <div className="cronometro-container">
          <div className="bloco-tempo">
            <span>{minutos}</span>
            <label>Min</label>
          </div>
          <div className="bloco-tempo">
            <span>{segundos}</span>
            <label>Seg</label>
          </div>
        </div>
      </header>

      {/* 2. SEÇÃO DE VÍDEO */}
      <section className="secao-vsl">
        <h1 className="frase-impacto-header">{header.fraseImpacto}</h1>
        <p className="subheadline-vsl">{videoSection.subHeadline}</p>

        <div className="container-player-blindado">
          <iframe
            src={videoSection.videoUrl}
            title="Vídeo de Apresentação"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ width: "100%", aspectRatio: "16/9", display: "block" }}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <button onClick={rolarParaCheckout} className="btn-cta-venda">
            {venda.textoBotaoComprar}
          </button>
        </div>
      </section>

      {/* 3 e 4. SEÇÃO MÉTODO, CERTIFICAÇÕES E ETAPAS */}
      <section className="secao-metodo-passos">
        <div className="container-restrito">
          {/*Certificações */}
          <div className="colunas-layout">
            <div className="conteudo-foto">
              <img
                src={certificacoes.imagemSelo}
                alt="Selo Metodologia"
                className="img-landing-metodo"
              />
            </div>
            <div className="conteudo-texto">
              <h2>{certificacoes.titulo}</h2>
              <p>{certificacoes.texto}</p>
              <button onClick={rolarParaCheckout} className="badge-metodo">
                {certificacoes.textoBotao}
              </button>
            </div>
          </div>

          {/* Bloco de Divisão */}
          <div className="faixa-conclusao">
            <h3>{certificacoes.faixaEsquerda}</h3>
            <p>{certificacoes.faixaDireita}</p>
          </div>

          <div style={{ margin: "90px 0" }} />

          {/* Bloco dos Passos para o Objetivo */}
          <div className="colunas-layout invertido">
            <div className="conteudo-texto">
              <h2>{passosObjetivo.titulo}</h2>
              <p>{passosObjetivo.subtitulo}</p>

              <div className="lista-passos">
                {passosObjetivo.lista.map((passo, index) => (
                  <div className="item-passo" key={index}>
                    <div className="num-passo">{passo.numero}</div>
                    <div>
                      <h4>{passo.titulo}</h4>
                      <p>{passo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="conteudo-foto">
              <img
                src={passosObjetivo.imagemGrafico}
                alt="Gráfico Estatístico"
                className="img-landing-metodo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 e 6 CARDS e UTILIDADE */}
      <section className="secao-caracteristicas-utilidade">
        <div className="container-restrito">
          {/* Mapeamento dos cards */}
          <div className="grid-6-cards">
            {caracteristicas.map((card, index) => (
              <div className="card-caracteristica" key={index}>
                <span>{card.icone}</span>
                <h4>{card.titulo}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Seção Desempenho / Utilidade */}
          <div className="container-utilidade">
            <div className="utilidade-esq">
              <h2>{utilidade.titulo}</h2>
            </div>
            <div className="utilidade-dir">
              <ul>
                {utilidade.lista.map((item, index) => {
                  const [tituloForte, textoCorpo] = item.split(" > ");
                  return (
                    <li key={index}>
                      <strong>{tituloForte}</strong>
                      {textoCorpo ? ` › ${textoCorpo}` : ""}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="barra-preta-cta">
          <button onClick={rolarParaCheckout} className="btn-cta-venda">
            {venda.textoBotaoSecundario}
          </button>
        </div>
      </section>

      {/* 7. FEEDBACKS  */}
      <section className="secao-feedbacks">
        <div className="container-restrito">
          <p className="sub">{feedbacks.subtitulo}</p>
          <h2>{feedbacks.titulo}</h2>

          <div className="grid-feedbacks">
            {feedbacks.prints.map((urlFoto, index) => (
              <img
                key={index}
                src={urlFoto}
                alt={`Feedback de Aluno ${index + 1}`}
                className="img-feedback"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO DO AUTOR */}
      <section className="secao-autor">
        <div className="container-restrito">
          <div className="colunas-layout">
            <div className="conteudo-foto">
              <img
                src={autor.imagem}
                alt="Foto do Mentor"
                style={{
                  width: "100%",
                  maxWidth: "340px",
                  borderRadius: "16px",
                  display: "block",
                  margin: "0 auto",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <div className="conteudo-texto">
              <h2>{autor.titulo}</h2>
              {autor.biografia.split("\n\n").map((paragrafo, index) => (
                <p key={index} style={{ marginBottom: "16px" }}>
                  {paragrafo}
                </p>
              ))}
              <div style={{ marginTop: "32px" }}>
                <button onClick={rolarParaCheckout} className="btn-cta-venda">
                  {venda.textoBotaoComprar}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="secao-faq">
        <div className="container-restrito">
          <h2>{faqGarantia.tituloFAQ}</h2>
          <div className="grid-faq">
            {faqGarantia.perguntas.map((item, index) => (
              <div className="item-faq" key={index}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLÍTICA DE GARANTIA */}
      <section className="secao-garantia-politica">
        <div className="container-restrito">
          <h2>{faqGarantia.tituloGarantia}</h2>
          <p>{faqGarantia.textoGarantia}</p>
        </div>
      </section>

      {/* 10. SEÇÃO DE VENDA */}
      <section id="checkout-section" className="secao-venda-checkout">
        <div className="card-checkout">
          <h2>{venda.tituloCard}</h2>
          <h5>{venda.subtituloCard}</h5>

          <span className="preco-antigo">
            De {venda.precoAntigo} por apenas
          </span>
          <strong className="preco-principal">{venda.precoParcelado}</strong>
          <span className="preco-vista">{venda.precoVista}</span>

          <ul className="lista-inclusos">
            {venda.itensInclusos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="divisoria-checkout" />

          <span className="bonus-titulo">{venda.textoBonusDestaque}</span>
          <ul className="lista-bonus-valores">
            {venda.listaBonus.map((bonus, index) => (
              <li key={index}>
                {bonus.nome} <span>({bonus.valor})</span>
              </li>
            ))}
          </ul>

          <p className="soma-bonus-texto">{venda.textoSomaBonus}</p>

          <div style={{ marginTop: "40px" }}>
            <a href={config.linkWhatsapp} className="btn-cta-venda preto">
              {venda.textoBotaoComprar}
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO COMPACTA DE DESENVOLVEDORES (SEM ESTILO INLINE) */}
      <section className="secao-devs-compacta">
        <h4 className="titulo-devs-compacta">{desenvolvedores.titulo}</h4>
        <div className="container-devs-compacta">
          {desenvolvedores.equipe.map((membro, index) => (
            <div key={index} className="item-dev-compacto">
              <img
                src={membro.foto}
                alt={membro.nome}
                className="foto-dev-compacta"
              />
              <div className="textos-dev-compacto">
                <h5>{membro.nome}</h5>
                <span className="curso-dev-compacto">{membro.curso}</span>

                {/* Linha única de contato personalizável */}
                <p className="linha-contato-dev">
                  <strong>Contato:</strong> {membro.contato}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. RODAPÉ */}

      <footer className="footer-landing">
        <p>{rodape.direitos}</p>
        <div className="redes-container">
          {rodape.redesSociais.map((rede, index) => (
            <a
              key={index}
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rede.nome}
            </a>
          ))}
        </div>
      </footer>

      {/* 12. BOTÃO FLUTUANTE GLOBAL DO WHATSAPP */}
      <a
        href={config.linkWhatsapp}
        className="whatsapp-flutuante"
        target="_blank"
        rel="noopener noreferrer"
        title="Fale Conosco no WhatsApp"
      >
        <img src="/logo-whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
}
