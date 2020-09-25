<template>
  <div class="free">
    <ul>
      <li class="uc-cell"  @click="toDetail(item.gId)" v-for="(item,index) in list" :key="index"> 
         <div class="left"> 
            <img :src="item.image" alt="">
        </div>
        <div class="right">
            <h4>{{item.title}}</h4>
            <span>{{item.author}}</span>
           <p>简介:{{item.content}}</p>
        </div>
      </li>
       <!-- <router-link tag="li" to="/detail/1"> <uc-free/></router-link>
        <router-link tag="li" to="/detail/1"> <uc-free/></router-link> -->
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'free',
   data(){
    return {
      list: [],
    };
  },
  mounted() {
    axios({
      url: "http://47.103.47.65:9001/api/book",
      headers: { token: "1234567890123456" },
    }).then((res) => {
    //   console.log(res.data.data);
      this.list = res.data.data;
    });
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    background: #fff;
    width: 95vw;
    margin: 0 auto;
    padding:0 0.15rem;
    /* margin-bottom: 0.3rem; */
    border-bottom: 1.5px solid #e7e6e6;
    /* padding-bottom: 0.1rem; */
  }
  .uc-cell{
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0.15rem 0;
    /* border-bottom: 1px solid #e7e6e6; */
    background: white;
}
img{
      border-radius: 0.2rem;
    margin-left: 0.3rem;
    width: 1rem;
}
.right{
    flex: 1;
    height: 1.2rem;
    padding-top:0.1rem;
    padding-left: 0.3rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
}
h4{
    font-size: 0.23rem;
    color: black;
    font-weight: 600;
  
}
span{
   font-size: 0.21rem;
  color: #075579;
}
p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:0.19rem
}
</style>
