<template>
  <div>
    <!-- 隐藏导航栏区域开始 -->
    <div class="cla_hid">
      <div class="back"
           @click="back_pre">
        <span></span>
      </div>
      <h2>{{class_type}}</h2>
      <div class="idot">
        <span></span>
      </div>
    </div>
    <!-- 隐藏导航栏区域结束 -->
    <div class="index_wrapper">
      <div class="nav">
        <div class="list-3"
             v-show="nav_show">
          <ul>
            <li class="int"
                :class=" isActive2 === index ? 'active' : ''"
                v-for="(item,index) in classf_list"
                :key="index" @click="sendinfo(item,index)">{{item}}<i class="to-down"></i></li>
            <li><i class="myself"></i><span class="three-idot"
                    @click="change_type"></span></li>
          </ul>
        </div>
        <!-- <MoreGoods></MoreGoods> -->
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/css/index.less'
import { get_moreinfo,get_classfiy } from '../minix'
// import MoreGoods from '../components/MoreGoods.vue'
export default {
  name: 'ClassifShow',
  data() {
    return {
      moreData: '',
      class_type: '',
      nav_show: true,
      isActive: '',
      isActive2 : 0,
      more_type: true,
      classf_list: ['推荐', '销量', '价格', '上新'],
    }
  },
  // 获取更多信息
  mixins:[get_moreinfo,get_classfiy],
  // components: { MoreGoods },
  methods: {
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
    sendinfo(item,index) {
      this.isActive2 = index   
      let classfiy_type = localStorage.getItem('classfiy_type')
      axios({
        method: 'post',
        url: 'http://localhost:3001/class_sort',
        data: {
          choice: item,
          classfiy_type:classfiy_type
        },
      }).then((data) => {
        this.moreData = data.data
        console.log(data);
      })
    },
    // 点击切换布局样式
    change_type() {
      this.more_type = !this.more_type
    },
    // 点击返回上一步
    back_pre() {
      this.$router.back()
    },
  },
  created() {},
  mounted() {
    this.get_moreinfo()
    this.get_classfiy()
  },
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
