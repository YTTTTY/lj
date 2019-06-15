<template>
  <div class="main_start">
    <section class="search-container" data-mark="search-box">
      <div class="search animation">
        <div class="input-box animation post_ulog">
          <input type="search" class="animation" disabled>
          <div class="indicator animation">
            <i class="icon_search animation"></i>
            <span class="placeholder animation post_ulog_exposure_scroll">中海联睿品</span>
          </div>
        </div>
      </div>
    </section>
    <section class="hot-activities national">
      <div class="carousel">
        <div class="carousel-container">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="/img/newbanner1.jpg">
              </div>
              <div class="swiper-slide">
                <img src="/img/newbanner2.jpg">
              </div>
              <div class="swiper-slide">
                <img src="/img/newbanner3.jpg">
              </div>
              <div class="swiper-slide">
                <img src="/img/newbanner4.jpg">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="icons">
      <div
        class="icon-container post_ulog_exposure_scroll"
        data-ulog-exposure="xinfangm_show=10002_1"
        has_been_exposed="1"
      >
        <a class="icon-item flex-sub-center flex-main-center post_ulog" href="javascript:;">
          <img src="/img/phpuc1.png" class="icon-avatar lazyload">
          <span class="icon-text">全部楼盘</span>
        </a>
        <a class="icon-item flex-sub-center flex-main-center post_ulog" href="javascript:;">
          <img src="/img/phpuc2.png" class="icon-avatar lazyload">
          <span class="icon-text">在售楼盘</span>
        </a>
        <a class="icon-item flex-sub-center flex-main-center post_ulog" href="javascript:;">
          <img src="/img/phpuc3.png" class="icon-avatar lazyload">
          <span class="icon-text">最近开盘</span>
        </a>
        <a class="icon-item flex-sub-center flex-main-center post_ulog" href="javascript:;">
          <img src="/img/phpuc4.png" class="icon-avatar lazyload">
          <span class="icon-text">两居优选</span>
        </a>
        <a class="icon-item flex-sub-center flex-main-center post_ulog" href="javascript:;">
          <img src="/img/phpuc5.png" class="icon-avatar lazyload">
          <span class="icon-text">旅居</span>
        </a>
      </div>
    </section>
    <section class="list-search-nav">
      <section class="list-search-nav" data-mark="nav">
        <header class="tab_bar flexbox" data-mark="filter">
          <div class="filter flexbox flex_grow">
            <div class="tab_tit box_col post_ulog">
              <span class="tit">区域</span>
              <i class="icon_triangle_down"></i>
            </div>
            <div class="tab_tit box_col post_ulog">
              <span class="tit">价格</span>
              <i class="icon_triangle_down"></i>
            </div>
            <div class="tab_tit box_col post_ulog">
              <span class="tit">房型</span>
              <i class="icon_triangle_down"></i>
            </div>
            <div class="tab_tit box_col post_ulog">
              <span class="tit">更多</span>
              <i class="icon_triangle_down"></i>
            </div>
          </div>
          <div class="order post_ulog"></div>
        </header>
        <section class="selected-condition animation" style="display: none;">
          <ul class="flexbox condition-container animation flex-sub-center"></ul>
        </section>
      </section>
      <section class="page_home res-body">
        <new-froom/>
      </section>
    </section>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import newFroom from "./content/newRoom.vue";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: "auto",
      loopedSlides: 5,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    return this.$store.commit("navigat", 1);
  },
  components: {
    newFroom
  }
};
</script>
<style lang="scss" scoped>
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
section {
  background: #fff;
}
.search-container {
  width: 100%;
  padding: 0.625rem 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: padding 0.5s;
  -moz-transition: padding 0.5s;
  -ms-transition: padding 0.5s;
  -o-transition: padding 0.5s;
  transition: padding 0.5s;
  background-color: #f5f5f5;
}
.animation {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.search-container .search {
  height: 2rem;
  background: #fff;
  border-radius: 6.25rem;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  display: -webkit-flex;
  display: flex;
  transform: translate3d(0, 0, 0);
}
.search-container .search .input-box {
  padding: 0;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  transition: padding 0.5s, width 0.5s;
  background-clip: content-box;
  position: relative;
}
input,
input:focus,
textarea {
  -webkit-appearance: none;
  outline: 0;
}
input,
textarea {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-indent: 0;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-rendering: auto;
  border: none;
  box-shadow: none;
}
input[disabled],
textarea[disabled] {
  opacity: 1;
}
.search-container .search .input-box input {
  text-align: center;
  height: 2rem;
  width: 100%;
  background: #fff;
  -webkit-transition: padding 0.5s, width 0.5s, height 0.5s;
  -moz-transition: padding 0.5s, width 0.5s, height 0.5s;
  -ms-transition: padding 0.5s, width 0.5s, height 0.5s;
  -o-transition: padding 0.5s, width 0.5s, height 0.5s;
  transition: padding 0.5s, width 0.5s, height 0.5s;
  border-radius: 6.25rem;
  font-size: 0.75rem;
}
.search-container .search .input-box .indicator {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  -webkit-transition: left 0.5s, transform 0.5s;
  -moz-transition: left 0.5s, transform 0.5s;
  -ms-transition: left 0.5s, transform 0.5s;
  -o-transition: left 0.5s, transform 0.5s;
  transition: left 0.5s, transform 0.5s;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  max-width: 100%;
}
.search-container .input-box .indicator .icon_search {
  -webkit-transform: scale(1);
  transform: scale(1);
  width: 0.6875rem;
  height: 0.6875rem;
  background: url(/img/search.svg?version=fct4hmyomx) no-repeat;
  background-size: 100% 100%;
}
.animation {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.search-container .search .input-box .placeholder {
  color: #9c9fa1;
  font-size: 0.8125rem;
  line-height: 1;
  white-space: nowrap;
  padding-left: 0.25rem;
}
.carousel {
  position: relative;
}
.carousel-container {
  overflow: hidden;
  position: relative;
}
.icons {
  padding: 0 0.9375rem 1.375rem;
  margin-bottom: 0.625rem;
  box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.05);
}
.icons .icon-container:first-child {
  padding-top: 0;
}
.icons .icon-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-top: 0.9375rem;
}
.flex-main-center {
  -webkit-justify-content: center;
  justify-content: center;
}
.flex-sub-center {
  -webkit-align-items: center;
  align-items: center;
}
.icons .icon-container .icon-item {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 20%;
  box-sizing: border-box;
}
.icons .icon-item .icon-avatar {
  display: block;
  width: 1.75rem;
  height: 1.5625rem;
}
.tab_bar {
  background: #f9f9f9;
}
.flexbox {
  display: flex;
}
.tab_bar {
  height: 2.8125rem;
  line-height: 2.8125rem;
  background-color: #fff;
  border-bottom: none;
}
.flex_grow {
  -webkit-flex-grow: 1;
  flex-grow: 1;
}
.flexbox {
  display: flex;
}
.flexbox .box_col {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.tab_bar .tab_tit {
  position: relative;
  text-align: center;
  font-size: 0.875rem;
  overflow: hidden;
}
.tab_bar .tab_tit > .tit {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}
.icon_city_switch,
.icon_delete_history,
.icon_drop_btn,
.icon_go_back,
.icon_history,
.icon_info,
.icon_search,
.icon_triangle_down,
.icon_up_btn {
  background-image: url(/img/sprite1.svg?version=fct4hmyomx);
  background-repeat: no-repeat;
  background-size: 100%;
}
.icon_triangle_down {
  width: 0.5625rem;
  height: 0.5rem;
  background-position-y: -8.25rem;
  display: inline-block;
}
.icon_triangle_down {
  -webkit-transform: translate3D(0.3125rem, -0.125rem, 0);
  transform: translate3D(0.3125rem, -0.125rem, 0);
}
.tab_bar .tab_tit .icon_triangle_down {
  color: gray;
  vertical-align: middle;
}
.tab_bar .order {
  width: 2.875rem;
  flex-shrink: 0;
  text-align: center;
  position: relative;
}
.tab_bar .order:after {
  content: " ";
  position: absolute;
  left: 50%;
  top: 50%;
  height: 1rem;
  width: 1rem;
  background-image: url(/img/sprite1.svg?version=fct4hmyomx);
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-transform: translate3D(-0.5rem, -0.5rem, 0) scale(1.4);
  transform: translate3D(-0.5rem, -0.5rem, 0) scale(1.4);
  background-position-y: -23.875rem;
}
.res-body {
  padding: 0 1.25rem;
}
</style>

<style>
.national .swiper-container {
  white-space: nowrap;
  font-size: 0;
  text-align: center;
  padding-left: 1.1rem;
}
.national .swiper-slide {
  display: inline-block;
  width: calc(100vw - 2.3rem);
  height: calc(0.501492 * (100vw - 2.5rem));
  margin-top: 1.375rem;
  margin-bottom: 1.375rem;
  margin-right: 0.625rem;
  overflow: hidden;
  -webkit-border-radius: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.3125rem 0 rgba(0, 0, 0, 0.2);
}
.swiper-slide img {
  width: 100%;
  max-width: 100%;
  display: block;
  position: relative;
}
.national .swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 26px;
}
.national .swiper-pagination-bullet {
  width: 4px;
  height: 4px;
  opacity: 1;
  background: rgba(255,255,255,.4);
}
.national .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
  width: 8px;
  border-radius: 2px;
}
</style>


