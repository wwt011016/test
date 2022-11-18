window.onload = function () {
  // 登录注册js
  // 鼠标获得焦点  失去焦点
  const ipt = document.querySelector(' .ipt input')
  const ipt_img = document.querySelector(' .ipt .cancel')
  const ipt2 = document.querySelector(' .confirm input')
  const ipt_img2 = document.querySelector(' .confirm .cancel')

  // var registers = document.querySelector('.account .speed')
  var reg_hd = document.querySelector('.register-hidden')
  var war = document.querySelector('.login-wrapper')
  // var ipt_register = document.querySelector('.register-hidden .ipt input')
  // var ipt_register_c = document.querySelector('.register-hidden .ipt .cancel')
  // var nexts = document.querySelector('.register-hidden .next')
  var mask = document.querySelector('.mask')
  var agrees = document.querySelector('.mask .agree-notice')
  var dis = document.querySelector('.mask .disagree')

  ipt.onfocus = function () {
    ipt_img.style.opacity = '1'
  }
  ipt.onblur = function () {
    ipt_img.style.opacity = '0'
  }
  ipt2.onfocus = function () {
    ipt_img2.style.opacity = '1'
  }
  ipt2.onblur = function () {
    ipt_img2.style.opacity = '0'
  }

  // 点击清空内容
  ipt_img.onclick = function () {
    ipt.value = ''
  }
  ipt_img2.onclick = function () {
    ipt2.value = ''
  }

  // 点击切换登录页面
  const psd = document.querySelector('.account .psd')
  const js = document.querySelector('.login .js')
  const reg = document.querySelector('.login .register-next')
  const ag = document.querySelector('.agree-login')
  const hd = document.querySelector('.hidden')
  let flag = true
  psd.onclick = function () {
    if (flag) {
      js.style.display = 'none'
      reg.style.display = 'block'
      psd.innerHTML = '短信验证码登录'
      ag.style.display = 'none'
      hd.style.display = 'block'
      flag = false
    } else {
      js.style.display = 'block'
      reg.style.display = 'none'
      psd.innerHTML = '账号密码登录'
      ag.style.display = 'block'
      hd.style.display = 'none'
      flag = true
    }
  }

  // 切换页面之后的获得 失去焦点
  const ipt3 = document.querySelector('.register-next .ipt input')
  const ipt_img3 = document.querySelector('.register-next .ipt .cancel')
  const ipt4 = document.querySelector('.register-next .confirm input')
  const ipt_img4 = document.querySelector('.register-next .confirm .cancel')
  const username = ipt3
  const password = ipt4

  ipt3.onfocus = function () {
    ipt_img3.style.opacity = '1'
  }
  ipt3.onblur = function () {
    ipt_img3.style.opacity = '0'
  }
  ipt4.onfocus = function () {
    ipt_img4.style.opacity = '1'
  }
  ipt4.onblur = function () {
    ipt_img4.style.opacity = '0'
  }
  // 点击清空内容
  ipt_img3.onclick = function () {
    ipt3.value = ''
  }
  ipt_img4.onclick = function () {
    ipt4.value = ''
  }

  const btn_login = document.querySelector('.login .login-btn')
  const check = document.querySelector('.hidden input')
  const ch = document.querySelector('.choice')
  const nt = document.querySelector('.notice')

  // 登录的点击事件 发送axios
  btn_login.onclick = function () {
    const zz = /^[a-z0-9A-Z]{5,15}$/
    if (zz.test(username.value.trim())) {
      const pp = /^[A-Z][a-z0-9A-Z]{5,15}$/
      if (pp.test(password.value.trim())) {
        if (check.checked) {
          axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
              username: username.value,
              password: password.value
            }
          }).then((data) => {
            console.log(data)
            if (data.data.nothing == 1) {
              nt.innerHTML = '用户名未注册'
            }
            if (data.data.token) {
              nt.innerHTML = '恭喜你登录成功'

              localStorage.setItem('token', data.data.token)

              // 这里跳转到首页
              setTimeout(function () {
                window.location.href = 'http://localhost:3000/index.html'
              }, 2000)
            }
            if (data.data.true2 == 1) {
              nt.innerHTML = '密码错误'
            }
          })
        } else {
          ch.style.display = 'block'
          setTimeout(function () {
            ch.style.display = 'none'
          }, 3000)
        }
      } else {
        nt.innerHTML = '密码必须首字母大写且位数为4~16位'
      }
    } else {
      nt.innerHTML = '用户名格式不对'
    }
  }

  // 勾选协议的点击事件
  let flag2 = true
  check.onclick = function () {
    if (flag2) {
      if (ipt3.value !== '' && ipt4.value !== '') {
        btn_login.className = 'current1 login-btn'
      }
      flag2 = false

      // 勾选了同意协议之后输入账号密码达到指定要求登录按钮亮起
      const agree_hid = document.querySelector(
        '.login-wrapper .login .hidden input'
      )
      if (agree_hid.checked) {
        ipt3.onkeyup = function () {
          if (
            ipt3.value.length > 2 &&
            ipt3.value.length < 18 &&
            ipt4.value.length > 6 &&
            ipt4.value.length < 16
          ) {
            btn_login.className = 'current1 login-btn'
          }
        }
        ipt4.onkeyup = function () {
          if (
            ipt3.value.length > 2 &&
            ipt3.value.length < 18 &&
            ipt4.value.length > 6 &&
            ipt4.value.length < 16
          ) {
            btn_login.className = 'current1 login-btn'
          }
        }
      }
    } else {
      btn_login.className = 'active1 login-btn'
      flag2 = true
    }
  }


  
  // 密码显示隐藏
  const eye = document.querySelector('.register-next .confirm .eyes')
  const ipt_psd = document.querySelector('.register-next .confirm input')
  let flag1 = true
  eye.onclick = function () {
    if (flag1) {
      ipt_psd.type = 'text'
      eye.src = '../img/login-img/open1.png'
      flag1 = false
    } else {
      ipt_psd.type = 'password'
      eye.src = '../img/login-img/close.png'
      flag1 = true
    }
  }

  const registers = document.querySelector('.account .speed')
  var reg_hd = document.querySelector('.register-hidden')
  var war = document.querySelector('.login-wrapper')
  var mask = document.querySelector('.mask')
  var agrees = document.querySelector('.mask .agree-notice')
  var dis = document.querySelector('.mask .disagree')

  // 手机快速注册点击事件
  registers.onclick = function () {
    mask.style.display = 'block'
  }
  // 同意的点击事件
  agrees.onclick = function () {
    window.location.href = 'http://localhost:3000/rej.html'
  }
  // 不同意的点击事件
  dis.onclick = function () {
    mask.style.display = 'none'
  }
}
