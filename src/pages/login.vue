<template>
  <div class="login">
    <uc-nav class="nav"/>
    <heads class="heads" title="登陆" regRight="注册"/>
    <uc-input class="uc-input" v-model="username" type="text" label="用户名" placeholder="请输入用户名"/> 
    <uc-input class="uc-input" v-model="password" type="password" label="密码" placeholder="6-8位密码"/>
    <uc-button class="uc-button" @click.native="login" text="登录" bgColor="#89ccff" ftColor="#fff"  fSize="24px" txt="忘记密码"/>
  </div>
</template>

<script>

import Heads from '../pages/part/head'
import UcNav from '../components/uc-nav/uc-nav'
import UcInput from '../components/uc-input/uc-input.vue'
import UcButton from '../components/uc-button/uc-button'
import axios from 'axios'

export default {
  name: 'login',
  components:{
      Heads,UcNav,UcInput,UcButton
  },
  data(){
      return{
          username:'',
          password:'',
          msg:""
      }
  },
  methods:{
    login(){
      console.log(111);
       axios({
      url:'http://47.103.47.65:9001/api/login',
      method:'post',
      data:{
          username:this.username,
          password:this.password
      }
    }).then(res=>{
      // console.log(res.data.data)
      if(res.data.err===0){
              //种local  跳转到之前
              window.localStorage.setItem('user',JSON.stringify(res.data));
              if(!this.$route.query.p){
                this.$router.push('/author')
              }else{
                this.$router.push(this.$route.query.p)
              }
            }else{
              this.msg = res.data.msg
              alert('登录失败,请先注册!')
              this.$router.push('/register')
            }
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .heads{
      position: relative;
  }
  .nav{
      position: absolute;
      top:0.2rem;
      left:0.2rem;
      /* margin-top:100px */
      z-index: 3001;
  }
  .uc-input{
       position: relative;
       top:1.5rem;
       left:0.75rem;
       margin-bottom: 0.3rem;
      font-size:15px;
  }
  .uc-button{
       position: relative;
       top:2rem;
       left:0.55rem;
  }
  
</style>
