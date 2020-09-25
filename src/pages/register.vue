<template>
  <div class="login">
    <uc-nav class="nav"/>
    <heads class="heads" title="注册" />
    <uc-input class="uc-input" v-model="username" type="text" label="用户名" placeholder="3位以上字母组成"/> 
    <uc-input class="uc-input" v-model="password" type="password" label="密码" placeholder="6-8位密码"/>
      <uc-input class="uc-input" v-model=" mPassword" type="password" label="确认密码" placeholder="再次输入密码"/>
    <uc-button class="uc-button" @click.native="reg" text="注册" bgColor="#89ccff" ftColor="#fff"  fSize="24px" txt="已有账号"/>
  </div>
</template>

<script>

import Heads from '../pages/part/head'
import UcNav from '../components/uc-nav/uc-nav'
import UcInput from '../components/uc-input/uc-input.vue'
import UcButton from '../components/uc-button/uc-button'
import axios from 'axios'

export default {
  name: 'reg',
  components:{
      Heads,UcNav,UcInput,UcButton
  },
  data(){
      return{
          username:'',
          password:'',
          mPassword:'',
          msg:''
      }
  },
  methods:{
    reg(){
       axios({
         url:'http://47.103.47.65:9001/api/reg',
          method:'post',
          data:{
            username:this.username,
            password:this.password
          }
       }).then(
         res=>{
            if(res.data.err===0){
              alert('注册成功!')
              //种local  跳转到之前
              this.$router.push('/login')
            }else{
              this.msg = res.data.msg
              alert('注册失败!')
            }
         }
       )
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
       top:1rem;
       left:0.75rem;
       margin-bottom: 0.3rem;
      font-size:15px;
  }
  .uc-button{
       position: relative;
       top:1.5rem;
       left:0.5rem;
  }
  
</style>
