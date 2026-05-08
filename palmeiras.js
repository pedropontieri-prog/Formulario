<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Galeria dinâmica</title>

<style>
  body{
    font-family: Arial;
    background:#f0f0f0;
    padding:20px;
  }

  .item{
    background:#fff;
    padding:15px;
    margin-bottom:15px;
    border-radius:10px;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
  }

  img{
    width:100%;
    border-radius:10px;
    margin:10px 0;
  }

  button{
    padding:10px 15px;
    border:none;
    border-radius:8px;
    cursor:pointer;
    margin-top:10px;
  }

  .add{
    background:green;
    color:white;
  }

  .enviar{
    background:blue;
    color:white;
  }
</style>
</head>
<body>

<h2>Adicionar informações</h2>

<form id="meuFormulario">

  <div id="campos">

    <div class="item">
      <input type="text" name="nome" placeholder="Nome"><br><br>

      <input type="text" name="imagem" placeholder="URL da imagem"><br><br>

      <textarea name="descricao" placeholder="Descrição"></textarea>
    </div>

  </div>

  <button type="button" class="add" onclick="adicionarCampo()">
    + Adicionar item
  </button>

  <button type="submit" class="enviar">
    Enviar
  </button>

</form>

<hr>

<div id="resultado"></div>

<script>

const formulario = document.getElementById('meuFormulario');
const resultado = document.getElementById('resultado');
const campos = document.getElementById('campos');

function adicionarCampo(){

  const novoCampo = document.createElement('div');

  novoCampo.classList.add('item');

  novoCampo.innerHTML = `
    <input type="text" name="nome" placeholder="Nome"><br><br>

    <input type="text" name="imagem" placeholder="URL da imagem"><br><br>

    <textarea name="descricao" placeholder="Descrição"></textarea>
  `;

  campos.appendChild(novoCampo);
}

formulario.addEventListener('submit', function(evento){

  evento.preventDefault();

  resultado.innerHTML = '';

  const itens = document.querySelectorAll('.item');

  itens.forEach(item => {

    const nome = item.querySelector('[name="nome"]').value;
    const imagem = item.querySelector('[name="imagem"]').value;
    const descricao = item.querySelector('[name="descricao"]').value;

    resultado.innerHTML += `
      <div class="item">
        <h3>${nome}</h3>

        <img src="${imagem}">

        <p>${descricao}</p>
      </div>
    `;
  });

});

</script>

</body>
</html>
