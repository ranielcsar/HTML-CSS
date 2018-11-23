var sorteados= [];
var numerosUsuario= [];
var botao, verificar;
var numero;
var i;
var acertos;

for (i=0; i<6; i++)
    sorteados[i]= Math.round (Math.random() * 60);

function adicionar() {
    numero= document.getElementById("numerosUsuario").value;    
    
    numerosUsuario.push(numero);
    console.log(numerosUsuario);
}

function verificaAcertos() {
    acertos= 0;

    for (i=0; i<sorteados.length; i++) {
        for (var j=0; j<sorteados.length; j++)
        {
            if (numerosUsuario[j] == sorteados[i])
            {
                acertos++;            
            }
        }
    }

    alert("Você acertou " + acertos + " números!");
}

botao= document.getElementById("adicionar");
botao.onclick= adicionar;

verificar= document.getElementById("verificar");
verificar.onclick= verificaAcertos;