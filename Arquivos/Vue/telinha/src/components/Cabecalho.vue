<template>
   <div class="header">      
      <h2 class="nomeSite"> DESCUBRA O IF </h2>

      <ul class="menu">
         <li><a href="#">Link 1</a></li>
         <li><a href="#">Link 2</a></li>
         <li><a href="#">Link 3</a></li>
         <li><a href="#">Link 4</a></li>
      </ul>      
   </div>
</template>

<script>
   export default {
      name: 'cabecalho'
   }
</script>

<style scoped>
   .header {
      width: calc(100% - 40px);
      background-color: #5D4037;
      padding: 20px;
   }

   .nomeSite {
      text-align: center;
      color: #bada55;
   }

   .menu {
      margin-left: calc(100% - 15.7em);
   }

   li {
      list-style: none;
      display: inline-block;
      padding: 0 6px;
   }

   li a {
      text-decoration: none;
      color: white;      
   }
      li a:hover {
         color: #f55;
      }
</style>