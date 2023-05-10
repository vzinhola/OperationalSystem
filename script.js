var teralux = document.getElementById("teralux");
teralux.addEventListener("click", mostrarBarra); // Adiciona um ouvinte de eventos ao clicar na imagem

function mostrarBarra() {
  var barra = document.getElementById("barra");
  if (barra.style.display === "none") {
    barra.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}
var pesquisa = document.getElementById("pesquisar");
pesquisar.addEventListener("click", mostrarBarraPesquisa); // Adiciona um ouvinte de eventos ao clicar na imagem

function mostrarBarraPesquisa() {
  var barra = document.getElementById("barra-pesquisa");
  if (barra.style.display === "none") {
    barra.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}
var document = document.getElementById("documents");
documents.addEventListener("click", mostrarBarraDocuments); // Adiciona um ouvinte de eventos ao clicar na imagem

function mostrarBarraDocuments() {
  var barra = document.getElementById("barra-documents");
  if (barra.style.display === "none") {
    barra.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}
var config = document.getElementById("config");
config.addEventListener("click", mostrarBarraConfig); // Adiciona um ouvinte de eventos ao clicar na imagem

function mostrarBarraConfig() {
  var barra = document.getElementById("barra-configure");
  if (barra.style.display === "none") {
    barra.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}
var tema = document.getElementById("tema");
tema.addEventListener("click", mostrarBarraTema); // Adiciona um ouvinte de eventos ao clicar na imagem

function mostrarBarraTema() {
  var barra = document.getElementById("barra-tema");
  if (barra.style.display === "none") {
    barra.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}
function mudarBackground(urlImagem) {
  document.body.style.backgroundImage = `url(${urlImagem})`;
}
var txt = document.getElementById("texto")
texto.addEventListener("click", mostrarTexto);

function mostrarTexto() {
  var txt = document.getElementById("barratext")
  if (txt.style.display === "none") {
    txt.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}