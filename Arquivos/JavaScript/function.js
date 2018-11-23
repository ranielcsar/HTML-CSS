var tela= document.getElementById("tela"), ctx= tela.getContext('2d');


function quadratica(x) { return 0.01 * x * x; }

function seno(x) { return Math.sin(x/20) * 100 + 200; }

function desenhaFuncao(cor, funcaoMatematica)
{
    for (var x=0; x < 600; x++)
    {
        var y= funcaoMatematica(x);

        ctx.fillStyle= cor;
        ctx.beginPath();
        ctx.arc(x, 400 - y, 2, 0, 2*3.14);
        ctx.fill();
    }
}

desenhaFuncao('#00f', seno);

