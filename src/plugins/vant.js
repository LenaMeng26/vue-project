import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import vant from 'vant';
import 'vant/lib/index.css'
Vue.use(vant);

// 评分
import { Rate } from 'vant';
Vue.use(Rate);

// 底部导航栏
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);


// 搜索框
import Search from 'vant';
Vue.use(Search);


// 弹出框
import { Overlay } from 'vant';
Vue.use(Overlay);
