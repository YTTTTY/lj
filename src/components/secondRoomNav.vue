<template>
  <div class="wrapper">
    <div class="main_start">
      <section class="page page_ershoufang page_ershoufang_index">
        <div class="content_area">
          <div class="dynamic_search_box">
            <div class="banner dynamic_group">
              <a href="/gz/ershoufang/search/" class="post_ulog" data-evtid="10523" data-ulog>
                <i class="icon_search_gray"></i>
                <input type="text" class="input" placeholder="请输入小区或商圈名~">
              </a>
              <div class="swiper-container ullists">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/img/secondbanner1.jpg">
                  </div>
                  <div class="swiper-slide">
                    <img src="/img/secondbanner2.jpg">
                  </div>
                  <div class="swiper-slide">
                    <img src="/img/secondbanner3.jpg">
                  </div>
                  <div class="swiper-slide">
                    <img src="/img/secondbanner4.jpg">
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mod_box recommand_mod_box">
          <div class="mod_tit">为您推荐</div>
          <div class="recommand_scroll_frame">
            <ul class="recommand_nav_ul" style="width: 33.3125rem;">
              <li>
                <a href="javascript:;" class="post_ulog">
                  <div class="mask"></div>
                  <img src="/img/secondnav1.jpg" class="lazyload">
                  <h3>日均超2千人抢看</h3>
                  <p>这小区入手价仅1字头</p>
                </a>
              </li>

              <li>
                <a
                  href="https://m.lianjia.com/subject/72140.h5/?dgsource=mershoutuiijan"
                  class="post_ulog"
                >
                  <div class="mask"></div>
                  <img src="/img/secondnav2.jpg" class="lazyload">
                  <h3>210万起！</h3>
                  <p>住城区80平三居</p>
                </a>
              </li>

              <li>
                <a href class="post_ulog">
                  <div class="mask"></div>
                  <img src="/img/secondnav3.jpg" class="lazyload">
                  <h3>选市区OR近郊区？</h3>
                  <p>优质大户型低至242万</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mod_box house_lists">
          <div class="tab_bar flexbox" data-mark="booth">
            <div class="tab_tit box_col q_district" data-mark="booth_area">
              <h2 class="tit">区域</h2>
              <i class="icon_triangle_down"></i>
            </div>
            <div class="tab_tit box_col q_price" data-mark="booth_price">
              <h2 class="tit">价格</h2>
              <i class="icon_triangle_down"></i>
            </div>
            <div class="tab_tit box_col q_frame" data-mark="booth_model">
              <h2 class="tit">房型</h2>
              <i class="icon_triangle_down"></i>
            </div>
            <div class="tab_tit box_col q_more" data-mark="booth_more">
              <h3 class="tit">更多</h3>
              <i class="icon_triangle_down"></i>
            </div>
          </div>
          <second-room/>
        </div>
      </section>
    </div>
    <footers/>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import secondRoom from "./content/secondRoom.vue";
