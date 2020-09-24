<template>
  <div class="uc-detail">
    <ul :style="{whiteSpace:whiteSpace,overflow:overflow}">
      <router-link tag="li" to="detail/1" :style="{floats:floats}"  v-for="(item, index) in list" :key="index">
        <img :src="item.image" :style="{height:height,borderRadius:bordRad,boxShadow:boxShadow}" alt="">
           <p :class="title">{{item.title}}</p>
           <p :class="author">{{item.author}}</p></router-link>
    </ul>
     
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'uc-detail',
  data(){
    return {
       list:[]
    }
  },
  mounted(){
      axios({
      url:'/api/book',
      headers:{token:'1234567890123456'}
    }).then(res=>{
      // console.log(res.data.data)
      this.list=res.data.data;
    })
  },
  props:{
    height:{
      type:String,
      default:'1.9rem'
    },
    bordRad:{
      type:String,
      default:''
    },
    boxShadow:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:'title'
    },
    author:{
      type:String,
      default:'author'
    },
    floats:{
      type:String,
      default:''
    },
    whiteSpace:{
      type:String,
      default:''
    },
    overflow:{
      type:String,
      default:''
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    display: block;
    /* margin: 0.2rem auto; */
    /* height: 3.5rem; */
    /* border-radius: 0.2rem; */
    /* box-shadow: 0 0 20px 1px #ccc; */
  }
  .tit{
    text-align: center;
    font-size: 0.38rem;
    font-weight: 600;
    margin: 0.3rem auto;
  }
  .auth{
    text-align: center;
    color: #4c7a7d;
    margin: 0.3rem auto;
  }
  .title{
    margin-top: 0.1rem;
    font-size: 0.26rem;
  }
  .author{
    font-size: 0.22rem;
    color: #a5a4a4;
    margin-top: 0.1rem;
  }
  li{
    padding-right: 0.5rem;
    display: inline-block;
    width: auto;
    overflow: hidden;
  }
</style>
