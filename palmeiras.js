// Verifica se já existem dados salvos
let galeria = JSON.parse(localStorage.getItem("galeria")) || [];

const formulario = document.getElementById('meuFormulario');
const resultado = document.getElementById('resultado');

// Renderiza todos os cards
function mostrarGaleria() {
  resultado.innerHTML = "";

  galeria.forEach((atleta) => {
    renderizarCards(atleta);
  });
}

// Evento do formulário
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const novo = {
    nome: formulario.nome.value,
    imagem: formulario.imagem.value,
    descricao: formulario.descricao.value
  };

  // Adiciona no array
  galeria.push(novo);

  // Salva no localStorage
  localStorage.setItem("galeria", JSON.stringify(galeria));

  // Atualiza os cards
  mostrarGaleria();

  // Limpa formulário
  formulario.reset();
});

// Função que cria os cards
function renderizarCards(atleta) {

  const novoCard = `
    <div style="
      margin-top:20px;
      padding:15px;
      background:#fff;
      border-radius:10px;
      box-shadow:0 5px 15px rgba(0,0,0,0.2);
      text-align:center;
    ">
      <h3>${atleta.nome}</h3>

      <img 
        src="${atleta.imagem}" 
        alt="${atleta.nome}"
        style="
          width:100%;
          border-radius:10px;
          margin:10px 0;
        "
      >

      <p>${atleta.descricao}</p>
    </div>
  `;

  resultado.innerHTML += novoCard;
}

// Mostra os dados salvos quando a página abre
mostrarGaleria();

// Muda o fundo
function alterarFundo() {
  document.body.style.background = "#222";
}
