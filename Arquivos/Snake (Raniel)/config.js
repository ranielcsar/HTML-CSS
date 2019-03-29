var label;
var altura, largura, tamanho;
var FPS;
var playing;
var snake;
var fruta;

const tela = document.getElementById("tela");
const lapis = tela.getContext("2d");

var tecla = {
   esquerda: 37,
   cima: 38,
   direita: 39,
   baixo: 40
};

window.addEventListener("resize", redimensionar);

function redimensionar()
{
   largura = window.innerWidth;
   altura = window.innerHeight;

   tela.width = largura;
   tela.height = altura;   

   tamanho = Math.max(Math.floor(largura / 45), Math.floor(altura / 45));
}

redimensionar();