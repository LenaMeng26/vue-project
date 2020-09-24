<template>
  <div class="index">
      <heads title="轻松阅读"/>
      <van-search class="search" v-model="value" shape="round" background="#f1f1f1" placeholder="请输入搜索关键词"/>
      <uc-banner :swpList="swpList"/>
      <book-list/>
      
       <div class="uc-blist">
         <router-link :class="activeFlag"  to="/author" tag="li" @click.native="changes">
            <van-icon name="newspaper-o" />
            <span > 热门作家</span>
         </router-link>
          <router-link  to="/activity" tag="li" active-class="active" @click.native="change">
           <span> 活动专栏</span>
         </router-link>
         <router-link to="/free" tag="li" active-class="active" @click.native="change">
          <span> 免费专栏</span>
         </router-link>
      </div>
     
         <router-view class="auth"></router-view>
      
       
        <!-- <Author class="auth" v-if="bl" /> -->
      
      <foots/>
  </div>
</template>

<script>

import Heads from '../pages/part/head'
import Foots from '../pages/part/foot'
import UcBanner from '../components/uc-banner/uc-banner.vue'
import BookList from '../pages/part/column'
import BNav from '../components/uc-bnav/uc-bnav'
import Author from '../pages/part/author'

import axios from 'axios'

export default {
  name: 'indexs',
  components:{
    Heads,Foots,UcBanner,BookList,BNav,Author
  },
  data(){
    return{
      value:'',
      swpList:[],
      bl:true,
      activeFlag: 'active',
     
    }
    
  },
  mounted(){
    axios({
      url:'/api/banner',
      headers:{token:'1234567890123456'}
    }).then(res=>{
      // console.log(res.data.data)
      this.swpList=res.data.data;
    })
  },
  methods:{
    change(){
      // console.log(1111);
      this.bl="";
      this.activeFlag = ''
    },
     changes(){
      // console.log(1111);
      this.activeFlag = 'active'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search{
      margin-top:0.9rem;
    }
    .auth{
      margin-bottom:1rem;
    }
.uc-blist {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
li {
    transition: all 0.2s ease-in-out;
    line-height: 1rem;
    font-size: 0.28rem;
    color: black;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
}
span {
  display: inline-block;
  font-size: 0.28rem;
  margin-right: 0.1rem;
}
.active{
    font-size: 0.31rem;
    color: #801872;
}

</style>
