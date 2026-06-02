//aba para a modificação do produto
//com base do que o cliente queira vender

export const landingPageConteudo = {
  config: {
    nomeMarca: "Nome da Empresa/produto",
    linkWhatsapp:
      "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais.",
    tempoCronometroMinutos: 15,
  },

  // 1. Header (Cabeçalho) e Frase de Impacto
  header: {
    tagUrgencia: "DESCONTO MAXIMO APENAS HOJE!",
    subtagUrgencia: "Preço baixo",
    fraseImpacto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
  },

  // 2. Seção de Vídeo (Configurado para YouTube)
  videoSection: {
    subHeadline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    videoUrl:
      "https://www.youtube.com/embed/BRE4dNUr9HQ?si=kJyxS12RImZ0LI0P&start=14",
  },

  // 3. Seção de Certificações
  certificacoes: {
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    texto:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    textoBotao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    imagemSelo: "/selo-metodo.png",
    faixaEsquerda:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    faixaDireita:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
  },

  // 4. Seção “Passos para o Objetivo”
  passosObjetivo: {
    titulo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    subtitulo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    imagemGrafico: "/grafico-passos.png",
    lista: [
      {
        numero: "1",
        titulo: "1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        numero: "2",
        titulo: "2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        numero: "3",
        titulo: "3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
    ],
  },

  // 5. Seção de Características do Produto (6 cards)
  caracteristicas: [
    {
      icone: "🟢",
      titulo: "lorem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    },
    {
      icone: "🟢",
      titulo: "lorem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    },
    {
      icone: "🟢",
      titulo: "lorem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    },
    {
      icone: "🟢",
      titulo: "lorem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    },
    {
      icone: "🟢",
      titulo: "lorem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    },
    {
      icone: "🟢",
      titulo: "lorem",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    },
  ],

  // 6. Seção de Utilidade
  utilidade: {
    titulo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    lista: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    ],
  },

  // 7. Seção de Feedbacks e Avaliações (Mural de fotos)
  feedbacks: {
    subtitulo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    titulo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    prints: [
      "/feedback.jpg",
      "/feedback.jpg",
      "/feedback.jpg",
      "/feedback.jpg",
      "/feedback.jpg",
      "/feedback.jpg",
    ],
  },

  // 8. Seção do Autor ou Responsável
  autor: {
    titulo: "Conheça seu mentor",
    biografia:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    imagem: "/foto-mentor.jpg",
  },

  // 9. Seção de Dúvidas e Garantia
  faqGarantia: {
    tituloFAQ: "lorem?",
    perguntas: [
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
      },
    ],
    tituloGarantia: "Garantia Incondicional de 7 Dias",
    textoGarantia:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
  },

  // 10. Seção de Venda
  venda: {
    tituloCard: "lorem",
    subtituloCard: "lorem!",
    precoAntigo: "R$ 00",
    precoParcelado: "12x R$ 00",
    precoVista: "ou R$ 00 à vista.",
    itensInclusos: ["lorem", "lorem", "lorem", "lorem", "lorem"],
    textoBonusDestaque:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    listaBonus: [
      { nome: "lorem", valor: "R$ 00" },
      { nome: "lorem", valor: "R$ 00" },
    ],
    textoSomaBonus:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
    textoBotaoComprar: "lorem",
    textoBotaoSecundario:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat.",
  },

  // Nova Seção: Integrantes do Projeto
  desenvolvedores: {
    titulo: "Criado por:",
    equipe: [
      {
        nome: "Andrey Muniz Benites",
        curso: "TSI",
        foto: "/user2.jpg",
        contato: "andrey.benites@estudante.ifms.edu.br",
      },
      {
        nome: "Matheus Marques Larréa",
        curso: "TSI",
        foto: "/user1.jpeg",
        contato: "matheus.larrea@estudante.ifms.edu.br",
      },
    ],
  },

  // 11. Rodapé (Footer)
  rodape: {
    direitos:
      "© 2026 Projeto InovaIF - Trabalho desenvolvido em ambiente acadêmico.",
    redesSociais: [
      { nome: "Facebook", url: "https://www.facebook.com/ifms.aq/" },
      { nome: "Instagram", url: "https://www.instagram.com/ifmsaq/" },
      {
        nome: "YouTube",
        url: "https://www.youtube.com/@ifmscampusaquidauana4115",
      },
    ],
  },
};
