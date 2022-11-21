<template>
  <div>
    <!-- 商品分类多余区域开始-->
    <div class="classf">
      <ul class="class-list">
        <li v-for="(item,index) in classf"
            :key="index"
            @click="to_classfy(item)">
          <i class="bar"></i>
          <span>{{item}}</span>
          <i class="to-right"></i>
        </li>
      </ul>
      <div class="other">店内还有这些商品，来逛逛吧～</div>
    </div>
    <!-- 商品分类多余区域结束 -->
    <div class="classf2">
      <div class="more-goods">查看全部商品</div>
      <div class="nothing">没有更多了，去看看别的</div>
    </div>
  </div>
</template>

<script>
import '../assets/css/index.less'
export default {
  name: 'ClassfVue',
  data() {
    return {
      classf: [
        '全部宝贝',
        '沙发系列',
        '储物柜系列',
        '书桌系列',
        '电视柜系列',
        '餐桌系列',
        '梳妆台系列',
        '休闲椅系列',
      ],
    }
  },
  methods: {
    to_classfy(val) {
      if (val !== null && val !== '') {
        localStorage.setItem('classfiy_type', val)
      }
      this.$router.replace({
        path: '/classfiy',
      })
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang='less' scoped>
.index_wrapper {
  .nav {
    .list-3 {
      ul {
        margin-top: 1rem;
      }
    }
  }
}
.cla_hid {
  box-sizing: border-box;
  padding: 0 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  font-size: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  h2 {
    color: #000;
    font-size: 0.3rem;
  }
  .idot {
    span {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      background: url(../assets/img/details-img/0three\ .png) no-repeat 50%;
      background-size: 0.4rem;
    }
  }
  .back {
    span {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      background: url(../assets/img/details-img/left2.png) no-repeat;
      background-size: 0.4rem 0.4rem;
    }
  }
}
</style>
