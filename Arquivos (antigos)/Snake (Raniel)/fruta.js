function Fruta()
{
   this.x = Math.floor((Math.random() * largura) / tamanho);
   this.y = Math.floor((Math.random() * altura) / tamanho);

   if (this.x < 0)
   {
      this.x *= -1;
   } else if (this.y < 0) {
      this.y *= -1;
   }

   this.draw = function()
   {
      lapis.fillStyle = '#c33';

      lapis.fillRect(this.x * tamanho, this.y * tamanho, tamanho, tamanho);
   }
}