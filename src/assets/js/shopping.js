window.onload = function () {
    // 购物车
    // 点击左箭头返回事件
    var details_index2 = document.querySelector('.details-wrapper')
    var car_back = document.querySelector('.shop-car .car-top .back')
    var car_index = document.querySelector('.shop-car-wrapper')
    car_back.onclick = function () {
        window.location.href = 'http://localhost:3000/details.html'
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

    function all() {
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
                // 点击加号增加数量 axios
                const car_id = this.parentNode.children[0].id
                axios({
                    method: 'get',
                    url: `http://localhost:3000/cars/:${car_id}`,
                }).then((data) => {
                    console.log(data);
                })

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
                // 点击减号减少数量 axios
                const car_id = this.id
                axios({
                    method: 'get',
                    url: `http://localhost:3000/cardel/:${car_id}`,
                }).then((data) => {
                    console.log(data);
                })

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

                    /* total_btn.onclick = function () {
                        console.log(1);
                        if (num4 != 0) {
                            window.location.href = 'http://localhost:3000/settlement.html'
                        }

                    } */
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

                /* total_btn.onclick = function () {
                    if (num4 != 0) {
                        window.location.href = 'http://localhost:3000/settlement.html'
                    }
                } */
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

        // 点击删除 删除商品
        var delss = document.querySelectorAll('.join-det .content .delete .dels')
        for (let i = 0; i < delss.length; i++) {
            delss[i].onclick = function () {
                // 删除请求
                let car_id = this.parentNode.previousElementSibling.children[1].children[0].id
                axios({
                    method: 'get',
                    url: `http://localhost:3000/cardels/:${car_id}`,
                }).then((data) => {
                    console.log(data);
                })

                var dd = this.parentNode.parentNode.parentNode.parentNode

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

    // axios
    axios({
        method: 'get',
        url: 'http://localhost:3000/car',
    }).then((data) => {
        // console.log(data.data);
        const more_ul = document.querySelector('.shop-car-wrapper .shop-car .more ul')
        more_ul.innerHTML = ''
        for (let i = 0; i < data.data.length; i++) {
            more_ul.innerHTML +=
                `
                <li id="${data.data[i].id}">
                    <div class="pic">
                        <img src="${data.data[i].img1}" alt="">
                    </div>
                    <div class="right_text">
                        <div class="text">
                            <p>
                                <span class="hot">热销</span>
                                <span class="introduce">${data.data[i].title}</span>
                            </p>
                        </div>
                        <div class="price">
                            <i>￥</i><span>${data.data[i].price}.<i>00</i></span>
                            <span class="poor">${data.data[i].discount}</span>
                        </div>
                        <div class="nice">
                            <p>
                                <span>${data.data[i].evaluate}</span>条评论
                                <span>好评${data.data[i].pra_rate}</span>
                            </p>
                        </div>
                    </div>
                </li>
                
            `
            const hot = document.querySelectorAll('.shop-car-wrapper .shop-car .more ul li .right_text .text .hot')
            const it = document.querySelectorAll('.shop-car-wrapper .shop-car .more ul li .right_text .text .introduce')
            if (data.data[i].hot === 0) {
                for (let j = 0; j < hot.length; j++) {
                    hot[i].innerHTML = '上新'
                    hot[i].style.backgroundColor = 'green'
                }
            }
            if (data.data[i].hot === 2) {
                for (let j = 0; j < hot.length; j++) {
                    hot[i].innerHTML = ''
                    it[i].style.textIndent = '0'
                    hot[i].style.backgroundColor = 'transparent'
                }
            }
        }

        // 购物车与详情页的切换
        const more_uls = document.querySelectorAll('.shop-car-wrapper .shop-car .more ul li')
        for (let i = 0; i < more_uls.length; i++) {
            more_uls[i].onclick = function () {
                const ids = this.id
                localStorage.setItem('id', `${ids}`)
                window.location.href = 'http://localhost:3000/details.html'
            }
        }
    })

    // 进入到购物车之后发送请求
    axios({
        method: 'get',
        url: 'http://localhost:3000/car_add',
    }).then((data) => {

        const main_top = document.querySelector('.shop-car-wrapper .shop-car .select1 .main-top')
        if (data.data.length > 0) {
            main_top.innerHTML =
                `
                <i class="circle"></i>
                <i class="house"></i>
                <span>BOJO家具旗舰店</span>
                <i class="arrow_right"></i>
            `
        }
        // 点击旗舰店跳转到首页
        const store = document.querySelector('.shop-car-wrapper .shop-car .select1 .main-top span')
        store.onclick = function () {
            window.location.href = 'http://localhost:3000/index.html'
        }


        // 进去之后获取有件数的渲染到页面上
        const shop_car = document.querySelector('.shop-car-wrapper .shop-car .select1 .join-det ul')
        var coun_all = 0
        for (let i = 0; i < data.data.length; i++) {
            shop_car.innerHTML +=
                `
            <li>
                <i class="${data.data[i].id} circle"></i>
                <div class="pic">
                    <img src="${data.data[i].img}" alt="">
                </div>
                <div class="content">
                    <p class="ellipsis-2">
                    ${data.data[i].title}
                    </p>
                    <div class="choice">
                        <span class="ellipsis">${data.data[i].data_type}</span>
                        <i></i>
                    </div>
                    <div class="jump">
                        <span>跨店</span>
                        <span>${data.data[i].discount}</span>
                    </div>
                    <div class="pri">
                        <div class="num">
                            ￥<span>${data.data[i].price_all}</span>.00
                        </div>
                        <div class="add-del">
                            <i class="del" id="${data.data[i].id}"></i>
                            <span>${data.data[i].num}</span>
                            <i class="add"></i>
                        </div>
                    </div>
                    <div class="delete">
                        <span>移入关注</span>
                        <span class="dels" data-index="${data.data[i].id}">删除</span>
                    </div>
                </div>
            </li>
                `
            coun_all += data.data[i].num

        }
        let num_span = document.querySelectorAll('.shop-car-wrapper .shop-car .select1 .join-det ul li .content .pri .add-del span')
        for (let i = 0; i < num_span.length; i++) {
            if (parseInt(num_span[i].innerHTML) > 1) {
                num_span[i].previousElementSibling.style.backgroundImage = 'url(' + '../img/car-img/icon_-.b886f3bb.png' + ')'
            }
        }
        

        /* for (let i = 0; i < data.data.length; i++) {
            shop_car.innerHTML +=
                `
            <li>
                <i class="${data.data[i].id} circle"></i>
                <div class="pic">
                    <img src="${data.data[i].img1}" alt="">
                </div>
                <div class="content">
                    <p class="ellipsis-2">
                    ${data.data[i].title}
                    </p>
                    <div class="choice">
                        <span>${data.data[i].width}cm${data.data[i].title.substr(12,8)}</span>
                        <i></i>
                    </div>
                    <div class="jump">
                        <span>跨店</span>
                        <span>${data.data[i].discount}</span>
                    </div>
                    <div class="pri">
                        <div class="num">
                            ￥<span>${data.data[i].price}</span>.00
                        </div>
                        <div class="add-del">
                            <i class="del" id="${data.data[i].id}"></i>
                            <span>${data.data[i].num}</span>
                            <i class="add"></i>
                        </div>
                    </div>
                    <div class="delete">
                        <span>移入关注</span>
                        <span class="dels" data-index="${data.data[i].id}">删除</span>
                    </div>
                </div>
            </li>
                `
            coun_all += data.data[i].num
        } */


        // 全部  跨店满减
        const count = document.querySelector('.shop-car-wrapper .shop-car .count .all_num span')
        count.innerHTML = `(${coun_all})`
        const dis = document.querySelector('.shop-car-wrapper .shop-car .count .dis span')
        dis.innerHTML = `(${data.data.length})`

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
                let data_type = adds[u].parentNode.parentNode.parentNode.children[1].children[0].innerHTML
                // 点击加号增加数量 axios
                const car_id = this.parentNode.children[0].id
                axios({
                    method: 'get',
                    url: `http://localhost:3000/cars/${car_id},${data_type}`,
                }).then((data) => {
                    console.log(data);
                })

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
                let data_type = dels[u].parentNode.parentNode.parentNode.children[1].children[0].innerHTML
                // 点击减号减少数量 axios
                const car_id = this.id
                axios({
                    method: 'get',
                    url: `http://localhost:3000/cardel/${car_id},${data_type}`,
                }).then((data) => {
                    // console.log(data);
                })

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

                    /* total_btn.onclick = function () {
                        if (num4 != 0) {
                            window.location.href = 'http://localhost:3000/settlement.html'
                        }
                    } */
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

                    /* total_btn.onclick = function () {
                        if (num4 != 0) {
                            window.location.href = 'http://localhost:3000/settlement.html'
                        }
                    } */
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

                /* total_btn.onclick = function () {
                    if (num4 != 0) {
                        window.location.href = 'http://localhost:3000/settlement.html'
                    }
                } */
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


        // 点击删除 删除商品
        var delss = document.querySelectorAll('.join-det .content .delete .dels')
        for (let i = 0; i < delss.length; i++) {
            delss[i].onclick = function () {
                // 删除请求
                let car_id = this.parentNode.previousElementSibling.children[1].children[0].id
                let data_type = delss[i].parentNode.parentNode.children[1].children[0].innerHTML
                axios({
                    method: 'get',
                    url: `http://localhost:3000/cardels/${car_id},${data_type}`,
                }).then((data) => {
                    console.log(data);
                })

                var dd = this.parentNode.parentNode.parentNode.parentNode

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
        // all()

        // 进入购物车页面清空num2
        axios({
            method: 'get',
            url: `http://localhost:3000/clear`,
        }).then((data) => {
            console.log(data);
        })
        // 结算发送axios
        const all_cir = document.querySelectorAll('.shop-car-wrapper .shop-car .select1 .join-det ul li .circle')
        total_btn.onclick = function () {
            for (let i = 0; i < all_cir.length; i++) {
                if (all_cir[i].getAttribute('data-index') == 0) {
                    let car_id = all_cir[i].className.substring(0, 2)
                    let data_type = all_cir[i].parentNode.children[2].children[1].children[0].innerHTML
                    let num = all_cir[i].parentNode.children[2].children[3].children[1].children[1].innerHTML;
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/count`,
                        data: {
                            car_id,
                            data_type,
                            num,
                        }
                    }).then((data) => {
                        console.log(data);
                        const sum_price = document.querySelector('.shop-car-wrapper .shop-car .footer-bar .total span').innerHTML
                        console.log(sum_price);
                        localStorage.setItem('sum_price', sum_price)
                        if (num4 != 0) {
                            window.location.href = 'http://localhost:3000/settlement.html'
                        }
                    })
                }
            }
        }
    })


}