function Snake()
{
               // x   y
   this.body = [[10, 10], [10, 11], [10, 12]]; // vetor de vetores
   this.direcao = [0, -1];

   this.update = function()
   {
      var nextPosition = [this.body[0][0] + this.direcao[0], this.body[0][1] + this.direcao[1]];

      this.body.pop(); // remove último elemento
      this.body.splice(0, 0, nextPosition); // adiciona no 1º indice sem remover nada

      if (!playing)
      {
         if (this.direcao[1] == -1 && nextPosition[1] <= (altura * 0.1 / tamanho))
         {
            this.direcao = [1, 0];
         }

         else if (this.direcao[0] == 1 && nextPosition[0] >= (largura * 0.9 / tamanho))
         {
            this.direcao = [0, 1];
         }

         else if (this.direcao[1] == 1 && nextPosition[1] >= (altura * 0.9 / tamanho))
         {
            this.direcao = [-1, 0];
         }

         else if (this.direcao[0] == -1 && nextPosition[0] <= (largura * 0.2 / tamanho))
         {
            this.direcao = [0, -1];         
         }
      }

      if (nextPosition[0] == this.body[1][0] && nextPosition[1] == [1][1])
      {
         this.body.reverse();
         nextPosition = [this.body[0][0] + this.direcao[0], this.body[0][1] + this.direcao[1]];
      }
   }

   this.draw = function()
   {
      for (let i = 0; i < this.body.length; i++)
      {       
         lapis.fillStyle = (i == 0) ? "#A8F876" : "#194B2B";

         lapis.fillRect(this.body[i][0] * tamanho, this.body[i][1] * tamanho, tamanho, tamanho);
         lapis.strokeRect(this.body[i][0] * tamanho, this.body[i][1] * tamanho, tamanho, tamanho);         
      }
   }

   this.comeu = function(fruta)
   {
      if (this.body[0][0] === fruta.x && this.body[0][1] === fruta.y)
      {
         return true;
      }

      return false;
   }
}