import footers from "./footer/footer.vue";
export default {
  components: {
    secondRoom,
    footers
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 5000 //1秒切换一次
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    return this.$store.commit("navigat", 1);
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
.wrapper .page {
  background: #f5f5f5;
}
.page_ershoufang_index .dynamic_search_box {
  padding: 0;
}
.banner {
  position: relative;
  max-height: 18.75rem;
  padding-top: 28.5%;
  margin-top: 0.75rem;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.page_ershoufang_index .dynamic_search_box .dynamic_group {
  position: relative;
  margin: 0;
  background-color: #bbb;
  width: 100%;
  padding-top: 52.3%;
  overflow: hidden;
  z-index: 1;
}
.page_ershoufang_index .dynamic_search_box .dynamic_group > a {
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: 0;
  padding: 0 1.125rem;
  box-sizing: border-box;
}
.icon_arrow_right,
.icon_download,
.icon_fanhui,
.icon_fanhui2,
.icon_fanhui_b,
.icon_pic,
.icon_pull,
.icon_search,
.icon_search_b,
.icon_search_gray,
.icon_sort,
.icon_triangle_down,
.icon_triangle_up,
.icon_triangle_up_b,
.icon_user {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: -0.5rem;
  background-repeat: no-repeat;
  background-image: url(/img/sprite.svg?version=0b8607d688);
  background-size: 2rem 62.375rem;
  vertical-align: middle;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  font-size: 0;
}
.icon_search_gray {
  margin: -0.375rem;
  background-position: 0 -13.125rem;
  -webkit-transform: scale(0.625);
  transform: scale(0.625);
}
input[type="color"],
input[type="date"],
input[type="datetime-local"],
input[type="datetime"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="range"],
input[type="search"],
input[type="text"],
input[type="time"],
input[type="url"],
input[type="week"],
textarea {
  width: 100%;
  height: 2.1875rem;
  line-height: 2.1875rem;
  padding: 0 0.5rem;
  background-color: #fff;
  border: 1px solid #c5c5c5;
  font-size: 0.875rem;
  box-sizing: border-box;
  outline: none;
}
.page_ershoufang_index .dynamic_search_box input {
  height: 1.875rem;
  line-height: 1.875rem;
  background: #e8e8e9;
  margin: 0.75rem 0;
  position: relative;
  z-index: 2;
  float: left;
  padding-left: 1.6875rem;
  background-color: #fff;
  border-radius: 0.1875rem;
  font-size: 0.75rem;
  -webkit-appearance: none;
}
.page_ershoufang_index .dynamic_search_box .icon_search_gray {
  -webkit-transform: scale(0.45);
  transform: scale(0.45);
  left: 0.4rem;
  top: 0.45rem;
  position: absolute;
  top: 1rem;
  left: 1.425rem;
  z-index: 10;
}
.ullists {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.ullists img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
</style>
<style lang="scss">
.swiper-pagination-bullet-active {
  background-color: #00ae66;
}
.mod_box {
  margin-top: 0.75rem;
  padding: 0 0 0 1.25rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.mod_box,
.mod_box h3.mod_tit {
  border-bottom: 1px solid #e5e5e5;
}
.page_ershoufang_index .mod_box.recommand_mod_box {
  margin-top: -0.0625rem;
}
.page_ershoufang_index .mod_box.recommand_mod_box .mod_tit {
  color: #9c9fa1;
  font-size: 0.8125rem;
  margin: 0 0 0.6875rem;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_scroll_frame {
  overflow-x: auto;
  height: 6.75rem;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul {
  width: 100000rem;
  overflow: hidden;
  height: 5.6rem;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li {
  float: left;
  width: 10.125rem;
  height: 5.6rem;
  margin-right: 0.5625rem;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li {
  float: left;
  width: 10.125rem;
  height: 5.6rem;
  margin-right: 0.5625rem;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a {
  display: block;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  position: relative;
  padding-top: 1px;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a .mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
img {
  max-width: 100%;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a h3 {
  margin-top: 1.5625rem;
  font-size: 1rem;
  font-weight: 700;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a h3,
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a p {
  position: relative;
  z-index: 2;
}
.page_ershoufang_index .mod_box.recommand_mod_box .recommand_nav_ul li a p {
  margin-top: 0.125rem;
  font-size: 0.6875rem;
}
.mod_box {
  margin-top: 0.75rem;
  padding: 0 0 0 1.25rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.mod_box,
.mod_box h3.mod_tit {
  border-bottom: 1px solid #e5e5e5;
}
.house_lists {
  padding: 0 0 0 1.25rem;
}
.flexbox {
  display: flex;
}
.tab_bar {
  height: 2.75rem;
  line-height: 2.75rem;
  background-color: #fff;
}
.house_lists .tab_bar {
  margin-left: -1.25rem;
  border-bottom: 1px solid #ccc;
}
.flexbox .box_col {
  display: block;
  flex: 1;
}
.tab_bar .tab_tit {
  position: relative;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  overflow: hidden;
}
.tab_bar .tab_tit > .tit {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}
.house_lists .tab_bar .tab_tit > .tit {
  max-width: 70%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 100;
}
.icon_triangle_down {
  background-position: 0 -5.25rem;
}
.icon_triangle_down,
.icon_triangle_up {
  -webkit-transform: scale(0.35);
  transform: scale(0.35);
}
.tab_bar .tab_tit .icon_triangle_down {
  margin-left: -0.375rem;
  color: gray;
  vertical-align: middle;
}
</style>