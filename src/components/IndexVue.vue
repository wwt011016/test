<template>
  <!-- 首页 -->
  <div class="index_wrapper"
       id="app">
    <!-- 背景图定位区域开始 -->
    <div class="bgc">
      <div class="cover"></div>
      <i class="pic"></i>
      <div class="shaodw"></div>
      <!-- <i class="pic two"></i>
        <div class="shaodw2"></div> -->
    </div>
    <!-- 背景图定位区域结束 -->

    <!-- 顶部区域开始 -->
    <div class="top-title">
      <!-- 头部搜索框 -->
      <div class="search">
        <i class="search-pic"></i>
        <input type="text"
               value="搜本店" />
        <span class="idot"></span>
      </div>

      <!-- logo整体区域 -->
      <div class="logo">
        <div class="logo-pic">
          <img src="../assets/img/index-img/6c1d5a8e7bcd9d81.png.png"
               alt="" />
        </div>
        <div class="logo-title">
          <div class="top">
            <h2>BOJO家具旗舰店</h2>
            <i class="card"></i>
            <i class="to_right"></i>
          </div>
          <div class="bottom">
            <div class="star">
              <i class="one"></i>
              <i class="two"></i>
              <i class="three"></i>
              <i class="four"></i>
              <i class="five"></i>
            </div>
            <span>10.8</span>万人关注
          </div>
        </div>
        <div class="love"></div>
      </div>
    </div>
    <!-- 顶部区域结束 -->

    <!-- 导航区域开始 -->
    <div class="nav"
         :class="whether ? 'isFixed' : ''"
         :style="{ backgroundImage: `url(${bgc_imgUrl})` }">
      <div class="list">
        <ul>
          <li class="select_nice"
              :class="bottom_border1 ? 'next' : ''"
              @click="beauty">
            <router-link to="/index/beauty">精选</router-link><span></span>
          </li>
          <li class="goods"
              :class="bottom_border2 ? 'next' : ''"
              @click="to_goods">
            <router-link to="/index/goods">商品</router-link><span></span>
          </li>
          <li class="pic"
              @click="festival">
            <router-link to="/index/festival">家具</router-link>
          </li>
          <li>活动<span></span></li>
          <li>上新<span></span></li>
        </ul>
      </div>
      <div class="list-2">
        <ul>
          <li>推荐<i class="to-down"></i></li>
          <li>销量</li>
          <li>价格<i class="up-down"></i></li>
          <li>上新</li>
          <li><span class="three-idot"></span></li>
        </ul>
      </div>
      <div class="list-3"
           v-show="nav_show">
        <ul @click="sendinfo($event)">
          <li class="int"
              :class=" isActive === 'adc' ? 'active' : ''"
              id="adc">推荐<i class="to-down"></i></li>
          <li class="sale"
              id="sale"
              :class=" isActive === 'sale' ? 'active' : ''">销量</li>
          <li class="pri"
              id="price"
              :class=" isActive === 'price'  ? 'active' : ''">价格<i class="up-down"></i></li>
          <li class="new"
              id="news"
              :class=" isActive === 'news' ? 'active' : ''">上新</li>
          <li><i class="myself"></i><span class="three-idot"
                  @click="change_type"></span></li>
        </ul>
      </div>
    </div>
    <!-- 导航区域结束 -->

    <!-- <IndexMain></IndexMain> -->
    <!-- 中间部分路由显示区域 -->
    <router-view></router-view>
    <!-- 推荐区域开始 -->
    <div class="advice"
         :class="nav_show ? 'hid' : ''"
         v-show="advice_show">
      <ul @click="sendinfo($event)">
        <li class=""
            :class=" isActive == 'adc' ? 'active' : ''"
            id="adc">推荐</li>
        <li id="sale"
            :class=" isActive == 'sale' ? 'active' : ''">销量</li>
        <li id="news"
            :class=" isActive == 'news'  ? 'active' : ''">新品</li>
        <li id="price"
            :class=" isActive == 'price' ? 'active' : ''">
          价格
          <i class="top-bottom"></i>
        </li>
      </ul>
    </div>
    <!-- 推荐区域结束 -->
    <!-- <MoreGoods></MoreGoods> -->
    <!-- 更多介绍区域开始 -->
    <div :class="more_type ? 'more' : 'more2'">
      <ul>
        <li v-for="(item, index) in moreData"
            :key="item.id">
          <div class="pic">
            <img :src="require(`../assets/${moreData[index].img}`)"
                 alt="" />
          </div>
          <div class="right_text">
            <div class="text">
              <p>
                <span :class="moreData[index].hot === 3 ? 'new_goods' : moreData[index].hot === 2 ? 'hot' : 'none'">热销</span>
                <span class="
                      introduce">{{ moreData[index].title }}</span>
              </p>
            </div>
            <div class="price">
              <i>￥</i><span>{{ moreData[index].price }}<i>00</i></span>
              <span class="poor">{{ moreData[index].discount }}</span>
            </div>
            <div class="nice">
              <p>
                <span>{{ moreData[index].evaluate }}</span>评价
                <span>{{ moreData[index].pra_rate }}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 更多介绍区域结束 -->

    <!-- mask遮罩层区域 -->
    <div class="mask unique">
      <div class="tri"></div>
      <div class="nav-list">
        <ul class="list-hidden">
          <li>
            <i class="one"></i>
            <span>首页</span>
          </li>
          <li>
            <i class="two"></i>
            <span>分类搜索</span>
          </li>
          <li>
            <i class="three"></i>
            <span>购物车</span>
          </li>
          <li>
            <i class="four"></i>
            <span>我的京东</span>
          </li>
          <li>
            <i class="five"></i>
            <span>浏览记录</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部区域开始 -->
    <div class="footer">
      <ul class="list">
        <li class="index">
          <img src="../assets/img/index-img/index.png"
               alt=""
               ref="img1">
          <p @click="beauty(1)">
            <router-link to="/index/beauty"
                         :class="count_num === 1 ? 'current' : ''">首页</router-link>
          </p>
        </li>
        <li class="all">
          <img src="../assets/img/index-img/shopping.png"
               alt=""
               ref="img2">
          <p @click="all_goods(2)">
            <router-link to="/index/goods"
                         :class="count_num === 2 ? 'current' : ''">全部商品</router-link>
          </p>
        </li>
        <li class="classf3"
            @click="classfiy(3)">
          <img src="../assets/img/index-img/classification.png"
               alt=""
               ref="img3">
          <p>
            <router-link to="/index/classfiy"
                         :class="count_num === 3 ? 'current' : ''">商品分类</router-link>
          </p>
        </li>
        <li class="my_order">
          <img src="../assets/img/index-img/user.png"
               alt="">
          <p>我的订单</p>
        </li>
        <li>
          <img src="../assets/img/index-img/service.png"
               alt="">
          <p>客服</p>
        </li>
      </ul>
    </div>
    <!-- 底部区域结束 -->
    <!-- 返回顶部 -->
    <div :class="whether ? 'back_top' : ''"
         @click="back_top"></div>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/css/index.less'
