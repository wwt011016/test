window.onload = function () {
    // 点击注册
    var reg_hd = document.querySelector('.register-hidden')
    var war = document.querySelector('.login-wrapper')
    var ipt_register = document.querySelector('.register-hidden .tel-phone .ipt input')
    var ipt_pas = document.querySelector('.register-hidden .top .confirm .pas ')
    var ipt_register_c = document.querySelector('.register-hidden .ipt .cancel')
    var ipt_register_c2 = document.querySelector('.register-hidden .top .confirm .cancel')
    var nexts = document.querySelector('.register-hidden .next')
    const eye = document.querySelector('.register-hidden .top .confirm .eyes')
    const pas = document.querySelector('.register-hidden .top .confirm .pas')
    const username = ipt_register
    const password = pas
    const tips = document.querySelector('.register-hidden .login-wrapper .top .tips')
    const rej_code = document.querySelector('.register-hidden .register-code')
    const back_pic = document.querySelector('.register-hidden .back-rej .pic')
    const back_text = document.querySelector('.register-hidden .back-rej .rej')
    const btn_l = document.querySelector('.register-hidden .register-code .button') 
    var flag = true
    eye.onclick = function () {
        if (flag) {
            pas.type = 'text'
            flag = false
        } else {
            pas.type = 'password'
            flag = true
        }

    }


    // 输入框失去焦点获得焦点
    ipt_register.onfocus = function () {
        ipt_register_c.style.opacity = '1'
    }
    ipt_register.onblur = function () {
        ipt_register_c.style.opacity = '0'
    }
    ipt_pas.onfocus = function () {
        ipt_register_c2.style.opacity = '1'
    }
    ipt_pas.onblur = function () {
        ipt_register_c2.style.opacity = '0'
    }
    ipt_register_c.onclick = function () {
        ipt_register.value = ''
        nexts.className = 'next active1'
    }
    ipt_register_c2.onclick = function () {
        ipt_pas.value = ''
        nexts.className = 'next active1'
    }

    //点击返回登录
    back_pic.onclick = function() {
        window.location.href = 'http://localhost:3000/login.html'
    }

    // 判断11位手机号
    // var flag3 = true
    nexts.className = 'next active1'
    const zz = /^[a-z0-9A-Z]{5,15}$/
    const pp = /^[A-Z][a-z0-9A-Z]{5,15}$/
    document.onkeyup = function () {
        if (pp.test(password.value.trim())) {
            nexts.className = 'next current1'
            tips.innerHTML = ''
        } else {
            nexts.className = 'next active1'
            // tips.innerHTML = '密码必须首字母大写且位数为4~16位'
        }
    }
    
    nexts.onclick = function () {
        if (zz.test(username.value.trim())) {
            document.onkeyup = function () {
                if (pp.test(password.value.trim())) {
                    nexts.className = 'next current1'
                    tips.innerHTML = ''
                } else {
                    nexts.className = 'next active1'
                    tips.innerHTML = '密码必须首字母大写且位数为4~16位'
                }
            }
            if (pp.test(password.value.trim())) {
                tips.innerHTML = ''
                // 跳转  注册成功
                // tips.innerHTML = '恭喜您，注册成功！'
                // 发送axios请求
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/login/rej',
                    data: {
                        username: username.value,
                        password: password.value,
                    }
                }).then((data) => {
                    console.log(data.data);
                    if (data.data.flag == 1) {
                        tips.innerHTML = '用户名已存在'
                    }
                    if (data.data.flag2 == 2) {
                        rej_code.style.display = 'block'
                        back_pic.style.display = 'none'
                        back_text.innerHTML = 'BOJO注册'
                        war.style.display = 'none'
                        btn_l.onclick = function() {
                            window.location.href = 'http://localhost:3000/login.html'
                        }
                    }
                })

            } else {
                nexts.className = 'next active1'
                tips.innerHTML = '密码必须首字母大写且位数为4~16位'
            }

        } else {
            nexts.className = 'next active1'
            tips.innerHTML = '您输入的用户名格式有误'
        }
    }
    /* document.onkeyup = function () {
        if (zz.test(username.value.trim())) {
            if (pp.test(password.value.trim())) {
                tips.innerHTML = ''
                nexts.className = 'next current1'
                nexts.onclick = function () {
                    // 跳转  注册成功
                    // tips.innerHTML = '恭喜您，注册成功！'
                    // 发送axios请求
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/rej',
                        data: {
                            username: username.value,
                            password: password.value,
                        }
                    }).then((data) => {
                        console.log(data.data);
                        if(data.data.flag == 1) {
                            tips.innerHTML = '用户名已存在'
                        }
                        if(data.data.flag2 == 2) {
                            tips.innerHTML = '恭喜你注册成功'
                            setTimeout(function(){
                                window.location.href = 'http://localhost:3000/login.html'
                            },2000)
                        }
                    })
                } 
            } else {
                tips.innerHTML = '密码必须首字母大写且位数为4~16位'
            }

        }
    } */

}

