const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // evita recarregar a página

  console.log("Formulário enviado!");
});

function alterarFundo() {
  document.body.style.background = "#222";
}
