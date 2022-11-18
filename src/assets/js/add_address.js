window.onload = function () {
    // 标签点击谁谁变色
    const area_lis = document.querySelectorAll('.add_address .tag .tag_list li')
    for (let i = 0; i < area_lis.length; i++) {
        area_lis[i].setAttribute('data-index', i + 1)
        area_lis[i].onclick = function () {
            localStorage.setItem('index_id', area_lis[i].getAttribute('data-index'))
            if (area_lis[i].className == '') {
                for (let i = 0; i < area_lis.length; i++) {
                    area_lis[i].className = ''
                    area_lis[i].style.color = '#000'
                }
                area_lis[i].className = 'bgc_blue'
                area_lis[i].style.color = '#fff'
            } else {
                area_lis[i].className = ''
                area_lis[i].style.color = '#000'
            }
        }
    }
    // 点击返回
    const back_address = document.querySelector('.add_address .account-top .account-back span')
    back_address.onclick = function () {
        window.location.href = 'http://localhost:3000/address.html'
    }

    // 点击保存地址
    const save = document.querySelector('.add_address .new_address .btn')
    save.onclick = function () {
        const names = document.querySelector('.add_address .user_info .name input').value
        const tel = document.querySelector('.add_address .user_info .tel input').value
        const area = document.querySelector('.add_address .user_info .area input').value

        const details = document.querySelector('.add_address .user_info .details input').value
        const index_id = localStorage.getItem('index_id')
        if (names != '' && tel != '' && area != '' && details != '' && index_id != '') {
            axios({
                method: 'post',
                url: 'http://localhost:3000/add_address',
                data: {
                    names,
                    tel,
                    area,
                    details,
                    index_id,
                }
            }).then((data) => {
                console.log(data);
                window.location.href = 'http://localhost:3000/address.html'
            })
        }

    }


    // 点击所在地区弹出省市区选择
    var province = ['北京市', '天津市', '上海市', '重庆市', '河北省', '江西省', '福建省', '广东省',];
    var city = [
        ['市辖区'],
        ['市辖区'],
        ['市辖区'],
        ['市辖区', '县'],
        ['石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市', '张家口市', '承德市', '沧州市', '廊坊市', '衡水市',],
        ['南昌市', '景德镇市', '萍乡市', '九江市', '新余市', '鹰潭市', '赣州市', '吉安市', '宜春', '抚州市', '上饶'],
        ['福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市', '龙岩市', '宁德市',],
        ['广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市',],

    ];
    var area = [
        [["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云区", "延庆区", "其他区"]],
        [["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "滨海新区", "宁河区", "静海区", "蓟州区", "其他区"]],
        [["黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明区", "其他区"]],
        [
            ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区", "璧山区", "铜梁区", "潼南区", "荣昌区", "开州区", "梁平区", "武隆区", "其他区"],
            ["城口县", "丰都县", "垫江县", "忠县", "云阳县", "奉节县", "巫山县", "巫溪县", "土家族自治县", "酉阳自治县",],
        ],
        [
            ["长安区", "桥西区", "新华区", "井陉矿区", "裕华区", "藁城区", "鹿泉区", "栾城区", "井陉县", "正定县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵县", "辛集市", "晋州市", "新乐市", "其他区"],
            ["路南区", "路北区", "古冶区", "开平区", "丰南区", "丰润区", "曹妃甸区", "滦县", "滦南县", "乐亭县", "迁西县", "玉田县", "遵化市", "迁安市", "其他区"],
            ["海港区", "山海关区", "北戴河区", "抚宁区", "青龙满族自治县", "昌黎县", "卢龙县", "北戴河新区", "其他区"],
            ["邯山区", "丛台区", "复兴区", "峰峰矿区", "肥乡区", "永年区", "临漳县", "成安县", "大名县", "涉县", "磁县", "邱县", "鸡泽县", "广平县", "馆陶县", "魏县", "曲周县", "邯郸冀南新区", "武安市", "其他区"],
            ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威县", "清河县", "临西县", "南宫市", "沙河市", "其他区"],
            ["竞秀区", "莲池区", "满城区", "清苑区", "徐水区", "涞水县", "阜平县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易县", "曲阳县", "蠡县", "顺平县", "博野县", "雄县", "保定白沟新城", "涿州市", "定州市", "安国市", "高碑店市", "其他区"],
            ["桥东区", "桥西区", "宣化区", "下花园区", "万全区", "崇礼区", "张北县", "康保县", "沽源县", "尚义县", "蔚县", "阳原县", "怀安县", "怀来县", "涿鹿县", "赤城县", "其他区"],
            ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "平泉市", "其他区"],
            ["新华区", "运河区", "沧县", "青县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献县", "孟村回族自治县", "沧州渤海新区", "泊头市", "任丘市", "黄骅市", "河间市", "其他区"],
            ["安次区", "广阳区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市", "其他区"],
            ["桃城区", "冀州区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景县", "阜城县", "衡水滨湖新区", "深州市", "其他区"],
        ],
        [
            ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建区", "南昌县", "安义县", "进贤县", "其他区"],
            ["昌江区", "珠山区", "浮梁县", "乐平市", "其他区"],
            ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其他区"],
            ["濂溪区", "浔阳区", "柴桑区", "武宁县", "修水县", "永修县", "德安县", "都昌县", "湖口县", "彭泽县", "瑞昌市", "共青城市", "庐山市"],
            ["渝水区", "分宜县", "其他区"],
            ["月湖区", "余江县", "贵溪市", "其他区"],
            ["章贡区", "南康区", "赣县区", "信丰县", "大余县", "上犹县", "崇义县", "安远县", "龙南县", "定南县", "全南县", "宁都县", "于都县", "兴国县", "会昌县", "寻乌县", "石城县", "瑞金市", "其他区"],
            ["吉州区", "青原区", "吉安县", "吉水县", "峡江县", "新干县", "永丰县", "泰和县", "遂川县", "万安县", "安福县", "永新县", "井冈山市", "其他区"],
            ["袁州区", "奉新县", "万载县", "上高县", "宜丰县", "靖安县", "铜鼓县", "丰城市", "樟树市", "高安市", "其他区"],
            ["临川区", "东乡区", "南城县", "黎川县", "南丰县", "崇仁县", "乐安县", "宜黄县", "金溪县", "资溪县", "广昌县", "其他区"],
            ["信州区", "广丰区", "上饶县", "玉山县", "铅山县", "横峰县", "弋阳县", "余干县", "鄱阳县", "万年县", "婺源县", "德兴市", "其他区"],
        ],
        [
            ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "闽侯县", "连江县", "罗源县", "闽清县", "永泰县", "平潭县", "福清市", "长乐市", "其他区"],
            ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其他区"],
            ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其他区"],
            ["梅列区", "三元区", "明溪县", "清流县", "宁化县", "大田县", "尤溪县", "沙县", "将乐县", "泰宁县", "建宁县", "永安市", "其他区"],
            ["鲤城区", "丰泽区", "洛江区", "泉港区", "惠安县", "安溪县", "永春县", "德化县", "金门县", "石狮市", "晋江市", "南安市", "其他区"],
            ["芗城区", "龙文区", "云霄县", "漳浦县", "诏安县", "长泰县", "东山县", "南靖县", "平和县", "华安县", "龙海市", "其他区"],
            ["延平区", "建阳区", "顺昌县", "浦城县", "光泽县", "松溪县", "政和县", "邵武市", "武夷山市", "建瓯市", "其他区"],
            ["新罗区", "永定区", "长汀县", "上杭县", "武平县", "连城县", "漳平市", "其他区"],
            ["蕉城区", "霞浦县", "古田县", "屏南县", "寿宁县", "周宁县", "柘荣县", "福安市", "福鼎市", "其他区"],
        ],
        [
            ["荔湾区", "越秀区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "从化区", "增城区", "其他区"],
            ["武江区", "浈江区", "曲江区", "始兴县", "仁化县", "翁源县", "乳源瑶族自治县", "新丰县", "乐昌市", "南雄市", "其他区"],
            ["罗湖区", "福田区", "南山区", "宝安区", "龙岗区", "盐田区", "龙华区", "坪山区", "其他区"],
            ["香洲区", "斗门区", "金湾区", "其他区"],
            ["龙湖区", "金平区", "濠江区", "潮阳区", "潮南区", "澄海区", "南澳县", "其他区"],
            ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其他区"],
            ["蓬江区", "江海区", "新会区", "台山市", "开平市", "鹤山市", "恩平市", "其他区"],
            ["赤坎区", "霞山区", "坡头区", "麻章区", "遂溪县", "徐闻县", "廉江市", "雷州市", "吴川市", "其他区"],
            ["茂南区", "电白区", "高州市", "化州市", "信宜市", "其他区"],
        ],
    ]
    // 获取元素
    var pro = document.querySelector('.add_address .address_mask .wrap_all .province');
    var citys = document.querySelector('.add_address .address_mask .wrap_all .city');
    var areas = document.querySelector('.add_address .address_mask .wrap_all .area');
    // 封装函数
    // a 是要清空的citys pro areas towns
    // b是需要遍历的数组 
    function fz(a, b) {
        a.innerHTML = '';
        b.forEach(function (j, j_index) {
            var op = new Option(j, j);
            a.add(op);
        })
    }
    // 遍历省
    province.forEach(function (i, index) {
        var op = new Option(i, i);
        pro.add(op);
    })
    //省的下标 循环遍历   注意：需要先遍历完之后才可以获取其下标
    var pro_index = pro.selectedIndex;
    // 利用省的下标去 遍历市
    city[pro_index].forEach(function (j, j_index) {
        var op = new Option(j, j);
        citys.add(op);
    })
    // 获取市的下标 
    var city_index = citys.selectedIndex;
    // 利用市的下标去 遍历区
    area[pro_index][city_index].forEach(function (k, k_index) {
        var op = new Option(k, k);
        areas.add(op);
    })
    // 获取区的下标
    var area_index = areas.selectedIndex;
    // 省的内容发生改变时
    pro.onchange = function () {
        pro_index = pro.selectedIndex;
        fz(citys, city[pro_index]);

        city_index = citys.selectedIndex;
        fz(areas, area[pro_index][city_index])

        area_index = areas.selectedIndex;
        // fz(towns, town[pro_index][city_index][area_index])
    }
    // 市的内容发生改变时
    citys.onchange = function () {
        city_index = citys.selectedIndex;
        fz(areas, area[pro_index][city_index])

        area_index = areas.selectedIndex;
        // fz(towns, town[pro_index][city_index][area_index])
    }
    // 当区的内容改变的时候
    areas.onchange = function () {
        area_index = areas.selectedIndex;
        // fz(towns, town[pro_index][city_index][area_index])
    }

    const area_innHTML = document.querySelector('.add_address .user_info .area input')
    const btn_confirm = document.querySelector('.add_address .address_mask .btn_confirm')
    const address_mask = document.querySelector('.add_address .address_mask')
    const choice = document.querySelector('.add_address .user_info .area')
    const area_text = document.querySelector('.add_address .user_info .area input')
    btn_confirm.onclick = function () {
        area_text.value = pro.value + citys.value + areas.value
        area_innHTML.value = area_text.value
        address_mask.style.display = 'none'
    }
    // 点击省市区区域弹出mask
    choice.onclick = function () {
        address_mask.style.display = 'block'
    }
}