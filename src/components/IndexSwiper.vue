<template>
  <div class="swiper-container wwt-swiper"
       ref="swiper">
    <!-- 轮播图容器 -->
    <div class="swiper-wrapper start">
      <!-- 轮播图 -->
      <div class="swiper-slide next"
           v-for="(img, index) in imageList"
           :key="index"
           :id="img.id"
           @click="$emit('into_detail',img.id)">
        <!-- <slot :img="img"> -->
          <img :src="require(`../assets/${img.img}`)"
               :alt="img.imgName" />
        <!-- </slot> -->
      </div>
    </div>
    <!-- 左右箭头 -->
    <!-- <div class="swiper-button-next"></div> -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- 小圆点 -->
    <div class="swiper-pagination idot"></div>
  </div>
</template>


<script>
import axios from 'axios'
import Swiper from 'swiper'
import '../assets/css/swiper.min.css'
import '../assets/js/swiper.min.js'
export default {
  name: 'IndexSwiper',
  data() {
    return {
      imageList: '',
      isInit: false,
    }
  },
  methods: {
    // 轮播图区域
    swiper() {
      axios({
        method: 'get',
        url: 'http://localhost:3001/get_swiper',
      }).then((data) => {
        this.imageList = data.data
      })
    },
    into_detail(val) {
      this.$router.replace({
        path: '/details',
        query: {
          val: val,
        },
      })
    },
  },
  created() {},
  mounted() {
    this.swiper()
    // console.log(this.$attrs);
  },
  watch: {
    // 等imageList值发生变化才会调用
    // 值发生变化就说明数据回来了
    imageList: {
      handler(imageList) {
        // 让第一个轮播图第一次不要new Swiper
        if (!imageList.length || this.isInit) return
        this.isInit = true
        // Vue响应式更新是异步更新，导致触发watch的时候，数据还未渲染成DOM元素
        // DOM元素还未生成
        // 等DOM渲染好才会触发
        this.$nextTick(() => {
          const mySwiper = new Swiper(this.$refs.swiper, {
            // 左右箭头
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // 小圆点
            pagination: {
              el: '.swiper-pagination',
            },
            // 自动轮播
            autoplay: {
              delay: 2000, // 自动轮播的时间
              disableOnInteraction: false, // 用户操作完轮播图后，再次开启自动轮播
            },
            // 无缝轮播
            loop: true,
          })
          mySwiper.el.onmouseenter = () => {           
            mySwiper.autoplay.stop()
          }
          mySwiper.el.onmouseleave = () => {
            mySwiper.autoplay.start()
          }
        })
      },
      // 解决floor组件轮播图失效
      immediate: true,
    },
  },
}
</script>

<style lang='less' scoped>
</style>
