<template>
  <div>
    <!-- 轮播图区域开始 -->
    <div class="box">
      <IndexSwiper></IndexSwiper>
    </div>
    <!-- 轮播图区域结束 -->

    <!-- 图片区域开始 -->
    <div class="banner">
      <!-- <img src="../assets/img/goods/4152af28442ef8e4.jpg!q70.dpg.webp"
             alt=""> -->
      <img src="../assets/img/index-img/sceckill.jpg"
           alt="" />
      <img src="../assets/img/index-img/0ae03258bcf3b29f.jpg"
           alt="" />

      <div class="click">
        <img src="../assets/img/index-img/891842d8fa7d7d41.jpg"
             alt=""
             id="10" />
        <img src="../assets/img/index-img/download.jpg"
             alt=""
             id="7" />
        <img src="../assets/img/goods/97f5af4990212fc1.jpg"
             alt=""
             id="9" />
        <img src="../assets/img/goods/18a7e5f254d4e8ad.jpg"
             alt=""
             id="5" />
        <img src="../assets/img/index-img/e1d03b540cd99951.jpg"
             alt=""
             id="1" />
      </div>

      <div class="classfiy_pic">
        <img src="../assets/img/index-img/e9fe3b5b0ec4b752.jpg"
             alt="" />
        <ul class="hidden_mask">
          <li>沙发系列</li>
          <li>储物柜系列</li>
          <li>书桌系列</li>
        </ul>
      </div>
      <div class="banner-1">
        <img src="../assets/img/index-img/0496623cbdcc2597.jpg"
             alt=""
             class="img_rad_top" />
        <img src="../assets/img/index-img/sceckill.jpg"
             alt="" />
        <img src="../assets/img/index-img/3a46fb639bc2b80e.jpg"
             alt="" />
        <img src="../assets/img/index-img/0ae03258bcf3b29f.jpg"
             alt=""
             class="img_rad_bot" />
      </div>
      <div class="banner-2">
        <img src="../assets/img/index-img/891842d8fa7d7d41.jpg"
             alt=""
             id="10" />
      </div>
      <div class="banner-3">
        <img src="../assets/img/index-img/download.jpg"
             alt=""
             id="7" />
      </div>
      <div class="banner-4">
        <img src="../assets/img/goods/97f5af4990212fc1.jpg"
             alt=""
             id="9" />
      </div>
      <div class="banner-5">
        <img src="../assets/img/index-img/86e3db8c281ff0a7.jpg"
             alt="" />
        <img src="../assets/img/goods/10e807f9813f082f.jpg"
             alt="" />
      </div>
      <div class="banner-6">
        <img src="../assets/img/index-img/2b170261aedfc10c.jpg"
             alt="" />
      </div>
      <div class="banner-7">
        <img src="../assets/img/index-img/e1d03b540cd99951.jpg"
             alt="" />
      </div>
      <div class="banner-8">
        <img src="../assets/img/index-img/e9fe3b5b0ec4b752.jpg"
             alt="" />
      </div>

      <!-- 轮播图区域开始 -->
      <div class="box">
        <div class="swiper-container wwt-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/img/index-img/2986057a56adeea5.jpg"
                   alt="" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/index-img/a8ed1d3dc1ecaacd.jpg"
                   alt="" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination idot"></div>
        </div>
      </div>
      <!-- 轮播图区域结束 -->

      <img src="../assets/img/index-img/2cfc371a1b3c15e7.jpg"
           alt="" />
      <img src="../assets/img/index-img/369e58fea185a2f0.jpg"
           alt="" />
      <!-- <img src="../assets/img/index-img/45e38aaf1c8b37b3.jpg" alt="">
            <img src="../assets/img/index-img/eb26c30a668859b0.jpg" alt=""> -->
      <img src="../assets/img/index-img/4e2e9509c3908fdf.jpg"
           alt="" />
      <img src="../assets/img/index-img/84c9fbcf243ffdea.jpg"
           alt="" />

      <div class="banner-10">
        <img src="../assets/img/index-img/2cfc371a1b3c15e7.jpg"
             alt="" />
      </div>
      <div class="banner-11">
        <img src="../assets/img/index-img/369e58fea185a2f0.jpg"
             alt="" />
      </div>
      <div class="banner-12">
        <img src="../assets/img/index-img/45e38aaf1c8b37b3.jpg"
             alt="" />
      </div>
      <div class="banner-13">
        <img src="../assets/img/index-img/eb26c30a668859b0.jpg"
             alt="" />
      </div>
      <div class="banner-14">
        <img src="../assets/img/index-img/4e2e9509c3908fdf.jpg"
             alt="" />
      </div>
      <div class="banner-15">
        <img src="../assets/img/index-img/84c9fbcf243ffdea.jpg"
             alt="" />
      </div>
    </div>
    <!-- 图片区域结束 -->
     
  </div>

</template>

<script>
import IndexSwiper from '../components/IndexSwiper';
export default {
  name: 'IndexMain',
  data() {
    return {}
  },
  components: { IndexSwiper },
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang='stylus' scoped></style>
