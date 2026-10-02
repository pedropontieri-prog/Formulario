class Atleta {

  constructor(nome, imagem, descricao) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
  }

  mostrar() {
    const novoCard = document.createElement("div");

    novoCard.classList.add("card");

    novoCard.innerHTML = `
      <h3>${this.nome}</h3>

      <img
        src="${this.imagem}"
        alt="${this.nome}"
      >

      <p>${this.descricao}</p>
    `;

    resultado.appendChild(novoCard);
  }
}

const formulario = document.getElementById("meuFormulario");
const resultado = document.getElementById("resultado");

let galeria = [];

async function buscarAtletas() {

  try {

    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!resposta.ok) {
      throw new Error("Erro ao realizar o GET.");
    }

    const dados = await resposta.json();

    console.log("GET realizado com sucesso!");
    console.log(dados);

  } catch (erro) {

    console.error("Erro no GET:", erro);

  }
}

async function enviarAtleta(atleta) {

  try {

    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(atleta)
      }
    );

    if (!resposta.ok) {
      throw new Error("Erro ao realizar o POST.");
    }

    const dados = await resposta.json();

    console.log("POST realizado com sucesso!");
    console.log(dados);

  } catch (erro) {

    console.error("Erro no POST:", erro);

  }
}

formulario.addEventListener(
  "submit",
  async function(evento) {

    evento.preventDefault();

    const nome = formulario.nome.value;
    const imagem = formulario.imagem.value;
    const descricao = formulario.descricao.value;

    const atleta = new Atleta(
      nome,
      imagem,
      descricao
    );

    galeria.push(atleta);

    mostrarGaleria();

    await enviarAtleta(atleta);

    formulario.reset();

  }
);

function mostrarGaleria() {

  resultado.innerHTML = "";

  galeria.forEach(function(atleta) {
    atleta.mostrar();
  });

}

function alterarFundo() {

  document.body.style.background =
    "linear-gradient(135deg, #222, #555)";

}

function apagarTudo() {

  galeria = [];

  resultado.innerHTML = "";

}

buscarAtletas();
