window.onload = function () {
    // 选项卡点击
    const order_list = document.querySelectorAll('.order .nav_order ul li')
    for (let i = 0; i < order_list.length; i++) {
        order_list[i].onclick = function () {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            this.children[1].className = 'bgc_color'
            order_list[i].children[0].style.color = '#f2270c'
        }
    }


    // 点击返回结算页
    const back_order = document.querySelector('.order .car-top .back span')
    back_order.onclick = function () {
        window.location.href = 'http://localhost:3000/index.html'
    }

    // 进入订单页成功的
    let status = localStorage.getItem('status')
    const nav_list_finish = document.querySelector('.order .nav_order ul .finish')
    if (status == 'success') {
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_finish.children[1].className = 'bgc_color'
            nav_list_finish.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/success',
        }).then((data) => {
            const suc_list = document.querySelector('.order .store-sum .main-store ul')
            for (let i = 0; i < data.data.length; i++) {
                suc_list.innerHTML +=
                    `
            <li>
            <div class="pic">
                <img src="${data.data[i].img}" alt="">
            </div>
            <div class="main-text">
                <p class="ellipsis">${data.data[i].title} </p>
                <p>${data.data[i].data_type}</p>
                <div class="price">
                    <p>￥<span>${data.data[i].price_all}.</span>00
                    <span>件数X${data.data[i].num3}</span>
                    </p>
                </div>
                <div class="btn">
                    <div class="cancle">评价晒单</div>
                    <div class="pay">再来一单</div>
                </div>
            </div>
        </li>
                    `
            }
            // suc_list.innerHTML = ''

        })
    }
    // 进入订单页待付款的
    const nav_list_finish1 = document.querySelector('.order .nav_order ul .wait')
    if (status == 'fail') {
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_finish1.children[1].className = 'bgc_color'
            nav_list_finish1.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/wait',
        }).then((data) => {
            console.log(data);
            const suc_list = document.querySelector('.order .store-sum .main-store ul')
            for (let i = 0; i < data.data.length; i++) {
                suc_list.innerHTML +=
                    `
            <li >
            <div class="pic">
                <img src="${data.data[i].img}" alt="">
            </div>
            <div class="main-text">
                <p class="ellipsis">${data.data[i].title}</p>
                <p class="ellipsis">${data.data[i].data_type}</p>
                <div class="price">
                    <p>￥<span>${data.data[i].price_all}.</span>00
                    <span>件数X${data.data[i].num3}</span>
                    </p>
                </div>
                <div class="btn">
                    <div class=" ${data.data[i].id} cancle">取消支付</div>
                    <div class="pay">去支付</div>
                </div>
            </div>
        </li>
            `
            }

            const cancle_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .cancle')
            const pay_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .pay')
            // 点击取消
            for (let i = 0; i < cancle_btn.length; i++) {
                cancle_btn[i].onclick = function () {
                    const success_order = document.querySelector('.order .success')
                    const success_order_sapn = document.querySelector('.order .success .join_suc')
                    success_order.style.display = 'block'
                    success_order_sapn.innerHTML = '取消成功'
                    setTimeout(function () {
                        success_order.style.display = 'none'
                    }, 2000)
                    let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                    let data_type = cancle_btn[i].parentNode.parentNode.children[1].innerHTML
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/confirms`,
                        data: {
                            ids,
                            data_type,
                        }
                    }).then((data) => {
                        console.log(data);
                        const suc_list = document.querySelectorAll('.order .store-sum .main-store ul li')
                        suc_list[i].style.display = 'none'
                        // const title_list = document.querySelector('.order .store-sum .title-sum')
                        // title_list.style.display = 'none'
                        // const suc_list2 = document.querySelector('.order .store-sum')
                        // suc_list2.style.padding = '0'
                    })
                }
            }
            // 点击去支付
            for (let i = 0; i < cancle_btn.length; i++) {
                const success_order = document.querySelector('.order .success')
                pay_btn[i].onclick = function () {
                    let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                    let data_type = cancle_btn[i].parentNode.parentNode.children[1].innerHTML
                    success_order.style.display = 'block'
                    setTimeout(function () {
                        success_order.style.display = 'none'
                    }, 2000)
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/confirm2`,
                        data: {
                            ids,
                            data_type,
                        }
                    }).then((data) => {
                        console.log(data);
                        const suc_list = document.querySelectorAll('.order .store-sum .main-store ul li')
                        // const suc_list2 = document.querySelector('.order .store-sum')
                        // const title_list = document.querySelector('.order .store-sum .title-sum')
                        // title_list.style.display = 'none'
                        suc_list[i].style.display = 'none'
                        // suc_list2.style.padding = '0'
                    })
                }
            }
        })
    }

    // 全部
    const nav_list_alls = document.querySelector('.order .nav_order ul .all')
    if (status == 'next') {
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_alls.children[1].className = 'bgc_color'
            nav_list_alls.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/all_status',
        }).then((data) => {
            console.log(data);
            suc_list.innerHTML = ''
            for (let i = 0; i < data.data.length; i++) {
                let title1
                let title2
                if (data.data[i].status == 1) {
                    title1 = '评价晒单'
                    title2 = '再来一单'
                } else if (data.data[i].status == 2) {
                    title1 = '重新购买'
                    title2 = '已取消'
                } else if (data.data[i].status == 3) {
                    title1 = '取消支付'
                    title2 = '去支付'
                }
                suc_list.innerHTML +=
                    `
                    <li>
                    <div class="pic">
                        <img src="${data.data[i].img}" alt="">
                    </div>
                    <div class="main-text">
                        <p class="ellipsis">${data.data[i].title} </p>
                        <p class="ellipsis">${data.data[i].data_type}</p>
                        <div class="price">
                            <p>￥<span>${data.data[i].price_all}.</span>00
                            <span>件数X${data.data[i].num3}</span>
                            </p>
                        </div>
                        <div class="btn">
                            <div class="${data.data[i].id}  cancle">${title1}</div>
                            <div class="pay">${title2}</div>
                        </div>
                    </div>
                </li>
                    `

            }

            const suc_list2 = document.querySelector('.order .store-sum')
            suc_list2.style.padding = '0.3rem'

            const cancle_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .cancle')
            const pay_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .pay')
            // 点击取消
            for (let i = 0; i < cancle_btn.length; i++) {
                if (cancle_btn[i].innerHTML == '取消支付') {
                    cancle_btn[i].onclick = function () {
                        let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                        let data_type = cancle_btn[i].parentNode.parentNode.children[1].innerHTML
                        cancle_btn[i].innerHTML = '重新购买'
                        pay_btn[i].innerHTML = '已取消'
                        axios({
                            method: 'post',
                            url: `http://localhost:3000/confirms`,
                            data: {
                                ids,
                                data_type,
                            }
                        }).then((data) => {
                            console.log(data);
                        })
                    }
                }
            }

            // 点击去支付
            for (let i = 0; i < cancle_btn.length; i++) {
                pay_btn[i].onclick = function () {
                    let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                    let data_type = pay_btn[i].parentNode.parentNode.children[1].innerHTML
                    cancle_btn[i].innerHTML = '评价晒单'
                    pay_btn[i].innerHTML = '已完成'
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/confirm2`,
                        data: {
                            ids,
                            data_type,
                        }
                    }).then((data) => {
                        console.log(data);
                    })
                }
            }
        })
    }


    //点击全部时
    const nav_list_all = document.querySelector('.order .nav_order ul .all')
    const suc_list = document.querySelector('.order .store-sum .main-store ul')
    nav_list_all.onclick = function () {
        const suc_list2 = document.querySelector('.order .store-sum')
        suc_list2.style.padding = '0'
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_all.children[1].className = 'bgc_color'
            nav_list_all.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/all_status',
        }).then((data) => {
            console.log(data);
            suc_list.innerHTML = ''
            for (let i = 0; i < data.data.length; i++) {
                let title1
                let title2
                if (data.data[i].status == 1) {
                    title1 = '评价晒单'
                    title2 = '再来一单'
                } else if (data.data[i].status == 2) {
                    title1 = '重新购买'
                    title2 = '已取消'
                } else if (data.data[i].status == 3) {
                    title1 = '取消支付'
                    title2 = '去支付'
                }
                suc_list.innerHTML +=
                    `
                    <li>
                    <div class="pic">
                        <img src="${data.data[i].img}" alt="">
                    </div>
                    <div class="main-text">
                        <p class="ellipsis">${data.data[i].title} </p>
                        <p class="ellipsis">${data.data[i].data_type}</p>
                        <div class="price">
                            <p>￥<span>${data.data[i].price_all}.</span>00
                            <span>件数X${data.data[i].num3}</span>
                            </p>
                        </div>
                        <div class="btn">
                            <div class="${data.data[i].id}  cancle">${title1}</div>
                            <div class="pay">${title2}</div>
                        </div>
                    </div>
                </li>
                    `

            }

            const suc_list2 = document.querySelector('.order .store-sum')
            suc_list2.style.padding = '0.3rem'

            const cancle_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .cancle')
            const pay_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .pay')
            // 点击取消
            for (let i = 0; i < cancle_btn.length; i++) {
                if (cancle_btn[i].innerHTML == '取消支付') {
                    cancle_btn[i].onclick = function () {
                        const success_order = document.querySelector('.order .success')
                        const success_order_sapn = document.querySelector('.order .success .join_suc')
                        success_order.style.display = 'block'
                        success_order_sapn.innerHTML = '取消成功'
                        setTimeout(function () {
                            success_order.style.display = 'none'
                        }, 2000)
                        let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                        let data_type = cancle_btn[i].parentNode.parentNode.children[1].innerHTML
                        cancle_btn[i].innerHTML = '重新购买'
                        pay_btn[i].innerHTML = '已取消'
                        axios({
                            method: 'post',
                            url: `http://localhost:3000/confirms`,
                            data: {
                                ids,
                                data_type,
                            }
                        }).then((data) => {
                            console.log(data);
                        })
                    }
                }
            }

            // 点击去支付
            for (let i = 0; i < cancle_btn.length; i++) {
                pay_btn[i].onclick = function () {
                    let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                    let data_type = pay_btn[i].parentNode.parentNode.children[1].innerHTML
                    cancle_btn[i].innerHTML = '评价晒单'
                    pay_btn[i].innerHTML = '已完成'
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/confirm2`,
                        data: {
                            ids,
                            data_type,
                        }
                    }).then((data) => {
                        console.log(data);
                    })
                }
            }
        })
    }

    // 点击待付款
    nav_list_finish1.onclick = function () {
        const suc_list2 = document.querySelector('.order .store-sum')
        suc_list2.style.padding = '0'
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_finish1.children[1].className = 'bgc_color'
            nav_list_finish1.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/wait',
        }).then((data) => {
            console.log(data);
            const suc_list = document.querySelector('.order .store-sum .main-store ul')
            suc_list.innerHTML = ''
            for (let i = 0; i < data.data.length; i++) {
                suc_list.innerHTML +=
                    `
            <li>
            <div class="pic">
                <img src="${data.data[i].img}" alt="">
            </div>
            <div class="main-text">
                <p class="ellipsis">${data.data[i].title} </p>
                <p class="ellipsis">${data.data[i].data_type}</p>
                <div class="price">
                    <p>￥<span>${data.data[i].price_all}.</span>00
                    <span>件数X${data.data[i].num3}</span>
                    </p>
                </div>
                <div class="btn">
                    <div class="${data.data[i].id}  cancle">取消支付</div>
                    <div class="pay">去支付</div>
                </div>
            </div>
        </li>
            `
            }

            const suc_list2 = document.querySelector('.order .store-sum')
            suc_list2.style.padding = '0.3rem'

            const cancle_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .cancle')
            const pay_btn = document.querySelectorAll('.order .store-sum .main-store ul .btn .pay')
            // 点击取消

            for (let i = 0; i < cancle_btn.length; i++) {
                cancle_btn[i].onclick = function () {
                    const success_order = document.querySelector('.order .success')
                    const success_order_sapn = document.querySelector('.order .success .join_suc')
                    success_order.style.display = 'block'
                    success_order_sapn.innerHTML = '取消成功'
                    setTimeout(function () {
                        success_order.style.display = 'none'
                    }, 2000)
                    let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                    let data_type = cancle_btn[i].parentNode.parentNode.children[1].innerHTML
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/confirms`,
                        data: {
                            ids,
                            data_type,
                        }
                    }).then((data) => {
                        console.log(data);
                        const suc_list = document.querySelectorAll('.order .store-sum .main-store ul li')
                        suc_list[i].style.display = 'none'
                    })

                    const suc_list2 = document.querySelector('.order .store-sum')
                    suc_list2.style.padding = '0.3rem'
                }
            }
            // 点击去支付
            for (let i = 0; i < cancle_btn.length; i++) {
                pay_btn[i].onclick = function () {
                    let ids = cancle_btn[i].getAttribute('class').substr(0, 3)
                    let data_type = cancle_btn[i].parentNode.parentNode.children[1].innerHTML
                    const success_order = document.querySelector('.order .success')
                    success_order.style.display = 'block'
                    setTimeout(function () {
                        success_order.style.display = 'none'
                    }, 2000)
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/confirm2`,
                        data: {
                            ids,
                            data_type,
                        }
                    }).then((data) => {
                        console.log(data);
                        const suc_list = document.querySelectorAll('.order .store-sum .main-store ul li')
                        suc_list[i].style.display = 'none'

                        const suc_list2 = document.querySelector('.order .store-sum')
                        suc_list2.style.padding = '0.3rem'
                    })
                }
            }


        })
    }

    // 点击已完成
    nav_list_finish.onclick = function () {
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_finish.children[1].className = 'bgc_color'
            nav_list_finish.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/success',
        }).then((data) => {
            console.log(data);
            const suc_list = document.querySelector('.order .store-sum .main-store ul')
            suc_list.innerHTML = ''
            for (let i = 0; i < data.data.length; i++) {
                suc_list.innerHTML +=
                    `
            <li>
            <div class="pic">
                <img src="${data.data[i].img}" alt="">
            </div>
            <div class="main-text">
                <p class="ellipsis">${data.data[i].title} </p>
                <p class="ellipsis">${data.data[i].data_type}</p>
                <div class="price">
                    <p>￥<span>${data.data[i].price_all}.</span>00
                    <span>件数X${data.data[i].num3}</span>
                    </p>
                </div>
                <div class="btn">
                    <div class="cancle">评价晒单</div>
                    <div class="pay">再来一单</div>
                </div>
            </div>
        </li>
            `
            }
            const suc_list2 = document.querySelector('.order .store-sum')
            suc_list2.style.padding = '0.3rem'
        })
    }
    // 点击已取消
    const nav_list_cancle = document.querySelector('.order .nav_order ul .can')
    nav_list_cancle.onclick = function () {
        for (let i = 0; i < order_list.length; i++) {
            for (let i = 0; i < order_list.length; i++) {
                order_list[i].children[1].className = 'none'
                order_list[i].children[0].style.color = '#666'
            }
            nav_list_cancle.children[1].className = 'bgc_color'
            nav_list_cancle.children[0].style.color = '#f2270c'
        }
        axios({
            method: 'get',
            url: 'http://localhost:3000/cancles',
        }).then((data) => {
            console.log(data);
            const suc_list = document.querySelector('.order .store-sum .main-store ul')
            suc_list.innerHTML = ''
            for (let i = 0; i < data.data.length; i++) {
                suc_list.innerHTML +=
                    `
            <li>
            <div class="pic">
                <img src="${data.data[i].img}" alt="">
            </div>
            <div class="main-text">
                <p class="ellipsis">${data.data[i].title} </p>
                <p class="ellipsis">${data.data[i].data_type}</p>
                <div class="price">
                    <p>￥<span>${data.data[i].price_all}</span>.00
                    <span>件数X${data.data[i].num3}</span>
                    </p>
                </div>
                <div class="btn">
                    <div class="cancle">重新购买</div>
                    <div class="pay">已取消</div>
                </div>
            </div>
        </li>
            `
            }

            const suc_list2 = document.querySelector('.order .store-sum')
            suc_list2.style.padding = '0.3rem'
        })
    }


}