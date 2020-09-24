<template>
<div class="nav ">
     <van-icon name="arrow-left" size="0.4rem"  @click="$router.go(-1)"/>
</div>
 
</template>

<script>


export default {
  name:'uc-shoot',
  props:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .nav {
  width: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  /* background: pink; */
  /* border-bottom: 1px solid #e8eaec; */
  z-index: 99;
  height:0.5rem;
  /* border:2px solid pink; */
}


  
</style>
