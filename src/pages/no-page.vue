<template>
  <div class="no-page">
    <h3>404</h3>
    <router-link to="/index">回到首页</router-link>
  </div>
</template>

<script>
  export default {
    name:'no-page',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
  .no-page{
 margin:250px 160px;
  }
  h3{
    height:100px;
    /* height:300px;
    width:300px; */
    font-size:30px;
    /* text-align: center;
    vertical-align: middle; */
    }
</style>
