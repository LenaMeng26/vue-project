<template>
  <div id="app">
     
     <router-view></router-view>
     <!-- <indexs /> -->
     <!-- <login/>
     <Reg/>
     <Detail  />
     <bookshelf/>
     <User/> -->
     <!-- <no-page/> -->
    
  </div>
</template>

<script>
import Indexs from '../pages/index'
import Login from '../pages/login'
import Reg from '../pages/register'
import Detail from '../pages/detail'
import Bookshelf from '../pages/bookshelf'
import User from '../pages/user'
import NoPage from '../pages/no-page'


export default {
  name: 'App',
  components: {
   Indexs,
  Login,
  Reg,
   Detail,
  Bookshelf,
  User,
  NoPage
 
  },
  data(){
    return{
       ipt2:''
    }
  },
  

}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  width: 60vw;
  text-indent: 1.2em;
}

</style>
