<template>
  <div class="detail">
    <uc-nav class="nav" />
    <div v-if="!value">
      <heads class="heads" regRight="加入书架" v-on:click.native="changeRed(1)" />
      <van-rate
        class="enters"
        v-model="value"
        icon="like"
        void-icon="like-o"
        :count="1"
      />
    </div>
    <div v-if="value">
      <heads class="heads" regRight="移出书架" v-on:click.native="changeGray" />
      <van-rate
        class="enters"
        v-model="value"
        icon="like"
        void-icon="like-o"
        :count="1"
        v-on:click.native="changeGray"
      />
    </div>

    <div class="uc-book" >
    <div class="single" v-for="(item,index) in detail" :key="index">
      <img class="imgs" :src="item.image" alt="" />
      <p class="titles">{{ item.title }}</p>
      <p class="auth">{{item.author}}</p>
    </div>
  </div>

    <div class="book-detail">
      <div class="book-info">
        <div class="rate-box">
          <div class="rat">
            <span class="rate">评分:</span>
            <van-rate  class="rates" :size="20"  v-model="values" :count="5" color="#ffd21e" />
          </div>
          <p class="recomment">
           <!-- <van-icon class="write"  size="20"  name="notes-o" color="#000"/> -->
            <span>353人点评</span>
            <van-icon class="write" name="arrow" size="15"/>
          </p>
        </div>
        <div class="population">
          10
          <span>万人阅读</span>
        </div>
      </div>
      <div class="book-intro">
        <p class="title">简介</p>
        <p class="content">
          所发生的积分换口味和欧维护费世界经济军军军军多付扩翁后付后二无佛无女错女女错扩所女多扩军所多扩军付多所军付绿多所
          对方那肯定是减肥老师大家斐林试剂
          <span class="more">更多</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Heads from "../pages/part/head";
import UcNav from "../components/uc-nav/uc-nav";
import UcBook from "../components/uc-book/uc-book";
import axios from 'axios'

export default {
  name: "detail",
  components: {
    Heads,
    UcNav,
    UcBook
  },
  data() {
    return {
      value: 0,
      values:0,
      detail:[],
      bId:'',
      arr:[]

    };
  },
  mounted(){
      let _id = this.$route.params.id;
      let collectionName=this.$route.name;
       this.bId=_id;
        // console.log(collectionName);
      axios({
        url:`http://47.103.47.65:9001/api/book`,
        params:{
           gId:_id
        },
        headers:{token:'1234567890123456'}
      }).then(
        res => {this.detail = res.data.data
        // console.log(this.detail[0].gId);
        }
      )
  },
  methods: {
    changeRed(bNum) {
     
      this.value = 1;

      let book = localStorage.getItem('bookId');
      if(book){
        let bId=this.bId;
        book = JSON.parse(book);
        book[bId] = 1;
        localStorage.setItem('bookId', JSON.stringify(book))
      }else{
         // 3 没有数据就新增,保存商品id和数量
      let book = { [this.bId]: bNum};
      console.log(book);
      // 3-1 转化为json进行存储
      book = JSON.stringify(book);
      localStorage.setItem('bookId', book)
      }
     

    
    
    },
    changeGray() {
      this.value = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heads {
  position: relative;
}
.nav {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  /* margin-top:100px */
  z-index: 3001;
}
.enters {
  position: absolute;
  top: 0.3rem;
  left: 4.7rem;
  z-index: 3001;
}

.book-detail {
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.4rem;
  background: #fff;
  border-radius: 0.1rem;
  height:5.3rem
}

.book-info {
  width: 100%;
  height: 1.5rem;
}

.book-info > div {
  float: left;
 
}

.rates{
  margin-left:0.1rem;

}
 .rate {
  font-size: 18px;
  font-weight: 600;
  vertical-align: middle;
  margin-top:-0.3rem
}


.recomment {
  font-size: 0.28rem;
  color: hsl(207, 53%, 47%);
  font-weight: bold;
  margin-top:0.25rem;
   margin-left:-0.1rem
}

.recomment span {
    margin-left:0.1rem;
  vertical-align: bottom;
}


.population {
 
  width:2rem;
  font-size: 0.5rem;
  font-weight: 600;
 margin-left:0.8rem
}

.population span {
  font-size: 0.26rem;
  vertical-align: middle;
  color: rgb(173, 173, 173);
}

.book-intro.title {
  font-size: 0.34rem;
  font-weight: 900;
  margin: 0.25rem 0;
}
.content {
  text-align: justify;
  text-indent: 0.5rem;
  font-size: 0.25rem;
  line-height: 0.55rem;
}
.more {
  color: rgb(57, 127, 185);
  text-decoration: underline;
}

.title{
  font-size: 0.26rem;
    font-weight: 900;
    
}

.imgs {
  display: block;
  margin: 0.5rem auto;
  height: 2.6rem;
  /* border-radius: 0.2rem; */
  box-shadow: 0 0 20px 1px #ccc;
  width:28%
}
.tit {
   margin-left:0.2rem;
  font-size: 0.24rem;
  font-weight: 600;
}
.auth {
  text-align: center;
  color: #4c7a7d;
  margin: 0.3rem auto;
  font-size: 0.26rem;
}

.titles {
  color: black;
  text-align: center;
  font-size: 0.38rem;
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
}
.dsc {
  padding: 0 0.4rem;
  color: #7c7c7c;
  line-height: 0.4rem;
}
</style>
