<template>
  <div class="register-hidden">
    <div class="back-rej"
         @click="back_login">
      <span class="pic"></span>
      <span class="rej">京东注册</span>
    </div>
    <div class="login-wrapper">
      <div class="login">
        <div class="top js">
          <!-- 输入手机号区域 -->
          <div class="tel-phone">
            <div class="ipt">
              <input type="tel"
                     placeholder="用户名/邮箱/手机号"
                     v-model="tels"
                     @blur="show1_blur"
                     @focus="show1_focus"
                     @keyup="inps">
              <div class="pic">
                <div class="imgs2"
                     @click="cleartel">
                  <img src="../assets/img/login-img/cancel.png"
                       alt=""
                       class="cancel"
                       v-show="shows1">
                </div>
              </div>
            </div>
          </div>
          <div class="tips"
               ref="tips2"></div>
          <!-- 输入密码 -->
          <div class="confirm">
            <input type="password"
                   placeholder="请输入密码"
                   class="pas"
                   v-model="pass"
                   @blur="show2_blur"
                   @focus="show2_focus"
                   ref="inp"
                   @keyup="pass_key">
            <div @click="clearpass"
                 class="imgs">
              <img src="../assets/img/login-img/cancel.png"
                   alt=""
                   class="cancel"
                   v-show="shows2">
            </div>
            <img src="../assets/img/login-img/close.png"
                 alt=""
                 class="eyes"
                 @click="show_pass">
          </div>
          <div class="tips"
               ref="tips"></div>
          <div class="tips"
               ref="tips3"></div>
        </div>
        <div class="next current"
             @click="rej"
             ref="btns">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/css/rej.less'
import { rejtel } from '../minix'
export default {
  data () {
    return {
      tels: '',
      pass: '',
      type_pass: false,
      shows1: false,
      shows2: false,
      confirm1: false,
      confirm2: false
    }
  },
  mixins: [rejtel],
  methods: {
    // 清空账号
    cleartel () {
      this.tels = ''
      this.inps()
    },
    // 清空密码
    clearpass () {
      this.pass = ''
      this.pass_key()
    },
    // 显示密码
    show_pass () {
      this.type_pass = !this.type_pass
      this.type_pass === false ? this.$refs.inp.type = 'password' : this.$refs.inp.type = 'text'
    },
    // 叉号失去焦点  获取焦点
    show1_blur () {
      this.shows1 = false
    },
    show2_blur () {
      this.shows2 = false
    },
    show1_focus () {
      this.shows1 = true
    },
    show2_focus () {
      this.shows2 = true
    },
    // 账号要求判断
    inps () {
      const zz = /^[a-z0-9A-Z]{5,15}$/
      if (zz.test(this.tels.trim())) {
        // 符合情况
        this.$refs.tips2.innerHTML = ''
        this.confirm1 = true
      } else {
        // 提示账号不符合规范
        if (this.tels === '') {
          this.$refs.tips2.innerHTML = ''
        } else {
          this.$refs.tips2.innerHTML = '您输入的账号不符合要求'
        }
      }
    },
    // 密码要求判断
    pass_key () {
      const pp = /^[A-Z][a-z0-9A-Z]{5,15}$/
      if (pp.test(this.pass.trim())) {
        // 符合情况
        this.$refs.tips.innerHTML = ''
        this.confirm2 = true
      } else {
        // 提示密码不符合规范
        if (this.pass === '') {
          this.$refs.tips.innerHTML = ''
        } else {
          this.$refs.tips.innerHTML = '密码的首字母必须为大写且在5-15位'
        }
      }
    },
    rej () {
      if (this.confirm1 && this.confirm2) {
        // 按钮变亮  发送请求
        axios({
          method: 'post',
          url: 'http://127.0.0.1:3001/admin_login/admin_rej',
          data: {
            username: this.tels,
            password: this.pass
          }
        }).then((data) => {
          console.log(data)
          if (data.data.flag2 === 2) {
            // 登录成功 跳转到首页
            this.$router.replace({
              path: '/success'
            })
          } else if (data.data.flag2 === 1) {
            // 提示用户名已存在
            this.$refs.tips3.innerHTML = '用户名已存在'
          }
        })
      }
    },
    // 返回登录
    back_login () {
      this.$router.replace({
        path: '/login/message'
      })
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang='less' scoped>
</style>
