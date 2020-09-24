<template>
  <div class="foot">
    <van-tabbar  v-model="active" route >
      <van-tabbar-item   to="/author"  icon="eye-o"  >发现</van-tabbar-item>
      <van-tabbar-item   to="/bookshelf"  icon="apps-o"  >书架</van-tabbar-item>
      <van-tabbar-item   to="/user" badge="6"  icon="contact" >
        <span>我</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "foots",
  data() {
    return {
      active:'0',
      actives:'active'
    };
  },
  methods:{
    change(){
      console.log(222);
      this.activeFlag=''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.active{
  color:cornflowerblue;
}

</style>
