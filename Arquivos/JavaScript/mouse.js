var tela, ctx;
var x, y;

tela= document.getElementById('tela');
ctx= tela.getContext('2d');

ctx.fillStyle= "#313131";
ctx.fillRect(0, 0, 600, 400);

tela.onclick= function(evento)
{
    x= evento.pageX - tela.offsetLeft;
    y= evento.pageY - tela.offsetTop;

    ctx.fillStyle= "#cc3333";
    ctx.beginPath();

    ctx.arc(x, y, 20, 0, 2*3.14);
    ctx.fill();

    console.log("Posição do click: " + x + ", " + y);
}