import { get_moreinfo } from '../minix'
// import MoreGoods from '../components/MoreGoods.vue'
export default {
  data() {
    return {
      moreData: '',
      isActive: '',
      whether: '',
      bgc_imgUrl: '',
      nav_show: false,
      advice_show: true,
      list2: false,
      more_type: true,
      bottom_border1: true,
      bottom_border2: false,
      count_num: 1,
    }
  },
  // components:{MoreGoods},
  mixins: [get_moreinfo],
  methods: {
    // 获取更多区域中的所有信息
    // get_moreinfo() {
    //   axios({
    //     method: 'get',
    //     url: 'http://localhost:3001/get_moreinfo',
    //   }).then((data) => {
    //     this.moreData = data.data
    //   })
    // },
    // 推荐等点击事件
    sendinfo(e) {
      this.isActive = e.target.id
      axios({
        method: 'post',
        url: 'http://localhost:3001/sort',
        data: {
          choice: e.target.id,
        },
      }).then((data) => {
        this.moreData = data.data
      })
    },
    // 监听顶部滚动事件
    handleScroll() {
      //计算滚动条位置
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      //计算绑定div位置
      var navs = document.querySelector('.index_wrapper .nav')
      let navs_top = navs.offsetTop
      //进行比较设置位置fixed
      this.whether = scrollTop > navs_top
      if (this.whether) {
        this.bgc_imgUrl = require('../assets/img/index-img/sofa.jpg')
      } else {
        this.bgc_imgUrl = ''
      }
    },
    // 顶部路由跳转  商品
    to_goods() {
      this.nav_show = true
      this.bottom_border1 = false
      this.bottom_border2 = true
    },
    // 顶部 底部 路由跳转  精选
    beauty() {
      this.advice_show = true
      this.nav_show = false
      this.bottom_border1 = true
      this.bottom_border2 = false
      this.count_num = 1
      this.$refs.img1.src = require('../assets/img/index-img/index.png')
      this.$refs.img2.src = require('../assets/img/index-img/shopping.png')
      this.$refs.img3.src = require('../assets/img/index-img/classification.png')
    },
    // 底部全部商品点击事件
    all_goods() {
      this.nav_show = true
      this.count_num = 2
      this.$refs.img1.src = require('../assets/img/index-img/hone.png')
      this.$refs.img2.src = require('../assets/img/index-img/shoppping2.png')
      this.$refs.img3.src = require('../assets/img/index-img/classification.png')
    },
    // 底部分类点击事件
    classfiy() {
      this.advice_show = false
      this.nav_show = false
      this.count_num = 3
      this.$refs.img1.src = require('../assets/img/index-img/hone.png')
      this.$refs.img2.src = require('../assets/img/index-img/shopping.png')
      this.$refs.img3.src = require('../assets/img/index-img/classf2.png')
    },
    // 顶部点击家具事件
    festival() {
      this.nav_show = false
    },
    // 返回顶部点击事件
    back_top() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    // 点击切换布局样式
    change_type() {
      this.more_type = !this.more_type
    },
  },
  created() {},
  mounted() {
    // 进入之后获取更多区域中所有信息
    this.get_moreinfo()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    // 取消监听
    window.removeEventListener('scroll',this.handleScroll)
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style lang="less" scoped>
.new_goods,
.none {
  display: inline-block;
  margin-bottom: -0.4rem;
  padding: 0 0.1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #fff;
  text-align: center;
  font-size: 0.2rem;
  border-radius: 0.2rem;
  background-color: green;
}
.none {
  background-color: transparent;
}
.hid {
  display: none;
}
.poor {
  margin-left: 0.3rem;
}
</style>
