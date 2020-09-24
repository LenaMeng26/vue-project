<template>
  <div class="user">
    <van-icon class="nav" name="setting-o" size="0.3rem" @click="logOut" />
    <heads class="heads" :title="username" ></heads>
    <div class="uImg">
        <img :src="$route.query.user.data.icon" alt="">
    </div>
    <div class="info">
        <a href="#">
            <p class="left">
                <van-icon name="more-o"  color="#26a2ff"  size="0.35rem"/>
                <span>信息</span>
            </p>
            <span class="right">{{$route.query.user.data.msgNum}}</span>
        </a>
         <a href="#">
            <p class="left">
                <van-icon name="award"  color="#6FDC66"  size="0.35rem"/>
                <span>好友排名</span>
            </p>
            <div class="rig">
                第 <span>{{$route.query.user.data.friNum}}&nbsp;</span>名
            </div>
          
        </a>
         <a href="#">
            <p class="left">
                <van-icon name="like"  color="#FB5252"  size="0.35rem"/>
                <span>关注</span>
            </p>
          <div  class="rig">
                <span>{{$route.query.user.data.friNums}}&nbsp;</span>人关注我
            </div>
        </a>
    </div>
    <foots />
  </div>
</template>

<script>
import Heads from "../pages/part/head"
import Foots from '../pages/part/foot'
import axios from 'axios'

export default {
  name: "user",
  components: {
    Foots,Heads
  },
  data(){
      return{
          username:`${this.$route.query.user.data.userName}上线了`
      }
  },
  beforeRouteEnter(to,from,next){
      axios({
        url:'/api/user',
        headers:{token:'1234567890123456'}
      }).then(
        // res => res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next('/login')
        res => {
          console.log(555);
         console.log(res);
          if(res.data.err === 0) {
            to.query.user = res.data
            next()
          }else{
            next('/login')
          }
        }
      )
    },
    methods:{
      logOut(){
        confirm('是否退出登录?')
         window.localStorage.removeItem('user');
        this.$router.push('/login')
      }
    }
  //  beforeRouteEnter(to,from,next){
  //     axios({
  //       url:'/api/user',
  //        headers:{token:'1234567890123456'}
  //     }).then(
  //       // res => res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next('/login')
  //       res => {
  //         if(res.data.err === 0) {
  //           to.query.user = res.data.data
  //           next()
  //         }else{
  //           next('/login')
  //         }
  //       }
  //     )
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .heads{
      position: relative;
      /* margin-bottom:0.55rem; */
  }
  .nav{
      position: absolute;
      top:0.28rem;
      right:0.2rem;
      /* margin-top:100px */
      z-index: 3001;
  }
  .uImg{
    width: 100vw;
    background: #fff;
    padding: 0.5rem 0;
  }
  img{
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0 auto;
    background: #1b405c;
  }
  .info{
    padding-top: 0.25rem;
    background: #fff;
  }
  a{
    color: black;
    font-size: 0.35rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
     border-bottom: 1px solid rgb(236, 231, 231);
  }
  .left{
    color: black;
    font-size: 0.26rem;
    line-height: 1rem;
    width: 30vw;
  }
  .left span{
      margin-left:0.2rem;
  }

  .right{
    display: inline-block;
    border-radius:20px;
    font-size: 12px;
    padding: 2px 6px;
    background-color: #f44336;
    color: #fff;
    height:0.3rem;
    line-height: 0.35rem;
  }

  .rig{
      font-size: 16px;
  }
  .rig span{
      font-size: 18px;
      font-weight: 600;
  }
</style>
