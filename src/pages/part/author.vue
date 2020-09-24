<template>
  <div class="cells">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="left">
          <img :src="item.image" alt=""/>
        </div>
        <div class="right">
          <h4>{{ item.author }}</h4>
          <span><van-icon name="label-o"/>{{item.sign}}</span>
          <p>作者介绍:{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "author",
  data(){
    return {
      list: [],
    };
  },
  mounted() {
    console.log(1111);
    axios({
      url: "/api/auto",
      headers: { token: "1234567890123456" },
    }).then((res) => {
   
      this.list = res.data.data;
    });
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  background: #fff;
  margin: 0 auto;
  border-bottom: 1px solid #e7e6e6;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0.15rem 0;
  /* border-bottom: 1px solid #e7e6e6; */
}
img {
  border-radius: 0.2rem;
  margin-left: 0.3rem;
  width: 1rem;
}
.right {
  flex: 1;
  height: 1.2rem;
  padding-top: 0.1rem;
  padding-left: 0.3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h4 {
  font-size: 0.23rem;
  color: black;
  font-weight: 600;
}
span {
  font-size: 0.21rem;
  color: #075579;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.19rem;
}
</style>
