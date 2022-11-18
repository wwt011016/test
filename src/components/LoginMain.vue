<template>
  <div>
    <div class="top js">
      <!-- 输入手机号区域 -->
      <div class="tel-phone">
        <p>+86</p>
        <div class="down"></div>
        <div class="ipt">
          <input type="tel"
                 placeholder="请输入手机号">
          <div class="pic">
            <img src="../assets/img/login-img/cancel.png"
                 alt=""
                 class="cancel">
          </div>
        </div>
      </div>
      <!-- 短信验证 -->
      <div class="confirm">
        <input type="text"
               placeholder="请输入收到的验证码">
        <img src="../assets/img/login-img/cancel.png"
             alt=""
             class="cancel">
        <div class="get">获取验证码</div>
      </div>
    </div>
    <!-- 登录按钮 -->
    <div class="login-btn active1">登录</div>
    <!-- 切换登录 -->
    <div class="account">
      <div class="psd"
           @click="to_tels">短信验证登录</div>
      <div class="register speed"
           @click="rejtel">手机快速注册</div>
    </div>
  </div>
</template>

<script>
// 导入混入
import { rejtel } from '../minix'
export default {
  data () {
    return {}
  },
  mixins: [rejtel],
  methods: {
    to_tels () {
      this.$router.replace({
        path: '/login/tels'
      })
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang='stylus' scoped></style>
