window.onload = function () {
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
        // details_index.style.display = 'none'
        // index_index.style.display = 'block'
        // navs_top = navs.offsetTop
        window.location.href = 'http://localhost:3000/index.html'
    }
    var back_left2 = document.querySelector('.hidden-list .back')
    back_left2.onclick = function () {
        // details_index.style.display = 'none'
        // index_index.style.display = 'block'
        // navs_top = navs.offsetTop
        window.location.href = 'http://localhost:3000/index.html'
    }

    // 详情页猜你喜欢轮播
    var s = new Swiper('.wwt-swiper2', {
        // 无缝轮播
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // 滑动切换速度ms
        speed: 500,
    })

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

    // 规格参数和售后保障点击切换
    const banner_bot = document.querySelector('.details-wrapper .details .banner-pic')
    const first = document.querySelector('.introduce-list ul li .first')
    const sale_after = document.querySelector('.introduce-list ul li .sale-af')
    const par = document.querySelector('.introduce-list ul li .par')
    const info = document.querySelector('.introduce-list .sale_after')
    const params_info = document.querySelector('.introduce-list .params')
    sale_after.onclick = function () {
        banner_bot.style.display = 'none'
        info.style.display = 'block'
        params_info.style.display = 'none'
    }
    par.onclick = function () {
        banner_bot.style.display = 'none'
        info.style.display = 'none'
        params_info.style.display = 'block'

        // 规格参数数据 
        const pars = document.querySelector('.details-wrapper .details .introduce-list .params form')
        let ids = localStorage.getItem('id')
        axios({
            method: 'get',
            url: `http://localhost:3000/params/:${ids}`,
        }).then((data) => {
            // console.log(data.data);
            pars.innerHTML =
                `
            <table cellspacing="1">
            <tr>
                <td>商品编号</td>
                <td>${data.data[0].number}</td>
            </tr>
            <tr>
                <td colspan="2">主体</td>
            </tr>
            <tr>
                <td>产品尺寸</td>
                <td>长${data.data[0].width}cm;宽${data.data[0].height}cm</td>
            </tr>
            <tr>
                <td>包装尺寸</td>
                <td>长${data.data[0].width}cm;宽${data.data[0].height}cm</td>
            </tr>
            <tr>
                <td>是否需要组装</td>
                <td>${data.data[0].install}</td>
            </tr>
            <tr>
                <td>产品净重</td>
                <td>${data.data[0].weight}kg</td>
            </tr>
            <tr>
                <td>商品承重</td>
                <td>${data.data[0].weight}kg</td>
            </tr>
        </table>
            `
        })
    }

    first.onclick = function () {
        banner_bot.style.display = 'block'
        info.style.display = 'none'
        params_info.style.display = 'none'
    }

    // 跳转到详情页发送请求
    let ids = localStorage.getItem('id')
    axios({
        method: 'get',
        url: `http://localhost:3000/details/:${ids}`,
    }).then((data) => {
        console.log(data.data);
        const pri = document.querySelector('.details-wrapper .details .price')
        const pre = document.querySelector('.details-wrapper .details .pre')
        pri.innerHTML =
            `
        <div class="top-price">
            <p>￥<span id="${data.data[0][0].id}">${data.data[0][0].price}.</span>00</p>
            <span class="one">
                <i class="cheaper"></i>
                降价提醒
            </span>
            <span>
                <i class="collection"></i>
                收藏
            </span>
        </div>
        <div class="price-text">
            <div class="main">${data.data[0][0].title}
            </div>
            <div class="all-main">
                <p>【全店商品，跨店每满200-30，叠加店铺优惠，到手价低至8折。额外返现10%】下单享白条3期免息，满额送好礼，千城送装，详情咨询客服》》详情咨询客服》》》 </p>
                <i class="unfold"></i>
            </div>
        </div>
        `
        pre.innerHTML =
            `
        <span class="che">优惠</span>
        <span>${data.data[0][0].discount}</span>
        <span>满1000享9.5折</span>
        <i class="idot_three"></i>
        `

        const top_swiper = document.querySelector('.details-wrapper .details .top-pic .wwt-swiper3 .det')
        for (var k in data.data[1][0]) {
            // console.log(data.data[1][0]);
            top_swiper.innerHTML +=
                `
            <div class="swiper-slide detai">
                <img src="${data.data[1][0][k]}" alt="">
            </div>
            `
            const ban2 = document.querySelector('.details-wrapper .details .banner-pic .wrap2')
            ban2.innerHTML +=
                `
                <img src="${data.data[1][0][k]}" alt="">
            `
        }
        const ban = document.querySelector('.details-wrapper .details .banner-pic .wrap')
        // console.log(data.data[2][0]);
        for (var j in data.data[2][0]) {
            ban.innerHTML +=
                `
                <img src="${data.data[2][0][j]}" alt="">
            `
        }
        var s = new Swiper('.wwt-swiper3', {
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

        // 点击加入购物车
        const join_car = document.querySelector('.details-wrapper .details .footer-shop ul .join')
        const ppid = document.querySelector('.details-wrapper .details .price .top-price p span')
        const hid_buy = document.querySelector('.details-wrapper .details .shopping-cart')
        // const close = document.querySelector('.details-wrapper .details .shopping-cart .cart .top-right i')
        // const close_lis = document.querySelectorAll('.details-wrapper .details .shopping-cart .cart .cart-cen .cen-top .top-list ul li')
        localStorage.setItem('title', data.data[0][0].title)
        localStorage.setItem('discount', data.data[0][0].discount)
        join_car.onclick = function () {
            id_add = localStorage.getItem('id')
            titles = localStorage.getItem('title')
            discount = localStorage.getItem('discount')
            axios({
                method: 'get',
                url: `http://localhost:3000/add_shop/${id_add}`
            }).then((data) => {
                console.log(data);
                // let data_all = data.data[0].data_type.split(',')
                // for (let i = 0; i < data_all.length; i++) {
                // }
                hid_buy.innerHTML =
                    `
                <div class="cart-setting"></div>
                <div class="cart">
                    <div class="cart-top">
                        <img src="${data.data[0][0].img1}" alt="">
                        <div class="top-cen">
                            <p>
                                <i>¥</i>
                                <span>${data.data[0][0].price}</span>
                                <i>.00</i>
                            </p>
                            <span>已选</span>
                            <span class="active">1.2书桌灰色+椅子</span>
                            <span>1个</span>
                        </div>
                        <div class="top-right">
                            <i></i>
                        </div>
                    </div>
                    <div class="cart-cen">
                        <div class="cen-top">
                            <div class="top-title">颜色</div>
                            <div class="top-list">
                                <ul>
                                    <li class="active" data_index="${data.data[1][0].img1}">${data.data[0][0].data_type.split(',')[0]}</li>
                                    <li data_index="${data.data[1][0].img2}">${data.data[0][0].data_type.split(',')[1]}</li>
                                    <li data_index="${data.data[1][0].img4}">${data.data[0][0].data_type.split(',')[2]}</li>
                                </ul>

                            </div>
                        </div>
                        <div class="cen-cen">
                            <div class="cen-left">数量</div>
                            <div class="cen-right">
                                <span class="delete">-</span>
                                <span class="active">1</span>
                                <span class="add">+</span>
                            </div>
                        </div>
                    </div>
                    <div class="cart-bottom">
                        <p>确认</p>
                    </div>
                </div>
                `
                const close = document.querySelector('.details-wrapper .details .shopping-cart .cart .top-right i')
                const price = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-top .top-cen p span')
                const title = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-top .top-cen .active')
                const imgs = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-top img')
                const close_lis = document.querySelectorAll('.details-wrapper .details .shopping-cart .cart .cart-cen .cen-top .top-list ul li')
                hid_buy.style.display = 'block'
                // 排他
                for (let i = 0; i < close_lis.length; i++) {
                    close_lis[i].onclick = function () {
                        price.innerHTML = data.data[0][0].price_all.split(',')[i]
                        title.innerHTML = data.data[0][0].data_type.split(',')[i]
                        imgs.src = close_lis[i].getAttribute('data_index')
                        if (close_lis[i].className == '') {
                            for (let i = 0; i < close_lis.length; i++) {
                                close_lis[i].className = ''
                            }
                            close_lis[i].className = 'active'
                        } else {
                            close_lis[i].className = ''
                        }
                    }
                }

                // 加号减号
                const delete_btn = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-cen .cen-cen .cen-right .delete')
                const add_btn = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-cen .cen-cen .cen-right .add')
                const num_btn = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-cen .cen-cen .cen-right .active')
                let nums = parseInt(num_btn.innerHTML)
                // 加号
                add_btn.onclick = function () {
                    nums++
                    num_btn.innerHTML = nums
                }
                // 减号
                delete_btn.onclick = function () {
                    if (nums > 1) {
                        nums--
                        num_btn.innerHTML = nums
                    }

                }
                // 关闭遮罩层
                close.onclick = function () {
                    hid_buy.style.display = 'none'
                }


                // 点击确定按钮将数据存储进数据库
                const confirm = document.querySelector('.details-wrapper .details .shopping-cart .cart .cart-bottom p')
                confirm.onclick = function () {
                    let id = localStorage.getItem('id')
                    let num = this.parentNode.parentNode.children[1].children[1].children[1].children[1].innerHTML
                    let img
                    let price = this.parentNode.parentNode.children[0].children[1].children[0].children[1].innerHTML
                    let data_type
                    for (let i = 0; i < close_lis.length; i++) {
                        if (close_lis[i].className == 'active') {
                            data_type = close_lis[i].innerHTML
                            img = close_lis[i].getAttribute('data_index')
                        }
                    }
                    hid_buy.style.display = 'none'
                    const suc = document.querySelector('.success')
                    suc.style.display = 'block'
                    setTimeout(function () {
                        suc.style.display = 'none'
                    }, 1000)
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/storage',
                        data: {
                            id,
                            price,
                            data_type,
                            img,
                            num,
                            discount,
                            titles,
                        }
                    }).then((data) => {
                        console.log(data);
                    })
                }
            })
        }
        // close.onclick = function () {
        //     hid_buy.style.display = 'none'
        // }

        /* join_car.onclick = function () {
            const car_id = ppid.id
            const suc = document.querySelector('.success')
            suc.style.display = 'block'
            setTimeout(function() {
                suc.style.display = 'none'
            },1000)
            axios({
                method: 'get',
                url: `http://localhost:3000/cars/:${car_id}`,
            }).then((data) => {
                console.log(data);
            })
        } */


    })

    // 点击进入购物车
    const shop_car = document.querySelector('.details-wrapper .details .footer-shop ul .shop-car')
    shop_car.onclick = function () {
        window.location.href = 'http://localhost:3000/shopping.html'
    }

    // 点击立即购买跳转到订单页
    const pay_now = document.querySelector('.details-wrapper .details .footer-shop ul .just')
    /* pay_now.onclick = function () {
        const spans = document.querySelector('.details-wrapper .details .price .top-price p span')
        // console.log(spans);
        let ids = spans.id
        axios({
            method: 'get',
            url: `http://localhost:3000/right_now/${ids}`
        }).then((data) => {
            console.log(data);
            localStorage.setItem('right_now',data.data[0])
            localStorage.setItem('right_id',data.data[1][0].id)
            window.location.href = 'http://localhost:3000/settlement.html'
        })

    } */

    // 点击店铺跳转首页
    const store_car = document.querySelector('.details-wrapper .details .footer-shop ul .store')
    store_car.onclick = function () {
        window.location.href = 'http://localhost:3000/index.html'
    }


}