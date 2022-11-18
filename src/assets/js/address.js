window.onload = function () {
    const back_confirm = document.querySelector('.address .account-top .account-back span')
    back_confirm.onclick = function () {
        window.location.href = 'http://localhost:3000/settlement.html'
    }

    // 进入地址页面将数据库中地址渲染到页面上
    axios({
        method: 'get',
        url: 'http://localhost:3000/address'
    }).then((data) => {
        // console.log(data.data);
        const address_area = document.querySelector('.address .address_area')
        for (let i = 0; i < data.data.length; i++) {
            address_area.innerHTML +=
                `
                <div class="flex" id="${data.data[i].id}">
                <div class="left">    
                    <div class="select">
                        <img src="../img/goods/common_account_adress-default.png" alt="">
                    </div>
                </div>
                <div class="middle" >
                    <p class="province">
                        <span class="default">默认</span><span>${data.data[i].address1}</span>
                    </p>
                    <h2>${data.data[i].address2}</h2>
                    <p class="user-name">
                        <span>${data.data[i].names}</span>
                        <span>${data.data[i].phone}</span>
                    </p>
                </div>
                <div class="right">
                    <div class="edit">
                        <img src="../img/goods/common_account_address-edit .png" alt="">
                    </div>
                </div>
            </div>
            `

            const span = document.querySelectorAll('.address .address_area .flex .middle .province .default')
            const imgs = document.querySelector('.address .address_area .flex .left .select img')
            if (data.data[i].defaults == 1) {
                span[i].innerHTML = '默认'
                span[i].style.background = 'red'
            } else if (data.data[i].defaults == 2) {
                span[i].innerHTML = '学校'
                span[i].style.background = 'blue'
            } else if (data.data[i].defaults == 3) {
                span[i].innerHTML = '公司'
                span[i].style.background = 'green'
            } else {
                span[i].innerHTML = ''
                span[i].style.background = ''
            }
            if (data.data[0]) {
                imgs.src = '../img/goods/common_account_address-current.png'
            }
        }

        // 选择不同地址呈现在结算页面上
        const flexs = document.querySelectorAll('.address .address_area .flex')
        for (let i = 0; i < flexs.length; i++) {
            flexs[i].onclick = function() {
                localStorage.setItem('ad_id',flexs[i].id)
                window.location.href = 'http://localhost:3000/settlement.html'
            }
        }
    })

    // 点击新增地址跳转到新增地址页面
    const add_address = document.querySelector('.address .new_address .btn') 
    add_address.onclick = function() {
        window.location.href = 'http://localhost:3000/add_address.html'
    }

}