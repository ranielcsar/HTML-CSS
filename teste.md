<h1 align = "center">ESTADOS DE PROCESSO</h1>
<br>


<p align = "justify">No momento em que o usuário abre um programa, processos são criados e colocados na lista de <b>prontos</b>. Conforme outros processos concluem sua execução, o processo que acabou de entrar vai subindo até o topo para esperar um processador disponível. Quando consegue, ocorre uma <b>transição de estado</b>, onde o processo passa de <b>pronto</b> para <b>executando</b>. Esse procedimento é chamado de <b>despacho</b> e é feito por uma entidade denominada <b>despachante</b>. Processos que estão <b>prontos</b> ou <b>executando</b> estão acordados pois competem ativamente pelo tempo do processador. Essa gerência se deve ao fato de que o sistema operacional precisa servir da melhor maneira aos processos.</p>

<p align = "justify">Para evitar que algum processo tome conta do sistema, com ou sem intenção, existe o <b>relógio de interrupção em hardware</b> que determina um intervalo de tempo para aquele processo executar, que também é chamado de <b>quantum</b> (quantum tempo tem?). Caso o processo não devolva o processador voluntariamente antes do <b>quantum</b> terminar, o relógio gera uma interrupção para o sistema operacional obter controle do processador. E aí ocorre outra <b>transição de estados</b> no qual muda de <b>executando</b> para <b>pronto</b> e despacha o primeiro processo da lista de prontos, mudando o estado de <b>pronto</b> para <b>executando</b>.</p>

<p align = "justify">Se o processo que está sendo executado iniciar uma operação de E/S antes do seu tempo acabar e tiver que esperar a operação ser concluída, ele voluntariamente entrega o processador. Ou seja, ele bloqueou a si mesmo, deixando em suspenso a conclusão da operação. Processos que estão no estado <b>bloqueado</b> não podem ser executados mesmo que haja processador disponível, por isso dizemos que eles estão adormecidos. Quando ocorre da operação de E/S ser concluída (ou qualquer outra operação no qual o processo está esperando), o sistema operacional muda o estado do processo de <b>bloqueado</b> para <b>pronto</b>.<p>

<h3 align = "center">RESUMO ESTADOS</h3>

|     ESTADO     | DESCRIÇÃO |
|       -        |     -
| *NOVO*         | Sendo carregado na memória com o que é necessário para sua execução.
| *PRONTO*       | Está na memória pronto para ser executado.
| *EXECUTANDO*   | O processador está executando as instruções do processo.
| *BLOQUEADO*    | O processo está esperando dados externos.
| *TERMINADO*    | O processo terminou e pode ser retirado da memória.

<h3 align = "center">TABELA DE TRANSIÇÕES</h3>

|      DESPACHADO      |   QUANTUM EXPIRADO   |         BLOQUEADO       |    CONCLUSÃO E/S    |
|          -           |           -          |             -           |           -         |
| pronto -> executando | executando -> pronto | executando -> bloqueado | bloqueado -> pronto |

<br>

<h1 align = "center">PCB (Process Control Block)</h1>
<br>

<p align = "justify">Ao criar um novo processo o sistema operacional realiza várias operações. Para que o sistema saiba quais operações realizar, o processo vem com um identificador chamado <i>Process Identification Number</i> (PID), ou número de identificação do processo. Após identificar qual processo será executado, o sistema operacional cria um <b>bloco de controle de processo (PCB), também chamado de descritor de processo</b>. É nele que ficará todas as informações necessárias para que o processo seja gerenciado. Normalmente essas informações incluem: </p>

- PID
- estado do processo (pronto, executando ou bloqueado)
- contador de programa (valor que determina qual procedimento o processo deve realizar em seguida)
- prioridade de escalonamento
- credencias (dados que definem quais recursos o processo pode utilizar)
- um ponteiro para o processo-pai (processo que criou esse processo)
- ponteiros para os processos-filho (processos criados por esse processo)
- ponteiros para localização de dados e instruções do processo na memória
- ponteiros para recursos alocados (como arquivos)

<p align = "justify">Tudo isso para que o processo reinicie mais tarde como se não houvesse parado.</p>

<br>

### REFERÊNCIAS

DEITEL, H. M.; DEITEL, P. J.; CHOFFNES, D. R. <b>Sistemas operacionais</b>. 3. ed. São Paulo, 2005.

MAZIERO, C. A. <b>Sistemas operacionais: conceitos e mecanismos</b>. 2017.

TANENBAUM, A. S.; BOS, H. <b>Sistemas operacionais modernos</b>. 4. ed. São Paulo: Pearson Education do Brasil, 2016. 
