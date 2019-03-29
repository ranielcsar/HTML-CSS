var tela,
contexto;
var i, j;


tela= document.getElementById("tela");
contexto= tela.getContext("2d");

/*contexto.fillStyle= "#65bf95";
contexto.fillRect(0, 0, 200, 400);  // nesta ordem -> posição X, posição Y,
                                    //                largura e altura.
contexto.fillStyle= "#d03737";
contexto.fillRect(400, 0, 200, 400);

contexto.fillStyle= "#4b58d8";
contexto.beginPath();
contexto.moveTo(300, 200);
contexto.lineTo(200, 400);
contexto.lineTo(400, 400);
contexto.fill();*/

contexto.fillStyle= "#d8cc4b";
contexto.beginPath();

contexto.moveTo(0, 200);
contexto.lineTo(300, 0);
contexto.lineTo(600, 200);
contexto.lineTo(300, 400);
contexto.fill();

contexto.fillStyle= "#4b62d8";
contexto.beginPath();

contexto.arc(300, 200, 145, 0, 2 * 3.14); //pos X, Y. ângulo inicial, final.
contexto.fill();                          // raio

contexto.fillStyle= "white";
contexto.fillRect(155, 200, 290, 20);
