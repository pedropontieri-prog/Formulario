document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const container = document.querySelector(".container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("input[type='text']").value;
    const imagem = document.querySelector("input[type='url']").value;
    const descricao = document.querySelector("textarea").value;

    if (!nome || !imagem) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    // Criando o card
    const card = document.createElement("div");
    card.style.marginTop = "20px";
    card.style.padding = "15px";
    card.style.borderRadius = "10px";
    card.style.background = "#f5f5f5";

    card.innerHTML = `
      <h3>${nome}</h3>
      <img src="${imagem}" style="width:100%; border-radius:8px; margin:10px 0;">
      <p>${descricao}</p>
    `;

    // Adiciona abaixo do formulário
    container.appendChild(card);

    // Limpa o formulário
    form.reset();
  });
});
