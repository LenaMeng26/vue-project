<template>
  <div class="bookshelf">
     <uc-nav class="nav"/>
    <heads class="heads" title="书架" regRight="编辑"/>
     <uc-book
      tit="tit"
      width="25%"
      class="book"
      dsc="dsc"
    />
    <foots/>
  </div>
</template>

<script>

import UcBook from '../components/uc-book/uc-book'
import Heads from  '../pages/part/head'
import Foots from  '../pages/part/foot'
import UcNav from '../components/uc-nav/uc-nav'
export default {
  name: 'bookshelf',
  components:{
      UcBook,Heads,Foots,UcNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .heads{
      position: relative;
  }
  .nav{
      position: absolute;
      top:0.2rem;
      left:0.2rem;
      /* margin-top:100px */
      z-index: 3001;
  }
  .book{
    margin:0.3rem;
  }
</style>
