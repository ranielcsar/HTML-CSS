window.addEventListener("keydown", moverCobra);

function moverCobra(evento)
{
   if (!playing &&
   (evento.keyCode == tecla.esquerda ||
    evento.keyCode == tecla.cima     || 
    evento.keyCode == tecla.direita  || 
    evento.keyCode == tecla.baixo)) 
   {
      playing = true;
   }

   switch (evento.keyCode)
   {
      case tecla.esquerda:
         snake.direcao = [-1, 0];
         break;

      case tecla.cima:
         snake.direcao = [0, -1];
         break;

      case tecla.direita:
         snake.direcao = [1, 0];
         break;

      case tecla.baixo:
         snake.direcao = [0, 1];
         break;
   }
}

function novoJogo()
{
   snake = new Snake();

   fruta = new Fruta();

   label = new playLabel();

   playing = false;
}

function playLabel()
{
   this.text = "Pressione qualquer seta para jogar! :D";

   this.draw = function()
   {
      lapis.fillStyle = "#e5d9c4";
      lapis.font = tamanho + 5 + "px Arial";
      lapis.fillText(this.text, largura / 2 - lapis.measureText(this.text).width / 2, altura / 2);
   }
}

function iniciaJogo()
{
   FPS = 13;

   novoJogo();
   rodarJogo();
}

function rodarJogo()
{
   atualiza();
   desenhaJogo();
   checaParedes();
   comeuFruta();

   setTimeout(rodarJogo, 1000 / FPS); // divide 1000 (milissegundos) por 15 (FPS)
}

function comeuFruta()
{
   if (snake.comeu(fruta))
   {
      let cabecaX = snake.body[0][0];
      let cabecaY = snake.body[0][1];

      fruta = new Fruta();

      snake.body.push([cabecaX, cabecaY]);
   }
}

function desenhaJogo()
{
   lapis.clearRect(0, 0, largura, altura); // limpa tela

   snake.draw();

   if (!playing)
   {
      label.draw();
   } else {
      fruta.draw();
   }
}

function atualiza()
{
   snake.update();
}

function checaParedes()
{
   let cabecaX = snake.body[0][0];
   let cabecaY = snake.body[0][1];

   // esquerda
   if (cabecaX * tamanho > largura)
   {
      snake.body[0][0] = 0;
   }

   // direita
   if (cabecaX * tamanho < 0)
   {
      snake.body[0][0] = Math.floor(largura / tamanho);
   }

   // cima
   if (cabecaY * tamanho < 0)
   {
      snake.body[0][1] = Math.floor(altura / tamanho);
   }

   // baixo
   if (cabecaY * tamanho > altura)
   {
      snake.body[0][1] = 0;
   }
}

iniciaJogo();