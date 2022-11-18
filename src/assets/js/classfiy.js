window.onload = function () {
    const list_4 = document.querySelector('.index_wrapper .nav .more ul')
    const add_lis3 = document.querySelectorAll('.index_wrapper .nav .list-3 li')
    for (var a = 0; a < add_lis3.length; a++) {
        add_lis3[a].onclick = function () {
            for (var j = 0; j < add_lis3.length; j++) {
                add_lis3[j].style.color = 'black'
            }
            this.style.color = 'red'
        }
    }
    let address = localStorage.getItem('classfiy')

    axios({
        method: 'get',
        url: `http://localhost:3000/classfiy/:${address}`,
    }).then((data) => {
        console.log(data.data);
        for (let i = 0; i < data.data.length; i++) {
            list_4.innerHTML +=
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
            // 首页与详情页的切换
            var list_4s = document.querySelectorAll('.more ul li')
            for (let i = 0; i < list_4s.length; i++) {
                list_4s[i].onclick = function () {
                    const ids = this.id
                    localStorage.setItem('id', `${ids}`)
                    window.location.href = 'http://localhost:3000/details.html'
                }
            }

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
        const h2 = document.querySelector('.cla_hid h2')
        h2.innerHTML = `${data.data[0].classfiy}`
    })

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
                url: `http://localhost:3000/classfiydesc/:${address}`,
            }).then((data) => {
                console.log(data.data);
                list_4.innerHTML = ''
                for (let i = 0; i < data.data.length; i++) {
                    list_4.innerHTML +=
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
                var list_4s = document.querySelectorAll('.more ul li')
                for (let i = 0; i < list_4s.length; i++) {
                    list_4s[i].onclick = function () {
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
                url: `http://localhost:3000/classfiyasc/:${address}`,
            }).then((data) => {
                console.log(data.data);
                list_4.innerHTML = ''
                for (let i = 0; i < data.data.length; i++) {
                    list_4.innerHTML +=
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
                var list_4s = document.querySelectorAll('.more ul li')
                for (let i = 0; i < list_4s.length; i++) {
                    list_4s[i].onclick = function () {
                        const ids = this.id
                        localStorage.setItem('id', `${ids}`)
                        window.location.href = 'http://localhost:3000/details.html'
                    }
                }
            })
            flag1 = true
        }
    }


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
                url: `http://localhost:3000/classfiypridesc/:${address}`,
            }).then((data) => {
                console.log(data.data);
                list_4.innerHTML = ''
                for (let i = 0; i < data.data.length; i++) {
                    list_4.innerHTML +=
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
                var list_4s = document.querySelectorAll('.more ul li')
                for (let i = 0; i < list_4s.length; i++) {
                    list_4s[i].onclick = function () {
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
                url: `http://localhost:3000/classfiypriasc/:${address}`,
            }).then((data) => {
                console.log(data.data);
                list_4.innerHTML = ''
                for (let i = 0; i < data.data.length; i++) {
                    list_4.innerHTML +=
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
                var list_4s = document.querySelectorAll('.more ul li')
                for (let i = 0; i < list_4s.length; i++) {
                    list_4s[i].onclick = function () {
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
            url: `http://localhost:3000/classfiynew/:${address}`,
        }).then((data) => {
            console.log(data.data);
            list_4.innerHTML = ''
            for (let i = 0; i < data.data.length; i++) {
                list_4.innerHTML +=
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
            var list_4s = document.querySelectorAll('.more ul li')
            for (let i = 0; i < list_4s.length; i++) {
                list_4s[i].onclick = function () {
                    const ids = this.id
                    localStorage.setItem('id', `${ids}`)
                    window.location.href = 'http://localhost:3000/details.html'
                }
            }
        })
    }

    // 点击返回
    const back_cla = document.querySelector('.cla_hid .back')
    back_cla.onclick = function () {
        window.location.href = 'http://localhost:3000/index.html'
    }
}