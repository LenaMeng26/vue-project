<template>
  <div class="uc-button">
    <!-- 调用 -->
    <div class="submit-btn"  :style="{background:bgColor,color:ftColor,fontSize:fSize}" @click="$emit('clicks',$event)">
      <template v-if="text!=='按钮'">
          {{text}}
      </template>
      <slot v-if="text==='按钮'">按钮</slot>
     </div>
     <span class="txt">{{txt}}</span>
  </div>
</template>

<script>
export default {
  name: "uc-button",
  props: {
    // 这里的属性名要和父类一致,
    text: {
      // 接收的条件
      type: String,
      default: "按 钮",
    },
    bgColor: {
      type: String,
      default: "pink",
    },
    ftColor:{
      type:String,
      default:'black'
    },
    fSize:{
      type:String,
      default:'32px'
    },
    txt:{
      type:String,
      default:''
    }
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit-btn {
  width: 85vw;
  border-radius: 0.15rem;
  text-align: center;
  line-height: 0.7rem;
  /* font-weight: bold; */
}
.txt{
    line-height: 0.8rem;
    display: block;
    width: 85vw;
    text-align: center;
    color: #328bcf;
    font-size: 15px;
}
</style>
