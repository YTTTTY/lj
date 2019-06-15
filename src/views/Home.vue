<template>
  <div class="page page_home">
    <header class="home_header">
      <div class="top">
        <div class="box_col">
          <a href="/city/">
            <span class="switch_city">
              <em class="city">广州</em>
              <i class="icon_pull"></i>
            </span>
          </a>
        </div>
        <router-link to="/user" class="my" rel="nofollow">
          <i class="icon_user"></i>
        </router-link>
      </div>
      <div class="content">
        <div class="slogan" title="链上你未来的家 真房源如你所见">链上你未来的家 真房源如你所见</div>
        <a href="/gz/ershoufang/search/">
          <div class="search_box">
            <i class="icon_search_gray"></i>
            <input type="text" class="input" disabled placeholder="输入小区或商圈开始找房咯~">
          </div>
        </a>
      </div>
    </header>
    <div class="content_area">
      <div class="mod_box channel_nav">
        <div class="gridbox col_4 clearfix">
          <h2 class="box_col" title="二手房">
            <router-link
              to="/secondRoomNav"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=0"
            >
              <div class="icon_img">
                <img src="../images/menu1.png">
              </div>
              <div class="name">二手房</div>
            </router-link>
          </h2>
          <h2 class="box_col" title="新房">
            <router-link
              to="/newFoomNav"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=1"
            >
              <div class="icon_img">
                <img src="../images/menu2.png">
              </div>
              <div class="name">新房</div>
            </router-link>
          </h2>
          <h2 class="box_col" title="租房">
            <router-link
              to="/rentRoomNav"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=2"
            >
              <div class="icon_img">
                <img src="../images/menu3.png">
              </div>
              <div class="name">租房</div>
            </router-link>
          </h2>
          <h2 class="box_col" title="卖房">
            <a
              href="/gz/yezhu/"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=3"
            >
              <div class="icon_img">
                <img src="../images/menu4.png">
              </div>
              <div class="name">卖房</div>
            </a>
          </h2>
          <h2 class="box_col" title="海外">
            <a
              href="/i/"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=4"
            >
              <div class="icon_img">
                <img src="../images/menu5.png">
              </div>
              <div class="name">海外</div>
            </a>
          </h2>
          <h2 class="box_col" title="商业办公">
            <a
              href="//shang.lianjia.com/gz"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=5"
            >
              <div class="icon_img">
                <img src="../images/menu6.png">
              </div>
              <div class="name">商业办公</div>
            </a>
          </h2>
          <h2 class="box_col" title="找小区">
            <a
              href="/gz/xiaoqu/"
              class="inner post_ulog"
              data-evtid="10287"
              data-ulog="location=&amp;position=6"
            >
              <div class="icon_img">
                <img src="../images/menu7.png">
              </div>
              <div class="name">找小区</div>
            </a>
          </h2>
        </div>
      </div>
    </div>
    <div class="mod_box data_channel tool_list">
      <dl class="channel_box">
        <dt class="title">
          <a href="javascript:;">常用工具</a>
        </dt>
        <dd class="tool_list_wrap gridbox col_5 clearfix">
          <a href="/gz/gujia/?channel_id=1001" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav1.png">
            </span>
            <div>去估价</div>
          </a>
          <a href="/gz/jingjiren/" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav2.png">
            </span>
            <div>找经纪人</div>
          </a>
          <a href="/gz/wenda/" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav3.png">
            </span>
            <div>问答</div>
          </a>
          <a href="/gz/baike/" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav4.png">
            </span>
            <div>百科</div>
          </a>
          <a
            href="javascript:;"
            class="link box_col post_ulog"
            data-act="telphone"
            title="电话"
            data-query="tel=10109666"
            data-evtid="10539"
          >
            <span class="icon icon_img">
              <img src="../images/indnav5.png">
            </span>
            <div>客服电话</div>
          </a>
          <a href="/gz/tool.html?sub=3" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav6.png">
            </span>
            <div>购房资质</div>
          </a>
          <a href="/gz/tool.html?sub=4" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav7.png">
            </span>
            <div>最低首付</div>
          </a>
          <a href="/gz/chengjiao/" class="link box_col">
            <span class="icon icon_img">
              <img src="../images/indnav8.png">
            </span>
            <div>查成交</div>
          </a>
        </dd>
      </dl>
    </div>
    <div class="mod_box house_lists">
      <h3 class="mod_tit">
        <a>
          为您推荐
          <div class="right">
            <span
              class="gray mod_tab mod_ershoufang lazyload_ulog_action post_ulog"
              @click="roomnum='second-room',roomactive=1"
              :class="roomactive==1?'active':''"
            >二手房</span>
            <span
              class="gray mod_tab mod_xinfang lazyload_ulog_action post_ulog"
              @click="roomnum='new-room',roomactive=2"
              :class="roomactive==2?'active':''"
            >新房</span>
            <span
              class="gray mod_tab mod_zufang lazyload_ulog_action post_ulog"
              @click="roomnum='rent-room',roomactive=3"
              :class="roomactive==3?'active':''"
            >租房</span>
          </div>
        </a>
      </h3>
      <component :is="roomnum"></component>
    </div>
    <lj-footer/>
  </div>
