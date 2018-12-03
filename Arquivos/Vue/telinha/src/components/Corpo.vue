<template>
   <ul class="lista">
      <li v-for = "itens in itemLista">
         {{ itens.item }}
      </li>
   </ul>   
</template>

<script type="text/javascript">

   export default {
      name: 'corpo',

      data() 
      {
         return {
            itemLista:
            [
               { item: '1º item :D' },
               { item: '2º item :D' },
               { item: '3º item :D' },
               { item: '4º item :D' }
            ]
         }         
      }
   }  

</script>

<style type="text/css">
   
   .lista {
      color: #999999;
   }   

</style>