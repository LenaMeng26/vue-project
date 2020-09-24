<template>
  <div class="uc-blist">
    <a href="#" class="active">
      <van-icon class="active" name="newspaper-o" />
      <span class="active"> 热门作家</span>
    </a>
    <a href="#">
      <span> 活动专栏</span>
    </a>
    <a href="#">
      <span> 免费专栏</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "uc-bnav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uc-blist {
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
a {
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
