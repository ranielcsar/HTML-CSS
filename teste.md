<p><h1 align = "center">ESTADOS DE PROCESSO</h1>
<br></p>
<p align = "justify">No momento em que o usuário abre um programa, processos são criados e colocados na lista de <b>prontos</b>. Conforme outros processos concluem sua execução, o processo que acabou de entrar vai subindo até o topo para esperar um processador disponível. Quando consegue, ocorre uma <b>transição de estado</b>, onde o processo passa de <b>pronto</b> para <b>executando</b>. Esse procedimento é chamado de <b>despacho</b> e é feito por uma entidade denominada <b>despachante</b>. Processos que estão <b>prontos</b> ou <b>executando</b> estão acordados pois competem ativamente pelo tempo do processador. Essa gerência se deve ao fato de que o sistema operacional precisa servir da melhor maneira aos processos.</p>
<p align = "justify">Para evitar que algum processo tome conta do sistema, com ou sem intenção, existe o <b>relógio de interrupção em hardware</b> que determina um intervalo de tempo para aquele processo executar, que também é chamado de <b>quantum</b> (quantum tempo tem?). Caso o processo não devolva o processador voluntariamente antes do <b>quantum</b> terminar, o relógio gera uma interrupção para o sistema operacional obter controle do processador. E aí ocorre outra <b>transição de estados</b> no qual muda de <b>executando</b> para <b>pronto</b> e despacha o primeiro processo da lista de prontos, mudando o estado de <b>pronto</b> para <b>executando</b>.</p>
<p align = "justify">Se o processo que está sendo executado iniciar uma operação de E/S antes do seu tempo acabar e tiver que esperar a operação ser concluída, ele voluntariamente entrega o processador. Ou seja, ele bloqueou a si mesmo, deixando em suspenso a conclusão da operação. Processos que estão no estado <b>bloqueado</b> não podem ser executados mesmo que haja processador disponível, por isso dizemos que eles estão adormecidos. Quando ocorre da operação de E/S ser concluída (ou qualquer outra operação no qual o processo está esperando), o sistema operacional muda o estado do processo de <b>bloqueado</b> para <b>pronto</b>.<p>
<p><h3 align = "center">RESUMO ESTADOS</h3></p>
<table>
<thead>
<tr><th>ESTADO</th><th>DESCRIÇÃO</th></tr>
</thead>
<tbody>
<tr><td><em>NOVO</em></td><td>Sendo carregado na memória com o que é necessário para sua execução.</td></tr>
<tr><td><em>PRONTO</em></td><td>Está na memória pronto para ser executado.</td></tr>
<tr><td><em>EXECUTANDO</em></td><td>O processador está executando as instruções do processo.</td></tr>
<tr><td><em>BLOQUEADO</em></td><td>O processo está esperando dados externos.</td></tr>
<tr><td><em>TERMINADO</em></td><td>O processo terminou e pode ser retirado da memória.</td></tr>
</tbody>
</table>
<p><h3 align = "center">TABELA DE TRANSIÇÕES</h3></p>
<table>
<thead>
<tr><th>DESPACHADO</th><th>QUANTUM EXPIRADO</th><th>BLOQUEADO</th><th>CONCLUSÃO E/S</th></tr>
</thead>
<tbody>
<tr><td>pronto -&gt; executando</td><td>executando -&gt; pronto</td><td>executando -&gt; bloqueado</td><td>bloqueado -&gt; pronto</td></tr>
</tbody>
</table>
<p><br></p>
<p><h1 align = "center">PCB (Process Control Block)</h1>
<br></p>
<p align = "justify">Ao criar um novo processo o sistema operacional realiza várias operações. Para que o sistema saiba quais operações realizar, o processo vem com um identificador chamado <i>Process Identification Number</i> (PID), ou número de identificação do processo. Após identificar qual processo será executado, o sistema operacional cria um <b>bloco de controle de processo (PCB), também chamado de descritor de processo</b>. É nele que ficará todas as informações necessárias para que o processo seja gerenciado. Normalmente essas informações incluem: </p>
<ul>
<li>PID</li>
<li>estado do processo (pronto, executando ou bloqueado)</li>
<li>contador de programa (valor que determina qual procedimento o processo deve realizar em seguida)</li>
<li>prioridade de escalonamento</li>
<li>credencias (dados que definem quais recursos o processo pode utilizar)</li>
<li>um ponteiro para o processo-pai (processo que criou esse processo)</li>
<li>ponteiros para os processos-filho (processos criados por esse processo)</li>
<li>ponteiros para localização de dados e instruções do processo na memória</li>
<li>ponteiros para recursos alocados (como arquivos)</li>
</ul>
<p align = "justify">Tudo isso para que o processo reinicie mais tarde como se não houvesse parado.</p>
<p><br></p>
<h3>REFERÊNCIAS</h3>
<p>DEITEL, H. M.; DEITEL, P. J.; CHOFFNES, D. R. <b>Sistemas operacionais</b>. 3. ed. São Paulo, 2005.</p>
<p>MAZIERO, C. A. <b>Sistemas operacionais: conceitos e mecanismos</b>. 2017.</p>
<p>TANENBAUM, A. S.; BOS, H. <b>Sistemas operacionais modernos</b>. 4. ed. São Paulo: Pearson Education do Brasil, 2016.</p>
