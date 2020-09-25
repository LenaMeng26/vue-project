<template>
  <div class="uc-detail">
    <h3>推荐</h3>
    <div class="outer">
      <ul>
        <li  @click="toDetail(item.gId)" v-for="(item, index) in list" :key="index">
          <img :src="item.image" alt="">
           <p class="title">{{item.title}}</p>
           <p class="author">{{item.author}}</p>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'book-list',
  data(){
    return{
      list:[]
    }
  },
  methods:{
     toDetail(id){
      console.log(333
      );
        this.$router.push({
          name: 'detail',
          params: {
             id: id
          }
        })
    }
  },
   mounted(){
      axios({
        url:`http://47.103.47.65:9001/api/book`,
        headers:{token:'1234567890123456'}
      }).then(
        res => {this.list = res.data.data
        console.log(this.list);}
      )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-list{
  margin-left: 0.3rem;
}
  h3{
    font-weight: 600;
    line-height: 0.9rem;
    font-size: 0.28rem;
    height:0.9rem
  }
  img{
    display: block;
    width:100px;
    /* margin: 0.2rem auto; */
    /* height: 3.5rem; */
    /* border-radius: 0.2rem; */
    /* box-shadow: 0 0 20px 1px #ccc; */
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
  .outer {
    width: 375px;
    overflow: auto;
  }
  ul{
    width:1000px;
    height: 200px;
   
    /* overflow: scroll; */
  }
  li{
    padding-right: 0.5rem;
    width: 100px;
    /* overflow: hidden; */
    float: left;
  }
</style>
