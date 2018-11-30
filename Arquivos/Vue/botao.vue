<template>
  <div id="app">    
    <button class="botao"> {{ mensagem }} </button>
  </div>    
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      mensagem: 'Apenas um botão sem malícia nenhuma.'
    }
  }
}
</script>

<style>
.botao {
  background-color: #5e7fba;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  transition-duration: 0.3s;
}

  .botao:hover {
    background-color: #4f5283;
    color: #ffff88;
  }
</style>
