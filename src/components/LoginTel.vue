<template>
  <div>
    <div class="top register-next">
      <!-- 输入用户名 邮箱 手机号区域 -->
      <div class="tel-phone">
        <div class="ipt">
          <input type="tel"
                 placeholder="用户名/邮箱/手机号"
                 v-model="tels_login">
          <div class="pic">
            <img src="../assets/img/login-img/cancel.png"
                 alt=""
                 class="cancel">
          </div>
        </div>
      </div>
      <!-- 输入密码 -->
      <div class="confirm">
        <input type="password"
               placeholder="请输入密码"
               ref="inp"
               v-model="pass_login">
        <img src="../assets/img/login-img/cancel.png"
             alt=""
             class="cancel">
        <img src="../assets/img/login-img/close.png"
             alt=""
             class="eyes"
             @click="show_pass">
        <div class="get">忘记密码</div>
      </div>
    </div>
    <div class="notice"
         ref="notice"></div>
    <!-- 登录按钮 -->
    <div class="login-btn active1"
         @click="login_btn">登录</div>

    <!-- 切换登录 -->
    <div class="account">
      <div class="psd"
           @click="to_message">账号密码登录</div>
      <div class="register speed"
           @click="rejtel">手机快速注册</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// 导入混入
import { rejtel } from '../minix'
export default {
  data () {
    return {
      type_pass: false,
      tels_login: '',
      pass_login: '',
      checked_status: ''
    }
  },
  mixins: [rejtel],
  methods: {
    to_message () {
      this.$router.replace({
        path: '/login/message'
      })
    },
    // 显示密码
    show_pass () {
      this.type_pass = !this.type_pass
      this.type_pass === false
        ? (this.$refs.inp.type = 'password')
        : (this.$refs.inp.type = 'text')
    },
    // 登录按钮点击
    login_btn () {
      const zz = /^[a-z0-9A-Z]{5,15}$/
      if (zz.test(this.tels_login.trim())) {
        const pp = /^[A-Z][a-z0-9A-Z]{5,15}$/
        if (pp.test(this.pass_login.trim())) {
          // 如果勾选了同意协议
          if (this.checked_status) {
            axios({
              method: 'post',
              url: 'http://localhost:3001/admin_login',
              data: {
                username: this.tels_login,
                password: this.pass_login
              }
            }).then((data) => {
              console.log(data)
              if (data.data.nothing === 1) {
                // 提示'用户名未注册'
                this.$refs.notice.innerHTML = '用户名未注册'
              }
              if (data.data.token) {
                this.$refs.notice.innerHTML = '恭喜你登录成功'
                // 存储token开始存入时间
                localStorage.setItem('tokenStartTime', new Date().getTime())
                // 存储token
                localStorage.setItem('token', data.data.token)

                // 这里跳转到首页
                setTimeout(() => {
                  this.$router.replace({
                    path: '/index'
                  })
                }, 2000)
              }
              if (data.data.true2 === 1) {
                // 提示密码错误
                this.$refs.notice.innerHTML = '密码错误'
                console.log('密码错误')
              }
            })
          } else {
            // 提示框出现
            this.$bus.$emit('show_choice', true)
          }
        } else {
          // 提示密码必须首字母大写且位数为4~16位
          this.$refs.notice.innerHTML = '密码必须首字母大写且位数为4'
        }
      } else {
        // 提示用户名格式不对
        this.$refs.notice.innerHTML = '用户名格式不对'
      }
    },
    get_checked (val) {
      this.checked_status = val
    }
  },
  created () {},
  mounted () {
    this.$bus.$on('send', this.get_checked)
  }
}
</script>

<style lang='stylus' scoped></style>
