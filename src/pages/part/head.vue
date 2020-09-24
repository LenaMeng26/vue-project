<template>
  <div class="head">
      {{title}}
      <span @click="jump">{{regRight}}</span>
  </div>
</template>

<script>
export default {
  name: 'heads',
  data(){
      return{
          
      }
  },
  props:{
      title:{
          type:String,
          default:''
      },
      regRight:{
           type:String,
          default:''
      }
  },
  methods:{
      jump(){
          if(this. regRight=='注册'){
              this.$router.push('/register')
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .head{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3000;
        width: 100vw;
        /* margin-bottom: 0.9rem; */
        background: #fff;
        line-height: 0.9rem;
        text-align: center;
        font-weight: bolder;
        font-size: 0.28rem;
        height: 0.8rem;
    }
    span{
        position: absolute;
        top:0rem;
        right:0.2rem;
         z-index: 3001;
        font-size: 0.26rem;
    }
</style>
