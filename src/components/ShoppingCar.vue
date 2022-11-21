<template>
  <div>
    <!-- 购物车区域开始 -->
    <div class="shop-car-wrapper">
      <div class="shop-car">
        <!-- 返回顶部 -->
        <div class="back_top"></div>

        <!-- 顶部购物车标题区域 -->
        <div class="car-top">
          <div class="back" @click="back_details">
            <span></span>
          </div>
          <div class="car-title">购物车</div>
          <div class="idot">
            <span></span>
          </div>
        </div>

        <!-- 地址区域 -->
        <div class="address">
          <i></i>
          <div class="add ellipsis">朝阳区三环到四环之间</div>
          <span class="edit">编辑商品</span>
        </div>

        <!-- 登录区域开始 -->
        <!-- <div class="car-login">
                登录后可同步账户购物车中的商品
                <span>登录</span>
            </div> -->
        <!-- 登录区域结束 -->

        <!-- 全部满减区域开始 -->
        <div class="count">
          <p class="all_num">全部<span>(0)</span></p>
          <p class="dis">跨店满减<span>(0)</span></p>
        </div>
        <!-- 全部满减区域结束 -->

        <!-- 选择商品区域开始 -->
        <div class="select select1">
          <!-- 店铺名信息 -->
          <div class="main-top">
            <i class="circle"></i>
                    <i class="house"></i>
                    <span>BOJO家具旗舰店</span>
                    <i class="arrow_right"></i>
          </div>

          <!-- 加入购物车的商品详情区域开始 -->
          <div class="join-det">
            <ul>
              <li>
                <i class="circle"></i>
                <div class="pic">
                  <img src="../assets/img/car-img/c1.webp"
                       alt="">
                </div>
                <div class="content">
                  <p class="ellipsis-2">
                    BOJO意式极简伸缩岩板餐桌椅组合北欧现代简约折叠两用可变方圆桌家用 1.3米餐桌+6椅(雪花白)
                  </p>
                  <div class="choice">
                    <span>1.3米餐桌+6椅(雪花白)</span>
                    <i></i>
                  </div>
                  <div class="jump">
                    <span>跨店</span>
                    <span>每满200减30</span>
                  </div>
                  <div class="pri">
                    <div class="num">
                      ￥<span>3150</span>.00
                    </div>
                    <div class="add-del">
                      <i class="del"></i>
                      <span>1</span>
                      <i class="add"></i>
                    </div>
                  </div>
                  <div class="delete">
                    <span>移入关注</span>
                    <span class="dels">删除</span>
                  </div>
                </div>
              </li>
              <li>
                <i class="circle"></i>
                <div class="pic">
                  <img src="../assets/img/car-img/589baee17469776e.png.webp"
                       alt="">
                </div>
                <div class="content">
                  <p class="ellipsis-2">
                    BOJO 现代简约意大利高端岩板书桌轻奢书桌书房意式极简书桌椅组合家用 1.2书桌[灰色+椅子 否
                  </p>
                  <div class="choice">
                    <span>1.2书桌[灰色+椅子，否</span>
                    <i></i>
                  </div>
                  <div class="jump">
                    <span>跨店</span>
                    <span>每满200减30</span>
                  </div>
                  <div class="pri">
                    <div class="num">
                      ￥<span>2300</span>.00
                    </div>
                    <div class="add-del">
                      <i class="del"></i>
                      <span>1</span>
                      <i class="add"></i>
                    </div>
                  </div>
                  <div class="delete">
                    <span>移入关注</span>
                    <span class="dels">删除</span>
                  </div>
                </div>
              </li>
              <li>
                <i class="circle"></i>
                <div class="pic">
                  <img src="../assets/img/car-img/589baee17469776e.png.webp"
                       alt="">
                </div>
                <div class="content">
                  <p class="ellipsis-2">
                    BOJO 轻奢岩板家用书房写字书桌现代简约台式电脑桌椅组合办公学习桌 1.6米书桌+配套书椅 否
                  </p>
                  <div class="choice">
                    <span>1.6米书桌+配套书椅，否</span>
                    <i></i>
                  </div>
                  <div class="jump">
                    <span>跨店</span>
                    <span>每满200减30</span>
                  </div>
                  <div class="pri">
                    <div class="num">
                      ￥<span>3021</span>.00
                    </div>
                    <div class="add-del">
                      <i class="del"></i>
                      <span>1</span>
                      <i class="add"></i>
                    </div>
                  </div>
                  <div class="delete">
                    <span>移入关注</span>
                    <span class="dels">删除</span>
                  </div>
                </div>
              </li>
              <li>
                <i class="circle"></i>
                <div class="pic">
                  <img src="../assets/img/car-img/589baee17469776e.png.webp"
                       alt="">
                </div>
                <div class="content">
                  <p class="ellipsis-2">
                    BOJO 轻奢岩板家用书房写字书桌现代简约台式电脑桌椅组合办公学习桌 1.6米书桌+配套书椅 否
                  </p>
                  <div class="choice">
                    <span>1.6米书桌+配套书椅，否</span>
                    <i></i>
                  </div>
                  <div class="jump">
                    <span>跨店</span>
                    <span>每满200减30</span>
                  </div>
                  <div class="pri">
                    <div class="num">
                      ￥<span>2999</span>.00
                    </div>
                    <div class="add-del">
                      <i class="del"></i>
                      <span>1</span>
                      <i class="add"></i>
                    </div>
                  </div>
                  <div class="delete">
                    <span>移入关注</span>
                    <span class="dels">删除</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 加入购物车的商品详情区域结束 -->
        </div>
        <!-- 选择商品区域结束 -->

        <!-- 选择商品区域开始 2-->
        <!-- <div class="select select2">
                <div class="main-top">
                    <i class="circle"></i>
                    <i class="house"></i>
                    <span>小王店铺</span>
                    <i class="arrow_right"></i>
                </div>

                <div class="join-det">
                    <ul>
                        <li>
                            <i class="circle"></i>
                            <div class="pic">
                                <img src="../assets/img/car-img/2ef1ff4e39cf1d90.jpg!q70.dpg.webp" alt="">
                            </div>
                            <div class="content">
                                <p class="ellipsis-2">
                                    BOJO意式极简伸缩岩板餐桌椅组合北欧现代简约折叠两用可变方圆桌家用 1.3米餐桌+6椅(雪花白)
                                </p>
                                <div class="choice">
                                    <span>1.3米餐桌+6椅(雪花白)</span>
                                    <i></i>
                                </div>
                                <div class="jump">
                                    <span>跨店</span>
                                    <span>每满200减30</span>
                                </div>
                                <div class="pri">
                                    <div class="num">
                                        ￥<span>3150</span>.00
                                    </div>
                                    <div class="add-del">
                                        <i class="del"></i>
                                        <span>1</span>
                                        <i class="add"></i>
                                    </div>
                                </div>
                                <div class="delete">
                                    <span>移入关注</span>
                                    <span class="dels">删除</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <i class="circle"></i>
                            <div class="pic">
                                <img src="../assets/img/car-img/3f11fea7a9fb7019.jpg!q70.dpg.webp" alt="">
                            </div>
                            <div class="content">
                                <p class="ellipsis-2">
                                    BOJO 现代简约意大利高端岩板书桌轻奢书桌书房意式极简书桌椅组合家用 1.2书桌[灰色+椅子 否
                                </p>
                                <div class="choice">
                                    <span>1.2书桌[灰色+椅子，否</span>
                                    <i></i>
                                </div>
                                <div class="jump">
                                    <span>跨店</span>
                                    <span>每满200减30</span>
                                </div>
                                <div class="pri">
                                    <div class="num">
                                        ￥<span>2300</span>.00
                                    </div>
                                    <div class="add-del">
                                        <i class="del"></i>
                                        <span>1</span>
                                        <i class="add"></i>
                                    </div>
                                </div>
                                <div class="delete">
                                    <span>移入关注</span>
                                    <span class="dels">删除</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> -->
        <!-- 选择商品区域结束 -->

        <!-- jd小图片区域 -->
        <div class="jd-pic">
          <img src="../assets/img/car-img/d92d1e829bf953da.png"
               alt="">
        </div>
        <!-- jd小图片区域 -->

        <!-- 可能你还想要 -->
        <div class="maybe">
          <div class="line-left"></div>
          <div class="may">可能你还想要</div>
          <div class="line-right"></div>
        </div>

        <!-- 购物车更多区域 -->
        <div class="more">
          <ul>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-9.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>

            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-7.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-6.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-10.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-5.jpg"
                     alt="">
              </div>
              <div class="rught_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-6.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-9.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/img/index-img/more-10.jpg"
                     alt="">
              </div>
              <div class="right_text">
                <div class="text">
                  <p>
                    <span class="hot">热销</span>
                    <span class="introduce">BOJO 意式极简科技布沙发客厅现代简约布艺沙发baxter大象耳朵带贵妃转角沙发
                      2.7m双+贵妃位（颜色样品寄送链接）科技布+乳胶坐垫【70%客户选择】</span>
                  </p>
                </div>
                <div class="price">
                  <i>￥</i><span>3255.<i>00</i></span>
                  <span class="poor">跨店每满200减30元</span>
                </div>
                <div class="nice">
                  <p>
                    <span>200+</span>评价
                    <span>好评100%</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 底部固定区域开始 -->
        <div class="footer-bar">
          <i class="car"></i>
          <span>全选</span>
          <div class="total">
            总计:￥<span>0.00</span>
          </div>
          <div class="settlement">
            去结算(<span>0</span>件)
          </div>
        </div>
        <!-- 底部固定区域结束 -->

      </div>
      <!-- 购物车区域结束 -->

    </div>
  </div>
</template>

<script>
import '../assets/css/shopping.less'
export default {
  data() {
    return {}
  },
  methods: {
    // 点击返回详情页
    back_details() {
      this.$router.replace({
        path:'/index/beauty'
      })
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang='stylus' scoped></style>
