<template>
  <section class="my-swiper">
    <swiper :options="swiperOption">
      <swiper-slide  class="my-swp-silde" v-for="(item, index) in swpList" :key="index" data-id="slide.id">
          <img class="my-swp-img" :src="item.banner" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> 
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "uc-banner",
  props:{
    swpList:{
        type:Array,
        required:true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 2800, // 自动切换的时间间隔（单位ms）
        },
        initialSlide: 0,
        loop: true,
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        paginationClickable: true,
      },
    };
  },
  mounted(){
    // console.log(this.swpList);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swiper {
  width: 100%;
}
.my-swp-silde{
  width:100rem;
  height:3.5rem;
}
img {
  width: 100%;
  height: 100%;
}
</style>
