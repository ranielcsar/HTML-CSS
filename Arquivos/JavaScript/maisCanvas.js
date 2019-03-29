var tela, ctx;

tela= document.getElementById("tela");
ctx= tela.getContext('2d');

function desenhaQuadrado(x, y, cor)
{ 
    ctx.fillStyle= cor;
    ctx.fillRect(x, y, 50, 50);

    ctx.strokeStyle= "#313131";
    ctx.strokeRect(x, y, 50, 50);
}

function desenhaBola(x, y, cor)
{
    ctx.fillStyle= cor;
    ctx.beginPath();
    ctx.arc(x+25, y, 25, 0, 2*3.14);    
    ctx.fill();
}

for (var x=0; x < 600; x+=50)
{
    desenhaQuadrado(x, 0, "#66936d");
    desenhaQuadrado(x, 50, "#cc3333");
    desenhaBola(x, 100, "#3c617e");   
}