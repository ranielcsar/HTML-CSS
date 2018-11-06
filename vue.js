/* 

- Raniel César (ranoob)
06 nov. 2018.

*/

var app = new Vue ({
    el: '#app',
    data: { texto: 'Será que agora ele continua ainda?' }
});

var app2 = new Vue ({
    el: '#app-2',
    data: {
        mensagem: 'Você carregou a página em: ' + new Date().toLocaleString()
    }
});

var app3 = new Vue ({
    el: '#app-3',
    data: {
        visto: true
    }
});

var app4 = new Vue ({
    el: '#app-4',
    data: {
        todos:
        [
            { texto: 'texto 1' },
            { texto: 'texto 2' },
            { texto: 'texto 3' }
        ]
    }
});

var app5 = new Vue ({
    el: '#app-5',
    data: {
        mensagem: 'socorram me subi no ônibus em marrocos'
    },

    methods: {
        inverterMensagem: function()
        {
            this.mensagem = this.mensagem.split('').reverse().join('')
        }
    }
});

var app6 = new Vue ({
    el: '#app-6',
    data: {
        mensagem: 'Escreva aqui'
    }
});
