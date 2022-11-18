window.onload = function () {
    // 轮播图区域
    /* var s = new Swiper('.wwt-swiper', {
        // 无缝轮播
        loop: true,
        // 自动播放ms
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // 滑动切换速度ms
        speed: 500,
        // 解决点击之后不能自动播放的小bug
        autoplayDisableOnInteraction: false,
    }) */

    // 页面滚动导航栏固定
    var navs = document.querySelector('.index_wrapper .nav')
    var navs_top
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= navs_top) {
            navs.style.position = 'fixed'
            navs.style.left = '0px'
            navs.style.top = '0px'
            navs.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'
            navs.style.backgroundSize = '100%  4.8rem'
        } else {
            navs.style.position = 'static';
            navs.style.backgroundImage = ''
        }
    })

    // 三个点点击事件
    var idots = document.querySelector('.top-title .search .idot')
    var masks = document.querySelector('.mask')
    var flag = true
    idots.onclick = function () {
        if (flag) {
            masks.style.display = 'block';
            flag = false
        } else {
            masks.style.display = 'none';
            flag = true;
        }
    }

    // 返回顶部事件
    var back_top = document.querySelector('.index_wrapper .back_top')
    var banners = document.querySelector('.banner-1')
    var banners_top = banners.offsetTop
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= banners_top) {
            back_top.style.display = 'block'
        } else {
            back_top.style.display = 'none'
        }
    })

    // 返回顶部点击事件
    back_top.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // 底部点击事件
    var lis = document.querySelectorAll('.footer .list li')
    var indexs = document.querySelector('.footer .index')
    var alls = document.querySelector('.footer .all')
    var navs1 = document.querySelector('.nav .list')
    var navs2 = document.querySelector('.nav .list-2')
    var boxs = document.querySelector('.box')
    var banner_all = document.querySelector('.banner')
    var advices = document.querySelector('.advice')


    alls.onclick = function () {
        navs1.style.display = 'none'
        navs2.style.display = 'block'
        boxs.style.display = 'none'
        banner_all.style.display = 'none'
        advices.style.display = 'none'
        classf_1.style.display = 'none'
        classf_2.style.display = 'none'
        indexs.children[1].className = ''
        indexs.children[0].src = '../img/index-img/hone.png'
        this.children[1].className = 'current'
        this.children[0].src = '../img/index-img/shoppping2.png'
        classf_3.children[1].className = ''
        classf_3.children[0].src = '../img/index-img/classification.png'
    }
    indexs.onclick = function () {
        navs1.style.display = 'block'
        navs2.style.display = 'none'
        boxs.style.display = 'block'
        classf_1.style.display = 'none'
        classf_2.style.display = 'none'
        banner_all.style.display = 'block'
        advices.style.display = 'block'
        this.children[1].className = 'current'
        this.children[0].src = '../img/index-img/index.png'
        alls.children[1].className = ''
        alls.children[0].src = '../img/index-img/shopping.png'
        classf_3.children[1].className = ''
        classf_3.children[0].src = '../img/index-img/classification.png'
    }
    var classf_2 = document.querySelector('.classf2')
    var classf_1 = document.querySelector('.classf')
    var classf_3 = document.querySelector('.classf3')
    classf_3.onclick = function () {
        navs1.style.display = 'none'
        boxs.style.display = 'none'
        banner_all.style.display = 'none'
        advices.style.display = 'none'
        classf_1.style.display = 'block'
        classf_2.style.display = 'block'
        classf_3.style.display = 'block'

        this.children[1].className = 'current'
        this.children[0].src = '../img/index-img/classf2.png'
        alls.children[1].className = ''
        alls.children[0].src = '../img/index-img/shopping.png'
        indexs.children[1].className = ''
        indexs.children[0].src = '../img/index-img/hone.png'
    }


    // 顶部导航栏点击切换
    var goods = document.querySelector('.index_wrapper .nav .list .goods')
    var select_nice = document.querySelector('.index_wrapper .nav .list .select_nice')
    var navs3 = document.querySelector('.nav .list-3')
    goods.onclick = function () {
        navs1.style.display = 'block'
        boxs.style.display = 'none'
        banner_all.style.display = 'none'
        advices.style.display = 'none'
        classf_1.style.display = 'none'
        classf_2.style.display = 'none'
        this.className = 'goods next'
        select_nice.className = 'select_nice'
        navs3.style.display = 'block'
    }

    select_nice.onclick = function () {
        // navs1.style.display = 'none'
        boxs.style.display = 'block'
        banner_all.style.display = 'block'
        advices.style.display = 'block'
        this.className = 'select_nice next'
        goods.className = 'goods'
        navs3.style.display = 'none'
    }


    // 登录注册js
    // 鼠标获得焦点  失去焦点
    var ipt = document.querySelector(' .ipt input')
    var ipt_img = document.querySelector(' .ipt .cancel')
    var ipt2 = document.querySelector(' .confirm input')
    var ipt_img2 = document.querySelector(' .confirm .cancel')

    ipt.onfocus = function () {
        ipt_img.style.opacity = '1';
    }
    ipt.onblur = function () {
        ipt_img.style.opacity = '0';
    }
    ipt2.onfocus = function () {
        ipt_img2.style.opacity = '1';
    }
    ipt2.onblur = function () {
        ipt_img2.style.opacity = '0';
    }

    // 点击清空内容
    ipt_img.onclick = function () {
        ipt.value = ''
    }
    ipt_img2.onclick = function () {
        ipt2.value = ''
    }


    // 点击切换登录页面
    var psd = document.querySelector('.account .psd')
    var js = document.querySelector('.login .js')
    var reg = document.querySelector('.login .register-next')
    var ag = document.querySelector('.agree-login')
    var hd = document.querySelector('.hidden')
    var flag = true;
    psd.onclick = function () {
        if (flag) {
            js.style.display = 'none';
            reg.style.display = 'block';
            psd.innerHTML = '短信验证码登录'
            ag.style.display = 'none'
            hd.style.display = 'block'
            flag = false;

        } else {
            js.style.display = 'block';
            reg.style.display = 'none';
            psd.innerHTML = '账号密码登录'
            ag.style.display = 'block'
            hd.style.display = 'none'
            flag = true;
        }
    }

    // 切换页面之后的获得 失去焦点  
    var ipt3 = document.querySelector('.register-next .ipt input')
    var ipt_img3 = document.querySelector('.register-next .ipt .cancel')
    var ipt4 = document.querySelector('.register-next .confirm input')
    var ipt_img4 = document.querySelector('.register-next .confirm .cancel')

    ipt3.onfocus = function () {
        ipt_img3.style.opacity = '1';
    }
    ipt3.onblur = function () {
        ipt_img3.style.opacity = '0';
    }
    ipt4.onfocus = function () {
        ipt_img4.style.opacity = '1';
    }
    ipt4.onblur = function () {
        ipt_img4.style.opacity = '0';
    }
    // 点击清空内容
    ipt_img3.onclick = function () {
        ipt3.value = ''
    }
    ipt_img4.onclick = function () {
        ipt4.value = ''
    }

    // 设定指定登录账号：a18379116456
    // 设定指定登录密码：abc123456
    var btn_login = document.querySelector('.login .login-btn')
    var check = document.querySelector('.hidden input')
    var ch = document.querySelector('.choice')
    var nt = document.querySelector('.notice')


    // 登录按钮的点击事件
    btn_login.onclick = function () {
        if ((ipt3.value.length < 2 || ipt3.value.length > 18) || (ipt4.value.length < 6 || ipt4.value.length > 16)) {
            nt.style.opacity = '1'
            if (!check.checked) {
                ch.style.display = 'block'
                setTimeout(function () {
                    ch.style.display = 'none'
                }, 3000)
            }
        } else {
            nt.style.opacity = '0'
            if (!check.checked) {
                ch.style.display = 'block'
                setTimeout(function () {
                    ch.style.display = 'none'
                }, 3000)
            }

        }

        var bodys = document.body
        var re_login = document.querySelector('.big-login-wrapper')
        var index_war = document.querySelector('.index_wrapper')
        if (ipt3.value == 'a18379116456' && ipt4.value == 'abc123456') {
            if (check.checked) {
                nt.style.opacity = '0'
                btn_login.className = 'current1 login-btn';
                // alert('登录成功！')
                // 此处需要跳转首页
                re_login.style.display = 'none'
                index_war.style.display = 'block'
                bodys.style.backgroundColor = '#f2f2f2'
                navs_top = navs.offsetTop


                var s = new Swiper('.wwt-swiper', {
                    // 无缝轮播
                    loop: true,
                    // 自动播放ms
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    // 滑动切换速度ms
                    speed: 500,
                    // 解决点击之后不能自动播放的小bug
                    autoplayDisableOnInteraction: false,
                })

            } else {
                ch.style.display = 'block'
                setTimeout(function () {
                    ch.style.display = 'none'
                }, 3000)
            }
        } else {
            nt.style.opacity = '1'
        }
    }

    // 勾选协议的点击事件
    var flag2 = true
    check.onclick = function () {
        if (flag2) {
            if (ipt3.value !== '' && ipt4.value !== '') {
                btn_login.className = 'current1 login-btn';

            }
            flag2 = false

            // 勾选了同意协议之后输入账号密码达到指定要求登录按钮亮起
            var agree_hid = document.querySelector('.login-wrapper .login .hidden input')
            if (agree_hid.checked) {
                ipt3.onkeyup = function () {
                    if ((ipt3.value.length > 2 && ipt3.value.length < 18) && (ipt4.value.length > 6 && ipt4.value.length < 16)) {
                        btn_login.className = 'current1 login-btn';
                    }
                }
                ipt4.onkeyup = function () {
                    if ((ipt3.value.length > 2 && ipt3.value.length < 18) && (ipt4.value.length > 6 && ipt4.value.length < 16)) {
                        btn_login.className = 'current1 login-btn';
                    }
                }
            }
        } else {
            btn_login.className = 'active1 login-btn';
            flag2 = true;
        }
    }

    // 密码显示隐藏
    var eye = document.querySelector('.register-next .confirm .eyes')
    var ipt_psd = document.querySelector('.register-next .confirm input')
    var flag1 = true;
    eye.onclick = function () {
        if (flag1) {
            ipt_psd.type = 'text';
            eye.src = '../img/login-img/open1.png'
            flag1 = false
        } else {
            ipt_psd.type = 'password';
            eye.src = '../img/login-img/close.png'
            flag1 = true
        }

    }

    

    // 点击注册
    var registers = document.querySelector('.account .speed')
    var reg_hd = document.querySelector('.register-hidden')
    var war = document.querySelector('.login-wrapper')
    var ipt_register = document.querySelector('.register-hidden .ipt input')
    var ipt_register_c = document.querySelector('.register-hidden .ipt .cancel')
    var nexts = document.querySelector('.register-hidden .next')
    var mask = document.querySelector('.mask')
    var agrees = document.querySelector('.mask .agree-notice')
    var dis = document.querySelector('.mask .disagree')
    // 手机快速注册点击事件
    registers.onclick = function () {
        war.style.display = 'none'
        reg_hd.style.display = 'block'
        mask.style.display = 'block'
    }

    // 输入框失去焦点获得焦点
    ipt_register.onfocus = function () {
        ipt_register_c.style.opacity = '1'
    }
    ipt_register.onblur = function () {
        ipt_register_c.style.opacity = '0'
    }
    ipt_register_c.onclick = function () {
        ipt_register.value = ''
    }

    // 判断11位手机号
    var flag3 = true
    nexts.className = 'next active1'
    document.onkeyup = function () {
        if (flag3) {
            if (ipt_register.value.length == 11) {
                nexts.className = 'next current1'
                // 下一步点击注册事件
                nexts.onclick = function () {
                    war.style.display = 'block'
                    reg_hd.style.display = 'none'
                }
            }
            flag3 = false
        } else {
            nexts.className = 'next active1'
            flag3 = true
            nexts.onclick = null
        }
    }



    // 同意的点击事件
    agrees.onclick = function () {
        mask.style.display = 'none'
    }
    // 不同意的点击事件
    dis.onclick = function () {
        mask.style.display = 'none'
        war.style.display = 'block'
        reg_hd.style.display = 'none'
    }




    // 首页最右侧三个点击切换
    var three_next = document.querySelector('.nav .list-2 ul li .three-idot')
    var more_next = document.querySelector('.index_wrapper .more')
    var  flag5 = true
    three_next.onclick = function() {
        if(flag5) {
            this.style.backgroundImage = 'url(' + '../img/index-img/nac.png' + ')'
            more_next.className = 'more2'
            flag5 = false
        } else {
            this.style.backgroundImage = 'url(' + '../img/index-img/thee.png' + ')'
            more_next.className = 'more'
            flag5 = true
        }
        
    }


    // 首页与详情页的切换
    var index_war = document.querySelector('.index_wrapper')
    var shop_car_war = document.querySelector('.shop-car-wrapper')
    var details_index1 = document.querySelector('.details-wrapper')
    var details_img = document.querySelector('.details-wrapper .details .indefi')
    var more_list = document.querySelectorAll('.more ul li')
    var more_list_img = document.querySelectorAll('.more ul li .pic img')
    for (var i = 0; i < more_list.length; i++) {
        more_list[i].onclick = function () {
            index_war.style.display = 'none'
            details_index1.style.display = 'block'
            top_img_top = top_img.offsetTop
            title_h_top = title_h.offsetTop
            title_guess_top = title_guess.offsetTop
            introduce_hh_top = introduce_hh.offsetTop

            details_img.src = this.children[0].children[0].src
            shop_car_war.style.display = 'none'


            var s = new Swiper('.wwt-swiper2', {
                // 无缝轮播
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                // 滑动切换速度ms
                speed: 500,
            })
        }
    }

    // 详情页
    // 顶部返回栏  导航栏
    var hid_list = document.querySelector('.hidden-list')
    var back_hidden = document.querySelector('.back-hidden')
    hid_list_top = hid_list.offsetTop
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > hid_list_top) {
            hid_list.style.opacity = '1'
            back_hidden.style.display = 'none'

        } else {
            hid_list.style.opacity = '0'
            back_hidden.style.display = 'flex'
        }
    })

    // 左侧小箭头点击返回事件
    var details_index = document.querySelector('.details-wrapper')
    var index_index = document.querySelector('.index_wrapper')
    var back_left = document.querySelector('.back-hidden .to_left')
    back_left.onclick = function () {
        details_index.style.display = 'none'
        index_index.style.display = 'block'
        navs_top = navs.offsetTop
    }
    var back_left2 = document.querySelector('.hidden-list .back')
    back_left2.onclick = function () {
        details_index.style.display = 'none'
        index_index.style.display = 'block'
        navs_top = navs.offsetTop
    }

    // 详情页猜你喜欢轮播
    /*  var s = new Swiper('.wwt-swiper2', {
         // 无缝轮播
         loop: true,
         pagination: '.swiper-pagination',
         paginationClickable: true,
         // 滑动切换速度ms
         speed: 500,
     }) */

    // 商品介绍导航栏区域点击事件
    var lis = document.querySelectorAll('.introduce-list ul li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = ''
            }
            this.className = 'active_list'
        }
    }


    // 顶部导航栏点击事件
    var top_img = document.querySelector('.indefi')
    var title_h = document.querySelector('.evaluation .all_feel .title')
    var title_guess = document.querySelector('.guess .title-guess')
    var introduce_hh = document.querySelector('.introduce-list ul')
    var lis_top = document.querySelectorAll('.hidden-list .list li')
    var top_img_top = top_img.offsetTop
    var title_h_top = title_h.offsetTop
    var title_guess_top = title_guess.offsetTop
    var introduce_hh_top = introduce_hh.offsetTop
    /* var top_img_top
    var title_h_top
    var title_guess_top
    var introduce_hh_top */
    for (var i = 0; i < lis_top.length; i++) {
        lis_top[i].addEventListener('click', function () {
            for (var i = 0; i < lis_top.length; i++) {
                lis_top[i].className = ''
            }
            this.className = 'current_list'
        })
    }
    lis_top[0].onclick = function () {
        window.scrollTo({
            top: top_img_top,
            behavior: 'smooth'
        })
    }
    lis_top[1].onclick = function () {
        window.scrollTo({
            top: title_h_top - 70,
            behavior: 'smooth'
        })
    }
    lis_top[2].onclick = function () {
        window.scrollTo({
            top: introduce_hh_top - 60,
            behavior: 'smooth'
        })
    }
    lis_top[3].onclick = function () {
        window.scrollTo({
            top: title_guess_top - 58,
            behavior: 'smooth'
        })
    }

    // 页面滑动是顶部的导航条变化
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= title_h_top - 70) {
            for (var i = 0; i < lis_top.length; i++) {
                lis_top[i].className = ''
            }
            lis_top[1].className = 'current_list'
        } else {
            for (var i = 0; i < lis_top.length; i++) {
                lis_top[i].className = ''
            }
            lis_top[0].className = 'current_list'
        }
        if (window.pageYOffset >= title_guess_top - 58) {
            for (var i = 0; i < lis_top.length; i++) {
                lis_top[i].className = ''
            }
            lis_top[3].className = 'current_list'
        }
        if (window.pageYOffset >= introduce_hh_top - 60) {
            for (var i = 0; i < lis_top.length; i++) {
                lis_top[i].className = ''
            }
            lis_top[2].className = 'current_list'
        }
    })


    // 购物车
    // 点击左箭头返回事件
    var details_index2 = document.querySelector('.details-wrapper')
    var car_back = document.querySelector('.shop-car .car-top .back')
    var car_index = document.querySelector('.shop-car-wrapper')
    car_back.onclick = function () {
        car_index.style.display = 'none'
        details_index2.style.display = 'block'
    }

    // 点击进入购物车界面
    var shop_car_join = document.querySelector('.footer-shop ul .shop-car i')
    shop_car_join.onclick = function () {
        car_index.style.display = 'block'
        details_index2.style.display = 'none'
    }

    // 点击登录回到登录页面
    var car_index = document.querySelector('.shop-car-wrapper')
    var login_index = document.querySelector('.big-login-wrapper')
    var car_login = document.querySelector('.shop-car .car-login span')
    car_login.onclick = function () {
        car_index.style.display = 'none'
        login_index.style.display = 'block'
    }

    // 滑动显示返回顶部
    var car_back_top = document.querySelector('.shop-car .back_top')
    var car_pic = document.querySelector('.shop-car .jd-pic img')
    var car_pic_h = car_pic.offsetTop
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= car_pic_h) {
            car_back_top.style.display = 'block'
        } else {
            car_back_top.style.display = 'none'
        }
    })

    // 返回顶部
    car_back_top.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // 购物车全选功能
    // 店铺全选
    var store_all = document.querySelector('.select1 .main-top .circle')
    var selects = document.querySelectorAll('.select1 .join-det ul li .circle')
    var car_all = document.querySelector('.footer-bar .car')

    // 所有价格
    var spans = document.querySelectorAll('.join-det ul li .content .pri .num span')
    var total_span = document.querySelector('.footer-bar .total span')
    var total_num = document.querySelector('.footer-bar .settlement span')
    var total_btn = document.querySelector('.footer-bar .settlement')
    var total_pri = 0

    // 所有店铺的全选功能
    var car_all = document.querySelector('.footer-bar .car')
    var store_alls = document.querySelectorAll('.select .main-top .circle')
    var selects_all = document.querySelectorAll('.select .join-det ul li .circle')


    // var flag4 = true
    // 点击加号增加数量 
    var mons = document.querySelectorAll('.select .join-det .pri .add-del span')
    var adds = document.querySelectorAll('.select .join-det .pri .add-del .add')
    for (let u = 0; u < adds.length; u++) {
        adds[u].addEventListener('click', function () {
            console.log(adds);
            for (var i = 0; i < adds.length; i++) {
                adds[i].index = i
            }

            this.previousElementSibling.innerHTML = Number(this.previousElementSibling.innerHTML) + 1
            if (selects_all[this.index].getAttribute('data-index') == 0) {
                num4++
                // total_num.innerHTML = Number(total_num.innerHTML) + 1
                total_num.innerHTML = num4
                total_pri += Number(this.parentNode.previousElementSibling.children[0].innerHTML)
                total_span.innerHTML = total_pri

            }
            if (Number(this.previousElementSibling.innerHTML) >= 2) {
                this.previousElementSibling.previousElementSibling.style.backgroundImage = 'url(' + '../img/car-img/icon_-.b886f3bb.png' + ')'
            }
        })
    }

    // 点击减号减数量
    var dels = document.querySelectorAll('.select .join-det .pri .add-del .del')
    for (let u = 0; u < dels.length; u++) {
        dels[u].addEventListener('click', function () {
            dels = document.querySelectorAll('.select .join-det .pri .add-del .del')
            for (var i = 0; i < dels.length; i++) {
                dels[i].index2 = i
            }
            if (Number(dels[this.index2].nextElementSibling.innerHTML) > 1) {
                dels[this.index2].nextElementSibling.innerHTML = Number(dels[this.index2].nextElementSibling.innerHTML) - 1
                if (selects_all[this.index2].getAttribute('data-index') == 0) {
                    num4--
                    // total_num.innerHTML = Number(total_num.innerHTML) - 1
                    total_num.innerHTML = num4
                    total_pri -= Number(dels[this.index2].parentNode.previousElementSibling.children[0].innerHTML)
                    total_span.innerHTML = total_pri
                }

                if (Number(dels[this.index2].nextElementSibling.innerHTML) < 2) {
                    dels[this.index2].style.backgroundImage = 'url(' + '../img/car-img/icon_-_dis.1438c16b.png' + ')'
                }
            }

        })
    }


    var num4 = 0
    // 多选功能
    for (let p = 0; p < store_alls.length; p++) {
        store_alls[p].setAttribute('rel', 1)
        store_alls[p].onclick = function () {
            lis_all = this.parentNode.nextElementSibling.children[0].children
            var mul_span = this.parentNode.parentNode.querySelectorAll('.content .pri .num span')
            var mons_span = this.parentNode.parentNode.querySelectorAll('.content .pri .add-del span')
            if (this.getAttribute('rel') == 1) {
                // 所有的li                             
                for (let r = 0; r < lis_all.length; r++) {
                    // 价格
                    if (lis_all[r].querySelector('.circle').getAttribute('data-index') == 1) {
                        // num4++
                        // total_num.innerHTML =  Number(mons_span[r].innerHTML) + Number(total_num.innerHTML)
                        num4 += Number(mons_span[r].innerHTML)
                        total_num.innerHTML = num4
                        total_pri += Number(mul_span[r].innerHTML) * Number(mons_span[r].innerHTML)
                        total_span.innerHTML = total_pri
                    }

                    lis_all[r].children[0].style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                    lis_all[r].children[0].setAttribute('data-index', 0)
                }
                this.style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                this.setAttribute('rel', 0)
                total_btn.style.opacity = '1'
            }
            else {
                // 所有的li
                lis_all = this.parentNode.nextElementSibling.children[0].children
                for (let v = 0; v < lis_all.length; v++) {
                    lis_all[v].children[0].style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                    // 价格
                    if (lis_all[v].querySelector('.circle').getAttribute('data-index') == 0) {
                        // num4--
                        // total_num.innerHTML = Number(total_num.innerHTML) - Number(mons_span[v].innerHTML)
                        num4 -= Number(mons_span[v].innerHTML)
                        total_num.innerHTML = num4
                        total_pri -= Number(mul_span[v].innerHTML) * Number(mons_span[v].innerHTML)
                        total_span.innerHTML = total_pri
                    }

                }
                this.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                this.setAttribute('rel', 1)
                var cls = this.parentNode.nextElementSibling.querySelectorAll('ul li .circle');
                for (var i = 0; i < cls.length; i++) {
                    cls[i].setAttribute('data-index', 1)
                }
            }
            if (num4 == 0) {
                total_btn.style.opacity = '.3'
            } else {
                total_btn.style.opacity = '1'
            }

            // 所有店铺都选中了之后下面结算的全选即选中
            var num = 0;
            for (var k = 0; k < store_alls.length; k++) {
                if (store_alls[k].getAttribute('rel') == 0) {
                    num++
                }
            }
            if (num == store_alls.length) {
                car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                car_all.setAttribute('rel2', 0)
            } else {
                car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                car_all.setAttribute('rel2', 1)
            }

        }



    }

    // 每一个店铺的单选功能
    for (let q = 0; q < selects_all.length; q++) {
        selects_all[q].setAttribute('data-index', 1)
        // selects_all[q].index = q
        selects_all[q].onclick = function () {
            for (var i = 0; i < selects_all.length; i++) {
                selects_all[i].index3 = i
            }
            if (this.getAttribute('data-index') == 1) {
                this.style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                this.setAttribute('data-index', 0)
                // num4++
                num4 += Number(mons[this.index3].innerHTML)
                // 价格
                // total_num.innerHTML = Number(mons[q].innerHTML) + Number(total_num.innerHTML)
                total_num.innerHTML = num4
                total_pri += Number(spans[this.index3].innerHTML) * Number(mons[this.index3].innerHTML)
                total_span.innerHTML = total_pri

                total_btn.onclick = function () {
                    console.log(1);
                    if (num4 != 0) {
                        car_index.style.display = 'none'
                        sum_index.style.display = 'block'
                    }

                }
                total_btn.style.opacity = '1'

            } else {
                this.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                this.setAttribute('data-index', 1)
                car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'

                total_pri -= Number(spans[this.index3].innerHTML) * Number(mons[this.index3].innerHTML)
                total_span.innerHTML = total_pri
                num4 -= Number(mons[this.index3].innerHTML)
                // total_num.innerHTML = Number(total_num.innerHTML) - Number(mons[q].innerHTML)
                total_num.innerHTML = num4
            }



            var store1 = this.parentNode.parentNode.parentNode.previousElementSibling.parentNode
            var dd = this.parentNode.parentNode.querySelectorAll('li .circle')
            // 判断店铺中的全选
            var num1 = 0
            for (var d = 0; d < dd.length; d++) {
                if (dd[d].getAttribute('data-index') == 0) {
                    num1++
                }
            }
            if (num1 == dd.length) {
                this.parentNode.parentNode.parentNode.previousElementSibling.children[0].style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                this.parentNode.parentNode.parentNode.previousElementSibling.children[0].setAttribute('rel', 0)
            }
            else {
                this.parentNode.parentNode.parentNode.previousElementSibling.children[0].style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                this.parentNode.parentNode.parentNode.previousElementSibling.children[0].setAttribute('rel', 1)
            }

            // 判断结算全选
            var num5 = 0
            for (var i = 0; i < selects_all.length; i++) {
                if (selects_all[i].getAttribute('data-index') == 0) {
                    num5++
                }
            }
            if (num5 == selects_all.length) {
                car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                car_all.setAttribute('rel2', 0)
            } else {
                car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                car_all.setAttribute('rel2', 1)
            }

            if (num4 == 0) {
                total_btn.style.opacity = '.3'
            } else {
                total_btn.style.opacity = '1'
            }

        }
    }

    // 结算的全选功能
    var num3 = 0
    car_all.setAttribute('rel2', 1)
    car_all.onclick = function () {
        if (this.getAttribute('rel2') == 1) {
            for (let i = 0; i < selects_all.length; i++) {
                if (selects_all[i].getAttribute('data-index') == 1) {
                    // num4++
                    num4 += Number(mons[i].innerHTML)
                    total_pri += Number(spans[i].innerHTML) * Number(mons[i].innerHTML)
                    total_span.innerHTML = total_pri
                    // total_num.innerHTML = Number(mons[i].innerHTML) + Number(total_num.innerHTML)
                    total_num.innerHTML = num4
                }
                selects_all[i].style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                this.style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                this.setAttribute('rel2', 0)
                selects_all[i].setAttribute('data-index', 0)

            }
            for (var k = 0; k < store_alls.length; k++) {
                store_alls[k].style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                store_alls[k].setAttribute('rel', 0)
            }

            total_btn.onclick = function () {
                if (num4 != 0) {
                    car_index.style.display = 'none'
                    sum_index.style.display = 'block'
                }
            }
            total_btn.style.opacity = '1'
        } else {
            for (let i = 0; i < selects_all.length; i++) {
                selects_all[i].style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                this.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                this.setAttribute('rel2', 1)
                selects_all[i].setAttribute('data-index', 1)
                // num4--
                num4 -= Number(mons[i].innerHTML)
                total_pri -= Number(spans[i].innerHTML) * Number(mons[i].innerHTML)
                total_span.innerHTML = 0.00
                // total_num.innerHTML = Number(total_num.innerHTML) - Number(mons[i].innerHTML) 
                total_num.innerHTML = num4
            }
            for (var k = 0; k < store_alls.length; k++) {
                store_alls[k].style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                store_alls[k].setAttribute('rel', 1)
            }
            total_btn.style.opacity = '.3'

        }
    }
 
    // 返回购物车
    var back_car = document.querySelector('.account .account-back')
    var sum_index = document.querySelector('.account-wrapper')
    back_car.onclick = function () {
        sum_index.style.display = 'none'
        car_index.style.display = 'block'
    }

    // 点击删除 删除商品
    var delss = document.querySelectorAll('.join-det .content .delete .dels')
    for (let i = 0; i < delss.length; i++) {
        delss[i].onclick = function () {

            var dd = this.parentNode.parentNode.parentNode.parentNode
            // console.log(dd);

            delss = document.querySelectorAll('.join-det .content .delete .dels')
            for (let j = 0; j < delss.length; j++) {
                delss[j].index4 = j
            }
            if (selects_all[this.index4].getAttribute('data-index') == 0) {
                num4 -= Number(mons[this.index4].innerHTML)
                total_pri -= Number(spans[this.index4].innerHTML) * Number(mons[this.index4].innerHTML)
                total_num.innerHTML = num4
                total_span.innerHTML = total_pri
            }

            if (delss[this.index4].parentNode.parentNode.parentNode.parentNode.children.length > 1) {
                delss[this.index4].parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode)

                // 判断店铺中的全选
                var num1 = 0
                for (var d = 0; d < dd.children.length; d++) {
                    if (dd.querySelector('li .circle').getAttribute('data-index') == 0) {
                        num1++
                        // console.log(num1);
                    }
                }
                if (num1 == dd.children.length) {
                    // console.log(1);
                    dd.parentNode.parentNode.querySelector('.main-top .circle').style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                    dd.parentNode.parentNode.querySelector('.main-top .circle').setAttribute('rel', 0)
                }
                else {
                    dd.parentNode.parentNode.querySelector('.main-top .circle').style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                    dd.parentNode.parentNode.querySelector('.main-top .circle').setAttribute('rel', 1)
                }

            } else {
                delss[this.index4].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)

            }

            // 更新数据  
            spans = document.querySelectorAll('.join-det ul li .content .pri .num span')
            store_alls = document.querySelectorAll('.select .main-top .circle')
            selects_all = document.querySelectorAll('.select .join-det ul li .circle')
            mons = document.querySelectorAll('.select .join-det .pri .add-del span')
            adds = document.querySelectorAll('.select .join-det .pri .add-del .add')
            dels = document.querySelectorAll('.select .join-det .pri .add-del .del')
            // console.log(selects_all);
            // 删除之后结算全选
            var num6 = 0
            for (let i = 0; i < selects_all.length; i++) {
                if (selects_all[i].getAttribute('data-index') == 0) {
                    num6++
                }
                if (num6 == selects_all.length) {
                    car_all.setAttribute('rel2', 0)
                    car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_selected_jd@2x.9edc3756.png' + ')'
                }
            }
            if (selects_all.length == 0) {
                car_all.onclick = null
                car_all.setAttribute('rel2', 1)
                car_all.style.backgroundImage = 'url(' + '../img/car-img/icon_unselected_jd@2x.af34ea16.png' + ')'
                total_btn.style.opacity = '.3'
            }




        }
    }
}