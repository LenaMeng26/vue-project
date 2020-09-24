<template>
  <div class="uc-book" >
    <div class="single" v-for="(item,index) in list" :key="index">
      <img :class="{imgs:imgs}" :style="{width:width}" :src="item.image" alt="" />
      <p :class="{titles:titles,tit:tit}">{{ item.title }}</p>
      <p :class="{auth:auth,dsc:dsc}">{{item.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "uc-book",
  data(){
    return{
      list:[],

    }
  },
  mounted() {
    axios({
      url: "/api/book_one",
      headers: { token: "1234567890123456" },
    }).then((res) => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  props: {
    width: {
      type: String,
      default: "",
    },
    tit: {
      type: String,
      default: "",
    },
    auth: {
      type: String,
      default: "",
    },
    imgs: {
      type: String,
      default: "",
    },
    titles: {
      type: String,
      default: "",
    },
    dsc: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imgs {
  display: block;
  margin: 0.5rem auto;
  height: 2.6rem;
  /* border-radius: 0.2rem; */
  box-shadow: 0 0 20px 1px #ccc;
}
.tit {
   margin-left:0.2rem;
  font-size: 0.24rem;
  font-weight: 600;
}
.auth {
  text-align: center;
  color: #4c7a7d;
  margin: 0.3rem auto;
  font-size: 0.26rem;
}

.titles {
  color: black;
  text-align: center;
  font-size: 0.38rem;
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
}
.dsc {
  padding: 0 0.4rem;
  color: #7c7c7c;
  line-height: 0.4rem;
}
</style>
