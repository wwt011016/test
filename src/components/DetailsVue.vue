<template>
  <div>
    <!-- 详情页区域开始 -->
    <div class="details-wrapper">
      <!-- 图片预览组件 -->
      <DetailsImg ref="pre_img" :img_ids="img_ids"></DetailsImg>
      <div class="details">
        <!-- 顶部照片区域 -->
        <div class="top-pic">
          <div class="box indefi">
            <!-- 调用轮播图组件 -->
            <!-- <IndexSwiper :imageLists="imageLists"
                         :ids="this.$route.query.val">
              <template>
                <div>
                  <img :src="require(`../assets/${item[index]}`)" >
                </div>
              </template>
            </IndexSwiper> -->
            <div class="swiper-container wwt-swiper"
                 ref="swiper">
              <!-- 轮播图容器 -->
              <div class="swiper-wrapper start">
                <!-- 轮播图 -->
                <div class="swiper-slide next"
                     v-for="(img, index) in imageList"
                     :key="index" >
                  <img :src="require(`../assets/${img}`)"
                       alt="" @click="pre_img(index)" ref="imgs_id"/>
                </div>
              </div>
              <!-- 小圆点 -->
              <div class="swiper-pagination idot"></div>
            </div>
          </div>
          <img src="../assets/img/details-img/festival.png"
               alt="">
        </div>
        <!-- 顶部照片区域 -->
        
        <!-- 隐藏导航栏区域开始 -->
        <div class="hidden-list"
             v-show="!hid_list">
          <div class="back"
               @click="back_index">
            <span></span>
          </div>
          <div class="list">
            <ul>
              <li :class="top_active === index ? 'current_list' : ''"
                  v-for="(item,index) in top_list"
                  :key="index"
                  @click="top_click(index)">
                <a href="javascript:;">{{item}}</a>
                <span></span>
              </li>
            </ul>
          </div>
          <div class="idot">
            <span></span>
          </div>
        </div>
        <!-- 隐藏导航栏区域结束 -->

        <!-- 隐藏返回栏 -->
        <div class="back-hidden"
             v-show="hid_list">
          <div class="to_left"
               @click="back_index">
            <span></span>
          </div>
          <!-- <div class="null"></div> -->
          <div class="idot-thre">
            <span></span>
          </div>
        </div>
        <!-- 隐藏返回栏 -->
        

        <!-- 价格区域开始 -->
        <div class="price">
          <!-- 钱 -->
          <div class="top-price">
            <p>￥<span>{{moreData.price}}.</span>00</p>
            <span class="one">
              <i class="cheaper"></i>
              降价提醒
            </span>
            <span>
              <i class="collection"></i>
              收藏
            </span>
          </div>
          <!-- 介绍文字 -->
          <div class="price-text">
            <div class="main">{{moreData.title}}
            </div>
            <div class="all-main">
              <p>【全店商品，跨店每满200-30，叠加店铺优惠，到手价低至8折。额外返现10%】下单享白条3期免息，满额送好礼，千城送装，详情咨询客服》》详情咨询客服》》》 </p>
              <i class="unfold"></i>
            </div>
          </div>
        </div>
        <!-- 价格区域结束 -->

        <!-- 优惠区域开始 -->
        <div class="pre">
          <span class="che">优惠</span>
          <span>跨店每{{moreData.discount}}</span>
          <span>满1000享9.5折</span>
          <i class="idot_three"></i>
        </div>
        <!-- 优惠区域结束 -->

        <!-- 服务区域开始 -->
        <div class="service-all">
          <!-- 状态栏区域-->
          <div class="top">
            <div class="choice">
              <h3 class="status">已选</h3>
              <div class="content">
                2.7m双+贵妃位（颜色样品寄送链接），科技布+乳胶坐垫【70%客户选择】，1个
              </div>
              <div class="three_i"></div>
            </div>
            <p>本商品支持京东保障服务、京东服务+，点击可选服务</p>
          </div>
          <div class="top">
            <div class="choice">
              <h3 class="status">送至</h3>
              <div class="content">
                北京朝阳区三环到四环之间
              </div>
              <div class="three_i"></div>
            </div>
            <p><span>现货</span>下单后9月23日前发货</p>
          </div>
          <!-- 送装区域 -->
          <div class="send">
            <div class="left">
              <h3>送装服务</h3>
            </div>
            <div class="right">
              <div class="provide">
                <span>此商品提供以下配送服务，请在确认订单页选择</span>
                <i></i>
              </div>
              <div class="install">
                <i></i>
                <p>送货上门安装￥<span>0.00</span></p>
              </div>
            </div>
          </div>

          <!-- 特权区域开始 -->
          <div class="privilege">
            <ul class="ellipsis-3">
              <li>
                <i></i>
                <span>商家发货&售后</span>
              </li>
              <li>
                <i></i>
                <span>7天无理由退货</span>
              </li>
              <li>
                <i></i>
                <span>特权保障</span>
              </li>
              <li>
                <i></i>
                <span>先行理赔</span>
              </li>
              <li>
                <i></i>
                <span>免费送装</span>
              </li>
              <li>
                <i></i>
                <span>三年质保</span>
              </li>
              <li>
                <i></i>
                <span>30天价保</span>
              </li>
              <li>
                <i></i>
                <span>极速审核</span>
              </li>
              <li>
                <i></i>
                <span>送运费险</span>
              </li>
              <li>
                <i></i>
                <span>可配送港澳台</span>
              </li>
            </ul>
            <div class="ido"></div>
          </div>
          <!-- 特权区域结束 -->

        </div>
        <!-- 服务区域结束 -->

        <!-- 评价区域开始 -->
        <div class="evaluation">
          <div class="all_feel">
            <!-- 上方评价区域 -->
            <div class="title">
              <span class="vertical"></span>
              <p class="first">评价<span>{{moreData.evaluate}}</span></p>
              <p class="second">好评率<span>{{moreData.pra_rate}}</span></p>
              <i></i>
            </div>
            <div class="list-feel">
              <ul>
                <li>感觉舒适(21)</li>
                <li>毫无色差(5)</li>
                <li>款式漂亮(5)</li>
                <li>外观漂亮(4)</li>
                <li>毫无异味(4)</li>
                <li>使用舒适(2)</li>
              </ul>
            </div>
            <!-- 上方评价区域 -->

            <!-- 买家秀区域开始 -->
            <div class="buyer">
              <div class="user">
                <img src="../assets/img/details-img/684d63c0d68e39b1.png"
                     alt="">
                <span class="user-name">y***n</span>
                <span class="score">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="time">2022-09-08</span>
              </div>
              <div class="user-text ellipsis-3">家里人很喜欢，款式跟颜色都很洋气</div>
              <div class="pic-list">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <img src="../assets/img/details-img/b3.webp"
                           alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="../assets/img/details-img/b2.webp"
                           alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="buyer cancel_bor">
              <div class="user">
                <img src="../assets/img/details-img/684d63c0d68e39b1.png"
                     alt="">
                <span class="user-name">y***n</span>
                <span class="score">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span class="time">2022-09-08</span>
              </div>
              <div class="user-text ellipsis-3">
                款式、颜色都很好看，就是我想要的效果和感觉，京东送货一向很快，本来还怕疫情会延迟发货啥的，没想到隔两天就到了，材质看起来挺高大上，不错</div>
              <div class="pic-list">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <img src="../assets/img/details-img/b5.webp"
                           alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="../assets/img/details-img/b6.webp"
                           alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="../assets/img/details-img/b7.webp"
                           alt="">
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="../assets/img/details-img/b8.webp"
                           alt="">
                    </a>
                  </li>
                </ul>
                <div class="button">
                  <div class="btn"></div>
                </div>
                <div class="look">
                  <a href="javascript:;">查看全部评价</a>
                </div>
              </div>
            </div>
            <!-- 买家秀区域结束 -->
          </div>
        </div>
        <!-- 问答区域开始 -->
        <div class="question">
          <div class="title bo_bor">
            <span class="vertical"></span>
            <p class="first">问答</p>
            <p class="second">暂无提问信息，去提问</p>
            <i></i>
          </div>
        </div>
        <!-- 问答区域结束 -->
        <!-- 评价区域结束 -->

        <!-- 店铺信息区域开始 -->
        <div class="store_all">
          <!-- 店铺logo区域 -->
          <div class="store-logo">
            <div class="logo-pic">
              <h3>
                <a href="javascript:;">
                  <img src="../assets/img/details-img/6c1d5a8e7bcd9d81.png.webp"
                       alt="">
                </a>
              </h3>
            </div>
            <div class="score">
              <h2>BOJO家具旗舰店</h2>
              <div class="star">
                <span>店铺星级</span>
                <span>
                  <img src="../assets/img/details-img/full_star@4x.34c22d69.png"
                       alt="">
                  <img src="../assets/img/details-img/full_star@4x.34c22d69.png"
                       alt="">
                  <img src="../assets/img/details-img/half_star@4x.86f1a284.png"
                       alt="">
                  <img src="../assets/img/details-img/empty_star@4x.94c3e3ef.png"
                       alt="">
                  <img src="../assets/img/details-img/empty_star@4x.94c3e3ef.png"
                       alt="">
                </span>
              </div>
            </div>
          </div>
          <!-- 粉丝详情区域 -->
          <div class="fans">
            <div class="number">
              <p><span>11</span>万</p>
              <p>粉丝人数</p>
            </div>
            <div class="all_store">
              <p>223</p>
              <p>全部商品</p>
            </div>
            <!-- 综合 -->
            <div class="comprehensive">
              <p>评价<span>9.34 | 高</span></p>
              <p>物流<span>9.47 | 高</span></p>
              <p>售后<span>9.09 | 中</span></p>
            </div>
          </div>
          <!-- 关注店铺区域 -->
          <div class="info">
            <div class="focus">
              <i></i>
              <span>关注店铺</span>
            </div>
            <div class="comein">
              <i></i>
              <span>进入店铺</span>
            </div>
          </div>
        </div>
        <!-- 店铺信息区域结束 -->

        <!-- 猜你喜欢区域开始 -->
        <div class="guess">
          <!-- 文字标题 -->
          <div class="title-guess">
            <span class="vertical"></span>
            <p class="first-guess">猜你喜欢</p>
          </div>
          <!-- 详情内容 -->
          <div class="details_pic">
            <div class="swiper-container wwt-swiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="details_list">
                    <ul>
                      <li>
                        <img src="../assets/img/details-img/b1.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">小米（MI）生态米家通用‼北欧布艺沙发客厅大小户型组合可拆洗现代简约乳胶科技布沙发整装
                          咖啡+浅灰(棉麻) 双人+贵妃(乳胶款)2.85米</p>
                        <p class="price">
                          ￥<span>3125.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b3.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">杜杜美家 沙发客厅小户型奶油风懒人沙发
                          豆腐块泡芙直排布艺沙发三人位现代简约客厅卧室家具家私M33#2.8米</p>
                        <p class="price">
                          ￥<span>2490.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">HODW 沙发 现代简约奶油风布艺沙发极简北欧小户型客厅拼色磨砂绒布混搭直排豆腐块沙发组合
                          【蛇形弹簧+实木框架】三人位 2.1m 德国进口磨砂绒+4cm乳胶座包</p>
                        <p class="price">
                          ￥<span>4520.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">【实体品质 质保十年】舍己屋 沙发 意式极简乳胶科技布沙发客厅组合轻奢布艺现代简约小户型沙发
                          四人位【3.2米】 【升级款30%选择】纳米科技布+海绵弹簧乳胶颗粒</p>
                        <p class="price">
                          ￥<span>3500.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b6.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">艾星 现代简约科技布奶油风ins网红北欧款直排小户型客厅布艺沙发 2.1米三人位直排
                          实木框架【乳胶+高回弹海绵】</p>
                        <p class="price">
                          ￥<span>3760.</span>00 </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="swiper-slide">
                  <div class="details_list">
                    <ul>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="details_list">
                    <ul>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b6.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b7.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="details_list">
                    <ul>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b8.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b3.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="details_list">
                    <ul>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b5.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b4.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="details_list">
                    <ul>
                      <li>
                        <img src="../assets/img/details-img/b2.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b1.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b3.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b6.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b7.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                      <li>
                        <img src="../assets/img/details-img/b8.webp"
                             alt="">
                        <p class="ellipsis-2 text-li">BOJO 意式极简布艺沙发现代简约客厅科技布baxter大象耳朵沙发 2米三人位 [整体
                          |单坐包] 磨砂布+乳胶坐垫【15%客户选择】</p>
                        <p class="price">
                          ￥<span>2810.</span>00 </p>
                      </li>
                    </ul>
                  </div>
                </div> -->
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <!-- 猜你喜欢区域结束 -->

        <!-- 商品介绍导航栏以及规格参数区域开始 -->
        <div class="introduce-list">
          <ul>
            <li :class="slots===index ? 'active_list' : ''"
                v-for="(item,index) in int_list"
                :key="index"
                @click="tab(index)">
              <p class="first">{{item}}</p>
              <span v-show="slots===index"></span>
            </li>
          </ul>
          <div class="content">
            <!-- banner区域开始 -->
            <div class="banner-pic"
                 v-show="slots===0">
              <!-- <img src="../assets/img/goods/aee4109b6cdd0185.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/goods/3fc1ba53f097d4d2.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/goods/4152af28442ef8e4.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/goods/415e886dabac1018.jpg!q70.dpg.webp"
               alt=""> -->

              <!-- 使用数据库中图片 -->
              <div class="wrap">
                <!-- <img src="../assets/img/details-img/1106b996953e389a.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/b10ebd859a7d556b.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/foige.webp"
                 alt="">
            <img src="../assets/img/details-img/3c063bfbb7ec9cc7.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/free.webp"
                 alt=""> -->
              </div>

              <div class="wrap2">
                <img src="../assets/img/details-img/b2.webp"
                     alt="">
                <!-- <img src="../assets/img/details-img/7e39f1bdb72eb3ad.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/e5d783537edcc1bc.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/9518d87ca2a9e486.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/b9b2d8640942efc9.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/f4c4aa5995bdd4ee.jpg!q70.dpg.webp"
                 alt="">
            <img src="../assets/img/details-img/0843c583d445abb9.jpg!q70.dpg.webp"
                 alt=""> -->
              </div>
              <img src="../assets/img/details-img/b2.webp"
                   alt="">
              <!-- <img src="../assets/img/details-img/8dc60c7d08c4792c.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/details-img/af63688b6cbeeb37.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/details-img/fd01b3fad49f5ecd.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/details-img/9148df15d22cb598.jpg!q70.dpg.webp"
               alt="">
          <img src="../assets/img/details-img/ac266e7dad125605.jpg!q70.dpg.webp"
               alt=""> -->
            </div>
            <!-- banner区域结束 -->
            <!-- 参数规格 -->
            <div class="params"
                 v-show="slots===1">
              <div class="clear">
                <div class="line-left"></div>
                <div class="text">包装清单</div>
                <div class="line-right"></div>
              </div>
              <div class="nothing">暂无</div>
              <div class="goods_params">
                <div class="line-left"></div>
                <div class="text">商品参数</div>
                <div class="line-right"></div>
              </div>
              <!-- 参数表格 -->
              <form action="">
                <table cellspacing="1">
                  <tr>
                    <td>商品编号</td>
                    <td>10030729899294</td>
                  </tr>
                  <tr>
                    <td colspan="2">主体</td>
                  </tr>
                  <tr>
                    <td>产品尺寸</td>
                    <td>长360cm;宽40cm</td>
                  </tr>
                  <tr>
                    <td>包装尺寸</td>
                    <td>长360cm;宽40cm</td>
                  </tr>
                  <tr>
                    <td>是否需要组装</td>
                    <td>不需要组装</td>
                  </tr>
                  <tr>
                    <td>产品净重</td>
                    <td>40kg</td>
                  </tr>
                  <tr>
                    <td>商品承重</td>
                    <td>40kg</td>
                  </tr>
                </table>
              </form>
            </div>
            <!-- 售后保障信息 -->
            <div class="sale_after"
                 v-show="slots===2">
              <p>三年质保</p>
              <div class="power">
                <div class="line-left"></div>
                <div class="text">权利声明</div>
                <div class="line-right"></div>
              </div>
              <p class="power_text">
                京东商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东商城重要的经营资源，未经许可，禁止非法转载使用。</p>
              <p><span>注：</span>本站商品信息均来自于厂商，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。</p>
              <div class="price_sale">
                <div class="line-left"></div>
                <div class="text">价格声明</div>
                <div class="line-right"></div>
              </div>
              <p><span>1.京东价：</span>京东价为商品的销售价，是您最终决定是否购买商品的依据。</p>
              <p><span>2.划线价：</span>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
              </p>
              <p><span>3.折扣：</span>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
              </p>
              <p><span>4.异常问题：</span>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
              </p>
            </div>
          </div>

        </div>
        <!-- 商品介绍导航栏区域结束 -->

        <!-- jd小图标区域 -->
        <div class="jd">
          <div class="icon"></div>
        </div>
        <!-- jd小图标区域 -->

        <!-- 底部区域开始 -->
        <div class="footer-shop">
          <ul>
            <li class="store">
              <i></i>
              <p>店铺</p>
            </li>
            <li class="service-fot">
              <i></i>
              <p>客服</p>
            </li>
            <li class="shop-car" @click="into_car">
              <i></i>
              <p>购物车</p>
            </li>
            <li class="join" @click="join_car">
              加入购物车
            </li>
            <li class="just">
              立即购买
            </li>
          </ul>
        </div>
        <!-- 底部区域结束 -->

        <!-- 加入购物车 -->
        <div class="shopping-cart" v-show="car_show">
          <div class="cart-setting"></div>
          <div class="cart">
            <div class="cart-top">
              <img src="../assets/img/goods/10e807f9813f082f.jpg"
                   alt="">
              <div class="top-cen">
                <p>
                  <i>¥</i>
                  <span>2300</span>
                  <i>.00</i>
                </p>
                <span>已选</span>
                <span class="active">1.2书桌灰色+椅子</span>
                <span>1个</span>
              </div>
              <div class="top-right">
                <i @click="close_car"></i>
              </div>
            </div>
            <div class="cart-cen">
              <div class="cen-top">
                <div class="top-title">颜色</div>
                <div class="top-list">
                  <ul>
                    <li class="active">1.2米亮光岩板书桌[灰色]</li>
                    <li>1.4米亮光岩板书桌</li>
                    <li>1.6米亮光岩板书桌[灰色]</li>
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
        </div>

        <!-- 加入购物车成功盒子 -->
        <div class="success">
          <p class="suc">
            <img src="../assets/img/goods/success.png"
                 alt="">
          </p>
          <p class="join_suc">加入购物车成功</p>
        </div>
      </div>
      
    </div>
    <!-- 详情页区域结束 -->
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import '../assets/css/detail.less'
import '../assets/css/swiper.min.css'
import '../assets/js/swiper.min.js'
import DetailsImg from '../components/DetailsImg'
// import IndexSwiper from '../components/IndexSwiper.vue'
export default {
  name: 'DeatilsVue',
  data() {
    return {
      // 规格参数等数据
      int_list: ['商品介绍', '规格参数', '售后保障'],
      slots: 0,
      // 顶部导航数据
      top_list: ['商品', '评价', '详情', '推荐'],
      top_active: 0,
      imageList: '',
      isInit: false,
      moreData: '',
      hid_list: true,
      img_ids:0,
      car_show:false
    }
  },
  components: { DetailsImg },
  methods: {
    // 规格参数选项卡点击事件
    tab(index) {
      this.slots = index
    },
    // 顶部定位导航选项卡
    top_click(index) {
      this.top_active = index
      if (index === 0) {
        window.scrollTo({
          top: document.querySelector('.indefi').offsetTop,
          behavior: 'smooth',
        })
      } else if(index === 1) {
        window.scrollTo({
          top: document.querySelector('.evaluation .all_feel .title').offsetTop-70,
          behavior: 'smooth',
        })
      } else if(index ===2 ) {
        window.scrollTo({
          top: document.querySelector('.guess .title-guess').offsetTop-60,
          behavior: 'smooth',
        })
      } else {
        window.scrollTo({
          top: document.querySelector('.introduce-list ul').offsetTop-58,
          behavior: 'smooth',
        })
      }
    },
    // 详情页获取轮播图数据
    get_swiper() {
      axios({
        method: 'get',
        url: 'http://localhost:3001/get_swiper2',
        params: {
          id: this.$route.query.val,
        },
      }).then((data) => {
        this.moreData = data.data[0]
        // console.log(data.data[0].banner_img)
        // console.log(data.data[0].banner_img.split(','))
        this.imageList = data.data[0].banner_img.split(',')
      })
    },
    // 返回首页
    back_index() {
      // this.$router.back()
      this.$router.replace({
        path:'/index/beauty'
      })
    },
    // 监听顶部滚动事件
    handleScroll() {
      //计算滚动条位置
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 0) {
        this.hid_list = false
      } else {
        this.hid_list = true
      }
    },
    // 图片预览点击事件
    pre_img(index) {
      this.img_ids = index
      localStorage.setItem('img_id',index)
      this.$refs.pre_img.output()
    },
    // 加入购物车点击事件
    join_car() {
      this.car_show = true
    },
    // 点击购物车进入购物车页面
    into_car() {
      this.$router.replace({
        path:'/shopping'
      })
    },
    // 关闭购物车弹窗
    close_car() {
      this.car_show = false
    }
  },
  watch: {
    // 等imageList值发生变化才会调用
    // 值发生变化就说明数据回来了
    imageList: {
      handler(imageList) {
        // 让第一个轮播图第一次不要new Swiper
        if (!imageList.length || this.isInit) return
        this.isInit = true
        // Vue响应式更新是异步更新，导致触发watch的时候，数据还未渲染成DOM元素
        // DOM元素还未生成
        // 等DOM渲染好才会触发
        this.$nextTick(() => {
          const mySwiper = new Swiper(this.$refs.swiper, {
            // 左右箭头
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // 小圆点
            pagination: {
              el: '.swiper-pagination',
            },
            // 自动轮播
            autoplay: {
              delay: 2000, // 自动轮播的时间
              disableOnInteraction: false, // 用户操作完轮播图后，再次开启自动轮播
            },
            // 无缝轮播
            loop: true,
          })

          mySwiper.el.onmouseenter = () => {
            mySwiper.autoplay.stop()
          }
          mySwiper.el.onmouseleave = () => {
            mySwiper.autoplay.start()
          }
        })
      },
      // 解决floor组件轮播图失效
      immediate: true,
    },
  },
  created() {},
  mounted() {
    this.get_swiper()
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang='less' scoped>
</style>
