
const formulario = document.getElementById('meuFormulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const nome = formulario.nome.value;
  const imagem = formulario.imagem.value;
  const descricao = formulario.descricao.value;

  resultado.innerHTML = `
    <div style="
      margin-top:20px;
      padding:15px;
      background:#fff;
      border-radius:10px;
      box-shadow:0 5px 15px rgba(0,0,0,0.2);
      text-align:center;
    ">
      <h3>${nome}</h3>
      <img src="${imagem}" style="width:100%; border-radius:10px; margin:10px 0;">
      <p>${descricao}</p>
    </div>
  `;
});

function alterarFundo() {
  document.body.style.background = "#222";
}
