<template>
  <!-- 注册成功 -->
  <div class="register-code">
    <div class="code">
      <img src="../assets/img/login-img/e23d2a874ae8965cde791d29486ff7f.png"
           alt="">
      <div class="code-cen">
        <p>BOJO****6</p>
        <p>该手机号已成功注册BOJO账号</p>
      </div>
      <button class="button" @click="login_btn">注册成功！立即登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    login_btn () {
      this.$router.replace({
        path: '/login'
      })
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang='less' scoped>
// 注册成功
.register-code {
  .code {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 2rem;
    }
    .code-cen {
      margin-top: 0.4rem;
      text-align: center;
      p {
        padding: 0.2rem 0;
        font-size: 0.3rem;
        color: #2e2d2d;
      }
    }
    .button {
      border: 0;
      border-radius: 0.3rem;
      padding: 0.2rem 1.6rem;
      margin-top: 0.5rem;
      font-size: 0.28rem;
      font-weight: 700;
      color: #fff;
      background-image: linear-gradient(90deg, #f10000, #ff2000 73%, #ff4f18);
    }
  }
}
</style>
