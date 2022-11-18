<template>
  <div>
    <!-- 登录页面开始   大容器-->
    <div class="login-wrapper">
      <div class="back-rej">
        <span class="pic"></span>
        <span class="rej">京东登录注册</span>
      </div>
      <div class="login">
        <router-view></router-view>
        <div class="notice">
          <!-- 账号或密码不正确 -->
        </div>
        <!-- 登录方式 -->
        <div class="other">
          <div class="way">
            <div class="line-left"></div>
            <div class="text">其他登录方式</div>
            <div class="line-right"></div>
          </div>
          <div class="pic">
            <img src="../assets/img/login-img/qq.png"
                 alt="">
            <img src="../assets/img/login-img/wechat.png"
                 alt="">
            <img src="../assets/img/login-img/iphone.png"
                 alt="">
          </div>
        </div>
        <!-- 同意协议 -->
        <div class="agree agree-login">
          <input type="checkbox"
                 ref="check"
                 :checked="checked === true ? true : false"
                 @click="change">
          <span>若您输入的手机号未注册，将为您直接注册，注册即视为同意</span>
          <span><a href="javascript;:">京东用户注册协议、</a></span>
          <span><a href="javascript;:">用户隐私政策</a></span>
        </div>

        <div class="agree hidden">
          <input type="checkbox">
          <span>登录即代表您已同意</span>
          <span><a href="javascript;:">用户隐私政策</a></span>
        </div>

        <!-- 勾选协议 -->
        <div class="choice"
             v-show="choice_hid">请勾选同意协议</div>
        <!-- 勾选协议 -->
      </div>
    </div>
    <!-- 登录页面结束 -->

    <!-- 跳转注册页面时的蒙版 -->
    <div class="mask"
         v-show="isShow"
         :isShow="isShow">
      <div class="content">
        <div class="top">
          <h3>注册协议及隐私政策</h3>
          <div class="text-main">
            <p>
              在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
              <span>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，
                因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</span>
            </p>
            <p><a href="javascript;:">《京东用户注册协议》</a></p>
            <p><a href="javascript;:">《京东隐私政策》</a></p>
            <p><a href="javascript;:">《订单共享与安全》</a></p>
            <p>
              <span>【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。
                您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。
                如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，
                即表示您已充分阅读、理解并接受协议的全部内容；
                并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。
              </span>
              如您对以上协议内容有任何疑问，您可随时与京东客服联系。

            </p>
          </div>
        </div>
        <div class="bottom">
          <div class="text">
            <p>
              <span>点击同意即表示您已阅读并同意</span>
              <a href="javascript;:">《京东用户注册协议》</a>与
              <a href="javascript;:">《京东隐私政策》</a>
              <span>并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于</span>
              <a href="javascript;:">《订单共享与安全》</a>
            </p>
          </div>
        </div>
        <div class="btn-notice">
          <div class="disagree"
               @click="disagree">不同意</div>
          <div class="agree-notice"
               @click="agree">同意</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import '../assets/css/login.less'
export default {
  data () {
    return {
      isShow: false,
      checked: false,
      choice_hid: false
    }
  },
  methods: {
    // 蒙版显示隐藏
    getBus (val) {
      if (val) {
        this.isShow = !this.isShow
      }
    },
    // 去注册同意  不同意
    disagree () {
      this.isShow = !this.isShow
    },
    agree () {
      this.$router.replace({
        path: '/rej'
      })
    },
    // 传递勾选状态的方法
    send () {
      this.$bus.$emit('send', this.checked)
    },
    // 勾选协议
    change () {
      this.checked = !this.checked
      this.send()
    },
    // 勾选协议隐藏框
    show_choice (val) {
      this.choice_hid = true
      // 定时关闭隐藏框
      setTimeout(() => {
        this.choice_hid = false
      }, 2000)
    }
  },
  created () {},
  mounted () {
    this.$bus.$on('zdy', this.getBus)
    // 隐藏勾选协议
    this.$bus.$on('show_choice', this.show_choice)

    this.send()
  }
}
</script>

<style lang='stylus' scoped>
body
  background-color #fff
</style>
