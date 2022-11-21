<template>
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

</template>

<script>
import axios from 'axios'
import { get_moreinfo,get_classfiy } from '../minix'
import '../assets/css/index.less'
export default {
  data() {
    return {
      moreData: '',
      more_type: true,
    }
  },
  mixins:[get_moreinfo,get_classfiy],
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
    // get_classfiy() {
    //   let classfiy_type = localStorage.getItem('classfiy_type')
    //   this.class_type = classfiy_type
    //   axios({
    //     method: 'get',
    //     url: 'http://localhost:3001/get_classfiy',
    //     params: {
    //       classfiy_type: classfiy_type,
    //     },
    //   }).then((data) => {
    //     this.moreData = data.data
    //   })
    // },
  },
  created() {},
  mounted() {
    this.get_moreinfo()
    this.get_classfiy()
  },
}
</script>

<style lang='less' scoped>
</style>
