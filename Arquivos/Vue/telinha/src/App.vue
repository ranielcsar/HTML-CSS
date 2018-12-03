<template>
   <div id="app">
      <cabecalho></cabecalho>
      <corpo></corpo>
   </div>
</template>

<script type="text/javascript">

import cabecalho from './components/Cabecalho.vue'
import corpo from './components/Corpo.vue'

export default
{
   name: 'app',

   components:
   {
      cabecalho,
      corpo
   }
}

</script>

<style type="text/css">
   
</style>