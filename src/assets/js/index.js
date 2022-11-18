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
    var navs_top = navs.offsetTop
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
    var navs3 = document.querySelector('.nav .list-3')
    const bg = document.querySelector('.index_wrapper .bgc .pic')

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
        navs3.style.display = 'none'

        var navs = document.querySelector('.index_wrapper .nav')
        navs_top = 111
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
                bg.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'
                bg.style.backgroundSize = '100%  4.8rem'
            }
        })
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

        var navs = document.querySelector('.index_wrapper .nav')
        navs_top = 111
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
                bg.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'
                bg.style.backgroundSize = '100%  4.8rem'
            }
        })

        
    }
    var classf_2 = document.querySelector('.classf2')
    var classf_1 = document.querySelector('.classf')
    var classf_3 = document.querySelector('.classf3')
    var festivals = document.querySelector('.index_wrapper .festival')
    classf_3.onclick = function () {
        navs1.style.display = 'none'
        boxs.style.display = 'none'
        banner_all.style.display = 'none'
        advices.style.display = 'none'
        classf_1.style.display = 'block'
        classf_2.style.display = 'block'
        classf_3.style.display = 'block'
        festivals.style.display = 'none'
        navs2.style.display = 'none'
        navs3.style.display = 'none'
        bg.style.backgroundImage = ''
        cover.style.display = 'block'
        bg.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'
        bg.style.backgroundSize = '100%  4.8rem'   
        document.addEventListener('scroll', function () {
            bg.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'  
            bg.style.backgroundSize = '100%  4.8rem'         
        })

        this.children[1].className = 'current'
        this.children[0].src = '../img/index-img/classf2.png'
        alls.children[1].className = ''
        alls.children[0].src = '../img/index-img/shopping.png'
        indexs.children[1].className = ''
        indexs.children[0].src = '../img/index-img/hone.png'
    }



    // 顶部导航栏点击切换
    const cover = document.querySelector('.index_wrapper .bgc .cover')
    var goods = document.querySelector('.index_wrapper .nav .list .goods')
    var select_nice = document.querySelector('.index_wrapper .nav .list .select_nice')
    var navs3 = document.querySelector('.nav .list-3')

    const festival = document.querySelector('.index_wrapper .nav .list .pic')
    const tp = document.querySelector('.festival .top')
    const cp = document.querySelector('.festival .cheap')
    const big_rank = document.querySelector('.festival .big_rank')
    const look = document.querySelector('.festival .look')
    const foryou = document.querySelector('.festival .foryou')
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
        cover.style.display = 'block'
        bg.style.backgroundImage = ''
        tp.style.display = 'none'
        cp.style.display = 'none'
        big_rank.style.display = 'none'
        look.style.display = 'none'
        foryou.style.display = 'none'
        var navs = document.querySelector('.index_wrapper .nav')
        navs_top = 111
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
                bg.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'
                bg.style.backgroundSize = '100%  4.8rem'
            }
        })
       
    }

    select_nice.onclick = function () {
        // navs1.style.display = 'none'
        boxs.style.display = 'block'
        banner_all.style.display = 'block'
        advices.style.display = 'block'
        this.className = 'select_nice next'
        goods.className = 'goods'
        navs3.style.display = 'none'
        cover.style.display = 'block'
        bg.style.backgroundImage = ''
        tp.style.display = 'none'
        cp.style.display = 'none'
        big_rank.style.display = 'none'
        look.style.display = 'none'
        foryou.style.display = 'none'
        var navs = document.querySelector('.index_wrapper .nav')
        navs_top = 111
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
                bg.style.backgroundImage = 'url(' + '../img/index-img/sofa.jpg' + ')'
                bg.style.backgroundSize = '100%  4.8rem'
            }
        })
    }


    festival.onclick = function () {
        navs1.style.display = 'block'
        boxs.style.display = 'none'
        banner_all.style.display = 'none'
        advices.style.display = 'none'
        classf_1.style.display = 'none'
        classf_2.style.display = 'none'
        bg.style.backgroundImage = 'url(' + '../img/index-img/pink.png' + ')'
        cover.style.display = 'none'
        navs3.style.display = 'none'
        tp.style.display = 'flex'
        cp.style.display = 'flex'
        big_rank.style.display = 'block'
        look.style.display = 'flex'
        foryou.style.display = 'flex'
        festivals.style.display = 'block'
        select_nice.className = 'select_nice'
        goods.className = 'goods'
        var navs = document.querySelector('.index_wrapper .nav')
        var navs_top = navs.offsetTop
        document.addEventListener('scroll', function () {
            if (window.pageYOffset >= navs_top) {
                navs.style.position = 'fixed'
                navs.style.left = '0px'
                navs.style.top = '0px'
                navs.style.backgroundImage = 'url(' + '../img/index-img/pink.png' + ')'
                navs.style.backgroundSize = '100%  4.8rem'
                // bg.style.background = 'none'
            } else {
                navs.style.position = 'static';
                navs.style.backgroundImage = ''
                bg.style.backgroundImage = 'url(' + '../img/index-img/pink.png' + ')'
            }
        })

        const festival = document.querySelector('.festival .top')
        axios({
            method: 'get',
            url: 'http://localhost:3000/festival',
            data: {
            }
        }).then((data) => {
            console.log(data.data);
            for (let i = 0; i < data.data.length; i++) {
                festival.innerHTML +=
                    `
                <li>
                    <img src="${data.data[i].img1}" alt="">
                    <p class="discount">${data.data[i].discount}</p>
                    <p class="money">￥<span>${data.data[i].price}</span>.00</p>
                </li>
                `
            }
        })

        const rank = document.querySelector('.festival .big_rank .rank')
        axios({
            method: 'get',
            url: 'http://localhost:3000/festival2',
        }).then((data) => {
            // console.log(data.data);
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].classfiy == '书桌系列') {
                    rank.innerHTML +=
                        `
                    <li >
                        <img src=".${data.data[i].img3}" alt="">
                        <p class="discount ellipsis-2">${data.data[i].title}</p>
                    </li>
                    `
                }

            }

        })

    }


    


    // 首页最右侧三个点击切换
    var three_next = document.querySelector('.nav .list-2 ul li .three-idot')
    var more_next = document.querySelector('.index_wrapper .more')
    var flag5 = true
    three_next.onclick = function () {
        if (flag5) {
            this.style.backgroundImage = 'url(' + '../img/index-img/nac.png' + ')'
            more_next.className = 'more2'
            flag5 = false
        } else {
            this.style.backgroundImage = 'url(' + '../img/index-img/thee.png' + ')'
            more_next.className = 'more'
            flag5 = true
        }

    }

    const banner_pic = document.querySelector('.index_wrapper .banner')
    const more_ul = document.querySelector('.index_wrapper .more ul')

    // 添加
    const box = document.querySelector('.box .wwt-swiper .swiper-wrapper')
    const add = document.querySelector('.index_wrapper .nav .list-3')
    const add_lis3 = document.querySelectorAll('.index_wrapper .nav .list-3 li')
    for (var a = 0; a < add_lis3.length; a++) {
        add_lis3[a].onclick = function () {
            for (var j = 0; j < add_lis3.length; j++) {
                add_lis3[j].style.color = 'black'
            }
            this.style.color = 'red'
        }
    }

    // 进入首页渲染数据
    axios({
        method: 'post',
        url: 'http://localhost:3000/index',
        data: {

        }
    }).then((data) => {
        console.log(data.data);
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
            const hot = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .hot')
            const it = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .introduce')
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
        for (let j = 0; j < 6; j++) {
            box.innerHTML +=
                `
            <div class="swiper-slide lis" id="${data.data[j].id}">
                <img src="${data.data[j].img5}" alt="">
            </div>
            `
        }
        const sws = document.querySelectorAll('.index_wrapper .box .wwt-swiper .start .lis')
        for (let i = 0; i < sws.length; i++) {
            sws[i].onclick = function () {
                const ids = this.id
                localStorage.setItem('id', `${ids}`)
                window.location.href = 'http://localhost:3000/details.html'
            }
        }
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

        // 首页与详情页的切换
        var more_list = document.querySelectorAll('.more ul li')
        for (let i = 0; i < more_list.length; i++) {
            more_list[i].onclick = function () {
                const ids = this.id
                localStorage.setItem('id', `${ids}`)
                window.location.href = 'http://localhost:3000/details.html'
            }
        }

        // 点击首页轮播下图片跳转详情页
        const pic_more = document.querySelectorAll('.index_wrapper .banner .click img')
        for (let i = 0; i < pic_more.length; i++) {
            pic_more[i].onclick = function () {
                const id3 = this.id
                localStorage.setItem('id', `${id3}`)
                window.location.href = 'http://localhost:3000/details.html'
            }
        }

        // 点击分类导航进入分类页面
        const classfiy_lis = document.querySelectorAll('.index_wrapper .banner .classfiy_pic .hidden_mask li')
        for (let i = 0; i < classfiy_lis.length; i++) {
            classfiy_lis[i].onclick = function () {
                const span = classfiy_lis[i].innerHTML
                localStorage.setItem('classfiy', `${span}`)
                window.location.href = 'http://localhost:3000/classfiy.html'
            }
        }
    })


    // 点击销量按评价多少排序
    const sales = document.querySelector('.index_wrapper .nav .list-3 .sale')
    var flag1 = true
    sales.onclick = function () {
        for (var j = 0; j < add_lis3.length; j++) {
            add_lis3[j].style.color = 'black'
        }
        sales.style.color = 'red'
        if (flag1) {
            axios({
                method: 'get',
                url: 'http://localhost:3000/saledesc',
                data: {

                }
            }).then((data) => {
                console.log(data.data);
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
                    const hot = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .hot')
                    const it = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .introduce')
                    if (data.data[i].hot === 2) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = '上新'
                            hot[i].style.backgroundColor = 'green'
                        }
                    }
                    if (data.data[i].hot === 0) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = ''
                            it[i].style.textIndent = '0'
                            hot[i].style.backgroundColor = 'transparent'
                        }
                    }
                }
                // 首页与详情页的切换
                var more_list = document.querySelectorAll('.more ul li')
                console.log(more_list);
                for (let i = 0; i < more_list.length; i++) {
                    more_list[i].onclick = function () {
                        const ids = this.id
                        localStorage.setItem('id', `${ids}`)
                        window.location.href = 'http://localhost:3000/details.html'
                    }
                }
            })
            flag1 = false
        } else {
            axios({
                method: 'get',
                url: 'http://localhost:3000/saleasc',
                data: {

                }
            }).then((data) => {
                console.log(data.data);
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
                    const hot = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .hot')
                    const it = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .introduce')
                    if (data.data[i].hot === 2) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = '上新'
                            hot[i].style.backgroundColor = 'green'
                        }
                    }
                    if (data.data[i].hot === 0) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = ''
                            it[i].style.textIndent = '0'
                            hot[i].style.backgroundColor = 'transparent'
                        }
                    }
                }
                // 首页与详情页的切换
                var more_list = document.querySelectorAll('.more ul li')
                for (let i = 0; i < more_list.length; i++) {
                    more_list[i].onclick = function () {
                        const ids = this.id
                        localStorage.setItem('id', `${ids}`)
                        window.location.href = 'http://localhost:3000/details.html'
                    }
                }
            })
            flag1 = true
        }

    }

    // 点击价格排序
    const up_low = document.querySelector('.nav .list-3 .up-down')
    const pri = document.querySelector('.index_wrapper .nav .list-3 .pri')
    const int = document.querySelector('.index_wrapper .nav .list-3 .int')
    var flag = true
    pri.onclick = function () {
        for (var j = 0; j < add_lis3.length; j++) {
            add_lis3[j].style.color = 'black'
        }
        this.style.color = 'red'

        if (flag) {
            axios({
                method: 'get',
                url: 'http://localhost:3000/pri',
                data: {
                }
            }).then((data) => {
                console.log(data.data);
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
                    const hot = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .hot')
                    const it = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .introduce')
                    if (data.data[i].hot === 2) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = '上新'
                            hot[i].style.backgroundColor = 'green'
                        }
                    }
                    if (data.data[i].hot === 0) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = ''
                            it[i].style.textIndent = '0'
                            hot[i].style.backgroundColor = 'transparent'
                        }
                    }
                }
                // 首页与详情页的切换
                var more_list = document.querySelectorAll('.more ul li')
                for (let i = 0; i < more_list.length; i++) {
                    more_list[i].onclick = function () {
                        const ids = this.id
                        localStorage.setItem('id', `${ids}`)
                        window.location.href = 'http://localhost:3000/details.html'
                    }
                }
            })
            flag = false;
            up_low.style.backgroundImage = 'url(' + '../img/index-img/low.png' + ')'
        } else {
            axios({
                method: 'get',
                url: 'http://localhost:3000/asc',
                data: {
                }
            }).then((data) => {
                console.log(data.data);
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
                    const hot = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .hot')
                    const it = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .introduce')
                    if (data.data[i].hot === 2) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = '上新'
                            hot[i].style.backgroundColor = 'green'
                        }
                    }
                    if (data.data[i].hot === 0) {
                        for (let j = 0; j < hot.length; j++) {
                            hot[i].innerHTML = ''
                            it[i].style.textIndent = '0'
                            hot[i].style.backgroundColor = 'transparent'
                        }
                    }
                }
                // 首页与详情页的切换
                var more_list = document.querySelectorAll('.more ul li')
                for (let i = 0; i < more_list.length; i++) {
                    more_list[i].onclick = function () {
                        const ids = this.id
                        localStorage.setItem('id', `${ids}`)
                        window.location.href = 'http://localhost:3000/details.html'
                    }
                }
            })
            flag = true
            up_low.style.backgroundImage = 'url(' + '../img/index-img/rise.png' + ')'
        }


    }

    // 点击上新
    const news = document.querySelector('.index_wrapper .nav .list-3 .new')
    news.onclick = function () {
        for (var j = 0; j < add_lis3.length; j++) {
            add_lis3[j].style.color = 'black'
        }
        this.style.color = 'red'
        axios({
            method: 'get',
            url: 'http://localhost:3000/new',
            data: {
            }
        }).then((data) => {
            console.log(data.data);
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
                const hot = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .hot')
                const it = document.querySelectorAll('.index_wrapper .more ul li .right_text .text .introduce')
                if (data.data[i].hot === 2) {
                    for (let j = 0; j < hot.length; j++) {
                        hot[i].innerHTML = '上新'
                        hot[i].style.backgroundColor = 'green'
                    }
                }
                if (data.data[i].hot === 0) {
                    for (let j = 0; j < hot.length; j++) {
                        hot[i].innerHTML = ''
                        it[i].style.textIndent = '0'
                        hot[i].style.backgroundColor = 'transparent'
                    }
                }
            }
            // 首页与详情页的切换
            var more_list = document.querySelectorAll('.more ul li')
            for (let i = 0; i < more_list.length; i++) {
                more_list[i].onclick = function () {
                    const ids = this.id
                    localStorage.setItem('id', `${ids}`)
                    window.location.href = 'http://localhost:3000/details.html'
                }
            }
        })
    }

    // 点击分类
    const cla_lis = document.querySelectorAll('.classf ul li')
    for (let i = 0; i < cla_lis.length; i++) {
        cla_lis[i].onclick = function () {
            const span = this.children[1].innerHTML
            localStorage.setItem('classfiy', `${span}`)
            window.location.href = 'http://localhost:3000/classfiy.html'
        }
    }

    // 点击我的订单跳转到我的订单页
    const my_order = document.querySelector('.index_wrapper .footer .list .my_order')
    my_order.onclick = function () {
        localStorage.setItem('status', 'next')
        window.location.href = 'http://localhost:3000/order.html'       
    }
}