</template>
<script>
import Vue from "vue";
import secondRoom from "../components/content/secondRoom.vue";
import newRoom from "../components/content/newRoom.vue";
import rentRoom from "../components/content/rentRoom.vue";
import ljFooter from "../components/footer/footer.vue";

export default {
  data() {
    return {
      roomactive: 1,
      roomnum: "second-room"
    };
  },
  components: {
    secondRoom,
    newRoom,
    rentRoom,
    ljFooter
  },
  methods: {},
  mounted() {
    return this.$store.commit("navigat", 0);
  }
};
</script>

<style lang="scss" scoped>
.home_header {
  width: 100%;
  height: 14.0625rem;
  line-height: 14.0625rem;
  background: url("../images/head_bg.jpg") 50% no-repeat;
  background-size: cover;
  color: #fff;
}
.home_header .top {
  display: flex;
  height: 2.8125rem;
  line-height: 2.8125rem;
  padding: 0 0.25rem 0 0.9375rem;
  box-sizing: border-box;
}
.home_header .box_col {
  flex: 1;
}
.home_header .switch_city {
  display: inline-block;
  padding: 0 0.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.75rem;
  vertical-align: middle;
  text-align: center;
}
.home_header .switch_city * {
  vertical-align: middle;
}
.home_header .switch_city .city {
  font-size: 0.8125rem;
  color: #fff;
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
.icon_pull {
  background-position: 0 -10.5rem;
  -webkit-transform: scale(0.36, 0.42);
  transform: scale(0.36, 0.42);
}
.home_header .app,
.home_header .my {
  display: inline-block;
  width: 2.5rem;
  height: 100%;
  line-height: 1em;
  padding-top: 0.5rem;
  font-size: 0.75rem;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}
.header .header_back:after,
.header .icon_pull,
.header .icon_user,
.header .logo,
.home_header .icon_user {
  font-size: 0;
  display: inline-block;
  background-image: url(/img/sprite_new.svg?version=fbfaa12fa5);
  background-repeat: no-repeat;
  background-position: 0 0;
  -webkit-transform: none;
  transform: none;
}
.home_header .icon_user {
  width: 1.8rem;
  height: 1.8rem;
  background-size: 1.8rem;
  background-position: 0 -14.9625rem;
  margin: 0;
}
.home_header .content {
  position: absolute;
  width: 100%;
  height: 11.25rem;
}
.home_header .slogan {
  position: absolute;
  width: 12.625rem;
  height: 3.875rem;
  background: url(/img/head_slogan.png?version=0d0f8a8e4a)
    50% no-repeat;
  background-size: 100%;
  font-size: 0;
  top: 1rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.search_box {
  display: block;
  position: relative;
  margin: 0.9375rem 0.9375rem 0;
  height: 2.1875rem;
  padding-left: 1.425rem;
  border-radius: 0.125rem;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  background: #fff;
}
.home_header .search_box {
  position: absolute;
  width: auto;
  bottom: 0.25rem;
  left: 0.9375rem;
  right: 0.9375rem;
  background: #fff;
  border: 0;
  margin: 0.75rem 0;
}
.icon_search_gray {
  margin: -0.375rem;
  background-position: 0 -13.125rem;
  -webkit-transform: scale(0.625);
  transform: scale(0.625);
}
.search_box .icon_search,
.search_box .icon_search_gray {
  position: absolute;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  left: 0.4rem;
  top: 0.45rem;
}
.home_header .search_box .icon_search_gray {
  position: absolute;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  left: 0.4rem;
  top: 0.45rem;
}
input[disabled],
textarea[disabled] {
  opacity: 1;
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
.search_box .input {
  margin-right: 0.125rem;
  border: 0;
  vertical-align: top;
}
.wrapper .page .content_area .mod_box:first-child {
  margin-top: 0;
  border-top: 0;
}

.page_home .mod_box {
  padding-right: 1.25rem;
}
.channel_nav {
  padding: 0.3125rem 0.625rem 1.25rem;
  margin-top: 0;
}
.mod_box,
.mod_box h3.mod_tit {
  border-bottom: 1px solid #e5e5e5;
}
.mod_box {
  margin-top: 0.75rem;
  padding: 0 0 0 1.25rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.gridbox.col_4 .box_col {
  width: 25%;
}

.gridbox .box_col {
  float: left;
  box-sizing: border-box;
  text-align: center;
}
.channel_nav .box_col > a {
  display: block;
}
.page_home .channel_nav .icon_bg,
.page_home .channel_nav .icon_img {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 0.6875rem;
}
img {
  max-width: 100%;
}
.channel_nav .name {
  margin-top: 0;
  color: #222;
}
.page_home .mod_box {
  padding-right: 1.25rem;
}

.data_channel {
  padding: 0 0 0 1.25rem;
}
.data_channel .title {
  position: relative;
  height: 3.4375rem;
  line-height: 3.4375rem;
  border-bottom: 1px solid #e5e5e5;
}
.data_channel .title a {
  display: block;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
}
.tool_list_wrap {
  margin-left: -1.2rem;
  padding: 1.25rem 0 0;
}
.gridbox.col_5 .box_col {
  width: 20%;
}

.tool_list_wrap .link {
  margin-bottom: 1.25rem;
}
.gridbox .box_col {
  float: left;
  box-sizing: border-box;
  text-align: center;
}
.channel_box .icon_img {
  display: inline-block;
  width: 2rem;
  height: 2rem;
}

.channel_box .icon {
  -webkit-transform: scale(0.78125);
  transform: scale(0.78125);
  margin: 0;
}
.channel_nav {
  padding: 0.3125rem 0.625rem 1.25rem;
  margin-top: 0;
}

.mod_box h3.mod_tit {
  position: relative;
  height: 3.4375rem;
  line-height: 3.4375rem;
  color: #333;
  font-size: 1rem;
  font-weight: 700;
}
.page_home .mod_tit .right {
  float: right;
  display: inline-block;
  font-weight: 400;
}
.page_home .mod_tit .mod_tab {
  margin-left: 0.72rem;
}
.page_home .mod_tit .gray {
  font-size: 0.81rem;
  color: #9fa3a5;
}
.page_home .mod_tit .active {
  color: #00ae65;
}
.mod_box .mod_cont {
  padding: 0;
  line-height: 2;
}
.page_home .mod_cont .active {
  display: block;
}
.house_lists .mod_cont .pictext {
  padding: 1.25rem 1.25rem 1.25rem 0;
  border-bottom: 1px solid #e5e5e5;
}

ol.lists li,
ul.lists li {
  background-color: #fff;
}
.pictext {
  position: relative;
}
.pictext .a_mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.flexbox {
  display: flex;
}
.house_lists .mod_media,
.house_lists .mod_media .media_main {
  width: 6.75rem;
}

.pictext .mod_media,
.pictext .mod_media .media_main {
  position: relative;
  width: 5.0625rem;
  height: 5.0625rem;
  text-align: center;
}
.pictext .mod_media .media_main img,
.pictext .mod_media img {
  width: 100%;
  height: 100%;
}

.pictext .mod_media img {
  display: block;
  vertical-align: top;
}
.pictext .item_list {
  display: block;
  flex: 1;
  padding-left: 1.25rem;
  overflow: hidden;
}
.page_home .pictext .item_main {
  max-height: 2.4rem;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}
.pictext .item_main {
  margin-bottom: 0.45rem;
  line-height: 1.2em;
  overflow: hidden;
  font-size: 1rem;
  color: #394043;
}
.page_home .house_lists .item_other.text_cut {
  color: #9399a5;
}
.text_cut {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.house_lists .item_minor .price_total,
.house_lists .item_other .price_total {
  color: #fa5741;
  font-size: 0.9375rem;
  font-weight: 600;
  white-space: nowrap;
}
.house_lists .item_minor .price_total .unit,
.house_lists .item_other .price_total .unit {
  font-size: 0.8125rem;
  margin-left: 0.125rem;
}
.house_lists .item_minor .unit_price,
.house_lists .item_other .unit_price {
  color: #9c9fa1;
  font-size: 0.6875rem;
}
.house_lists .tag_box > .tag {
  margin: 0 0.3125rem 0 0;
  line-height: 1em;
  vertical-align: top;
}
.house_lists .tag_box {
  line-height: 0.9375rem;
  margin-top: -0.135rem;
  height: 1rem;
}
</style>

