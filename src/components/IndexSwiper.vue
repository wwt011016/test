<template>
  <div class="swiper-container wwt-swiper"
       id="mySwiper">
    <div class="swiper-wrapper start">
      <div class="swiper-slide next"
           v-for="(carousel, index) in banner"
           :key="index">
        <img :src="require(`../assets/${carousel.img}`)" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination idot"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
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
      banner: '',
    }
  },
  methods: {
    // 轮播图区域
    swiper() {
      axios({
        method: 'get',
        url: 'http://localhost:3001/get_swiper',
      }).then((data) => {
        this.banner = data.data
        // console.log(data)
      })
    },
  },
  created() {},
  mounted() {
    this.swiper()
  },
  watch: {
    // 轮播图区域
    banner: {
      handler(newBanner, oldBanner) {
        //只能监听到轮播图数据已经有了，但是v-for动态渲染结构我们还是没有办法确定的，因此还是需要用nextTick
        //nextTick:  在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
        this.$nextTick(() => {
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              //点击小球的时候也切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            observer: true,
            observeParents: true,
          })
        })
      },
      //立即监听：不管你数据有没有变化，立即监听一次
      immediate: true,
    },
  },
}
</script>

<style lang='less' scoped>

</style>
