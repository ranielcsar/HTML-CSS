var contexto;
var label;
var canvas, altura, largura, escala;
var fps;
var playing;
var snake;

var tecla= {
   esquerda: 37,
   cima: 38,
   direita: 39,
   baixo: 40
};

window.addEventListener("keydown", entradaUsuario);
window.addEventListener("resize", resizeWindow);

function entradaUsuario(e)
{

   if (!playing && (e.keyCode == tecla.esquerda || e.keyCode == tecla.cima || e.keyCode == tecla.direita || e.keyCode == tecla.baixo))
      playing= true;

   switch (e.keyCode)
   {
      case tecla.esquerda:
         snake.direcao= [-1, 0];
         break;

      case tecla.cima:
         snake.direcao= [0, -1];
         break;

      case tecla.direita:
         snake.direcao= [1, 0];
         break;

      case tecla.baixo:
         snake.direcao= [0, 1];
         break;
   }
}

function resizeWindow() //função para deixar o jogo responsivo
{
   largura= window.innerWidth;
   altura= window.innerHeight;

   canvas.width= largura;
   canvas.height= altura;

   escala= Math.max(Math.floor(largura/60), Math.floor(altura/60)); 
   //usado para dividir linhas e colunas dependendo do tamanho da tela
}

function novoJogo()
{
   snake= new Snake();

   label= new playLabel();

   playing= false;
}

function iniciaJogo()
{
   canvas= document.createElement("canvas"); //cria elemento canvas

   resizeWindow(); //identifica o tamanho da tela antes de colocar o "canvas" no body do html

   document.body.appendChild(canvas); //adiciona "canvas" ao body do html

   contexto= canvas.getContext("2d");

   fps= 15;

   novoJogo();
   rodarJogo();
}

function playLabel()
{
   this.text= "Pressione qualquer seta para jogar! :D";
   this.color= "#69547c";

   this.draw= function()
   {
      contexto.fillStyle= this.color;
      contexto.font= escala+10 + "px Arial";
      contexto.fillText(this.text, largura/2 - contexto.measureText(this.text).width/2, altura/2);
   }
}

function Snake()
{
               //x   y
   this.body= [[10, 10], [10, 11], [10, 12]]; //vetor de vetores
   this.color= "#66936d";
   this.colorLine= "#313131";   
   this.direcao= [0, -1];

   this.update= function()
   {
      var nextPosition= [this.body[0][0] + this.direcao[0], this.body[0][1] + this.direcao[1]];

      this.body.pop(); //remove último elemento
      this.body.splice(0, 0, nextPosition); //adiciona no 1º indice sem remover nada

      if (!playing)
      {
         if (this.direcao[1] == -1 && nextPosition[1] <= (altura * 0.1 / escala))
            this.direcao= [1, 0];

         else if (this.direcao[0] == 1 && nextPosition[0] >= (largura * 0.9 / escala))
            this.direcao= [0, 1];

         else if (this.direcao[1] == 1 && nextPosition[1] >= (altura * 0.9 / escala))
            this.direcao= [-1, 0];

         else if (this.direcao[0] == -1 && nextPosition[0] <= (largura * 0.2 / escala))
            this.direcao= [0, -1];         
      }

      if (nextPosition[0] == this.body[1][0] && nextPosition[1] == [1][1])
      {
         this.body.reverse();
         nextPosition= [this.body[0][0] + this.direcao[0], this.body[0][1] + this.direcao[1]];
      }
   }

   this.draw= function()
   {
      contexto.fillStyle= this.color;
      contexto.lineWidth= 2;
      contexto.strokeStyle= this.colorLine;
      contexto.stroke();   

      for (var i=0; i<this.body.length; i++)
      {
         contexto.fillRect(this.body[i][0] * escala, this.body[i][1] * escala, escala, escala); //pega coord. em x/y para snake
      }
   }
}

function atualiza()
{
   snake.update();
}

function rodarJogo()
{
   atualiza();
   desenhaJogo();

   setTimeout(rodarJogo, 1000/fps); //divide 1000 (milissegundos) por 15 (fps)
}

function desenhaJogo()
{
   contexto.clearRect(0, 0, largura, altura); //limpa tela

   snake.draw();

   if (!playing)
      label.draw();
}