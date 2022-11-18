window.onload = function () {
    const back_car = document.querySelector('.account-wrapper .account .account-top .account-back span')
    back_car.onclick = function () {
        window.location.href = 'http://localhost:3000/shopping.html'
    }
    let right_now = localStorage.getItem('right_now')
    let right_id = localStorage.getItem('right_id')
   /*  if (right_now) {
        axios({
            method: 'post',
            url: 'http://localhost:3000/right',
            data: {
                right_id,
            }
        }).then((data) => {
            console.log(data.data[0]);
            const sum_all = document.querySelector('.account-wrapper .account .store-sum .main-store ul')
            sum_all.innerHTML = ''
            let sum_price = localStorage.getItem('sum_price')
            let sum_price2 = 0
            const set_price = document.querySelector('.bot-bar .bot-price span')
            const set_price2 = document.querySelector('.money-goods .other .add-sum span')
            const set_price3 = document.querySelector('.money-goods .other ul li p span')
            const set_price4 = document.querySelector('.money-goods .other ul .esc .price span')
            const set_price5 = document.querySelector('.money-goods .other ul .esc .left .bo')
            const set_price6 = document.querySelector('.money-goods .other ul .esc .price .na').innerHTML

            // for (let i = 0; i < data.data[0].length; i++) {
            set_price3.innerHTML = data.data[0].price
            set_price4.innerHTML = data.data[0].discount.substr(-2)
            set_price5.innerHTML = data.data[0].discount

            sum_all.innerHTML +=
                `
                <li class="${data.data[0].id} big">
                <div class="pic">
                    <img src="${data.data[0].img1}" alt="">
                </div>
                <div class="main-text">
                    <p class="ellipsis">${data.data[0].title} </p>
                    <p></p>
                    <div class="price">
                        <p>￥<span>${data.data[0].price}</span>00
                            <i></i>
                            <span>1.00kgx${data.data[0].num2}</span>
                        </p>
                    </div>
                    <div class="jump-del">
                        <ul>
                            <li>支持7天无理由退货</li>
                            <li>30天价保</li>
                            <li>${data.data[0].discount}</li>
                        </ul>
                    </div>
                </div>
            </li>
            `

            sum_price2 += data.data[0].price * data.data[0].num2
            // }
            const set_price7 = document.querySelector('.money-goods .other ul .money .price span')
            set_price.innerHTML = sum_price2 - parseInt(set_price6) - parseInt(set_price5.innerHTML.substr(-2))
            set_price2.innerHTML = sum_price2 - parseInt(set_price6) - parseInt(set_price5.innerHTML.substr(-2))
            set_price7.innerHTML = sum_price2 - parseInt(set_price6) - parseInt(set_price5.innerHTML.substr(-2))
        })
    } else {
        
    } */

    // 进入结算页之后渲染页面
    axios({
        method: 'get',
        url: `http://localhost:3000/sum`,
    }).then((data) => {
        console.log(data);
        const sum_all = document.querySelector('.account-wrapper .account .store-sum .main-store ul')
        sum_all.innerHTML = ''
        let sum_price = localStorage.getItem('sum_price')
        let sum_price2 = 0
        const set_price = document.querySelector('.bot-bar .bot-price span')
        const set_price2 = document.querySelector('.money-goods .other .add-sum span')
        const set_price3 = document.querySelector('.money-goods .other ul li p span')
        const set_price4 = document.querySelector('.money-goods .other ul .esc .price span')
        const set_price5 = document.querySelector('.money-goods .other ul .esc .left .bo')
        const set_price6 = document.querySelector('.money-goods .other ul .esc .price .na').innerHTML

        for (let i = 0; i < data.data.length; i++) {
            set_price3.innerHTML = data.data[i].price
            set_price4.innerHTML = data.data[i].discount.substr(-2)
            set_price5.innerHTML = data.data[i].discount

            sum_all.innerHTML +=
                `
        <li class="${data.data[i].id} big">
        <div class="pic">
            <img src="${data.data[i].img}" alt="">
        </div>
        <div class="main-text">
            <p class="ellipsis">${data.data[i].title} </p>
            <p>${data.data[i].data_type}</p>
            <div class="price">
                <p>￥<span>${data.data[i].price_all}</span>.00
                    <i></i>
                    <span>1.00kgx${data.data[i].num}</span>
                </p>
            </div>
            <div class="jump-del">
                <ul>
                    <li>支持7天无理由退货</li>
                    <li>30天价保</li>
                    <li>${data.data[i].discount}</li>
                </ul>
            </div>
        </div>
    </li>
        `

            sum_price2 += data.data[i].price_all * data.data[i].num2
        }
        const set_price7 = document.querySelector('.money-goods .other ul .money .price span')
        set_price.innerHTML = sum_price2 - parseInt(set_price6) - parseInt(set_price5.innerHTML.substr(-2))
        set_price2.innerHTML = sum_price2 - parseInt(set_price6) - parseInt(set_price5.innerHTML.substr(-2))
        set_price7.innerHTML = sum_price2 - parseInt(set_price6) - parseInt(set_price5.innerHTML.substr(-2))

        // 点击提交订单
        const pay_now = document.querySelector('.account-wrapper .account .bot-bar .inline')
        const mask_pay = document.querySelector('.mask_pay')
        pay_now.onclick = function () {
            mask_pay.style.display = 'block'
        }

        // 点击确认
        const confrim = document.querySelector('.mask_pay .content .btn .confirm')
        const cancle = document.querySelector('.mask_pay .content .btn .cancle')
        // const pay_lis = document.querySelectorAll('.account-wrapper .account .store-sum .main-store ul .big')
        confrim.onclick = function () {
            localStorage.setItem('status', 'success')
            axios({
                method: 'get',
                url: `http://localhost:3000/confirm/1`,
            }).then((data) => {
                console.log(data);
            })
            window.location.href = 'http://localhost:3000/order.html'
        }
        // 点击取消
        cancle.onclick = function () {
            localStorage.setItem('status', 'fail')
            axios({
                method: 'get',
                url: `http://localhost:3000/cancle/3`,
            }).then((data) => {
                console.log(data);
            })
            window.location.href = 'http://localhost:3000/order.html'
        }
    })


    // 点击地址栏去更换地址
    const address = document.querySelector('.account-wrapper .account .address-account')
    address.onclick = function () {
        window.location.href = 'http://localhost:3000/address.html'
    }

    // 从地址页面点击过来渲染数据
    let ad_id = localStorage.getItem('ad_id')
    axios({
        method: 'get',
        url: `http://localhost:3000/address_change/${ad_id}`,
    }).then((data) => {
        console.log(data);
        const address3 = document.querySelector('.account-wrapper .account .address-account')
        address3.innerHTML =
            `
            <p class="province">
            <span class="default">默认</span><span>${data.data[0].address1}</span>
        </p>
        <h2>${data.data[0].address2}<i></i></h2>
        <p class="user-name">
            <span>${data.data[0].names}</span>
            <span>${data.data[0].phone}</span>
        </p>
        `

        const span = document.querySelectorAll('.account-wrapper .account .address-account .province .default')
        if (data.data[0].defaults == 1) {
            span[0].innerHTML = '默认'
            span[0].style.background = 'red'
        } else if (data.data[0].defaults == 2) {
            span[0].innerHTML = '学校'
            span[0].style.background = 'blue'
        } else if (data.data[0].defaults == 3) {
            span[0].innerHTML = '公司'
            span[0].style.background = 'green'
        } else {
            span[0].innerHTML = ''
            span[0].style.background = ''
        }
    })

}