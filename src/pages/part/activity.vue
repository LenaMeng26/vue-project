<template>
  <div class="cells" >
    <ul>
      <li v-if="bl">
          <div class="single"   v-for="(item, index) in list" :key="index">
            <img style="width:100%" :src="item.banner" alt="" />
            <p class="titles">{{ item.title }}</p>
            <p class=" auth">{{ item.content }}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Cells",

  data() {
    return {
      list: [],
      bl:true
    };
  },
  mounted() {
    axios({
      url: "/api/banner",
      headers:{token:'1234567890123456'},
      params:{
        _limit:3,_page:1
      }
    }).then((res) => {
      // console.log(res.data.data.image);
      this.list = res.data.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
  width: 95vw;
  margin: 0 auto;
   margin-bottom: 1.1rem;
}
.single {
  margin-bottom: 0.3rem;
  background: #fff;
  padding: 0.15rem;
  
}
.imgs {
  display: block;
  margin: 0.5rem auto;
  height: 2.4rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 20px 1px #ccc;
}

.auth {
  text-align: center;
  color: #4c7a7d;
  margin: 0.3rem auto;
}

.titles {
  color: black;
  text-align: center;
  font-size: 0.38rem;
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
}

</style>
