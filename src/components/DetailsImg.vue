<template>
  <div class="mask"
       v-show="img_show">
    <div class="img-wrap">
      <img :src="require(`../assets/${imageList}`)"
           :id="img_ids"
           ref="dd"
           @click="output">
      {{img_ids}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      img_show: false,
      img_id: '',
      imageList: 'img/index-img/0496623cbdcc2597.jpg',
    }
  },
  props: ['img_ids'],
  methods: {
    output() {
      this.img_show = !this.img_show
    },
    get_swiper() {
      // console.log(this.$attrs.img_ids);
      // console.log(this.$refs.dd.id)
      this.img_id = localStorage.getItem('img_id')
      // console.log(localStorage.getItem('img_id'));
      axios({
        method: 'get',
        url: 'http://localhost:3001/get_swiper2',
        params: {
          id: this.$refs.dd.id + 1,
        },
      }).then((data) => {
        // console.log(data.data, 'hgdhjgfd')
        // console.log(data.data[0].img)
        this.imageList = data.data[0].img
      })
    },
  },
  created() {},
  mounted() {
    this.get_swiper()
  },
}
</script>

<style lang='less' scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  z-index: 1000;
  img {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    z-index: 1000;
  }
}
</style>
