<template>
  <div class="wrapper">
    <section class="page page_user">
      <div class="user_comp">
        <img src="/img/mine_head.png" class="img_head">
        <div class="user_num" v-if="!$cookie.get('user')">
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册</router-link>
        </div>
        <div class="user_num user_info" v-else>
          <span>欢迎你，{{$cookie.get('user').slice(0,2)}}****{{$cookie.get('user').slice(-2)}}</span>
        </div>
      </div>
      <div class="content_area">
        <div class="page_list">
          <ul data-mark="link_list">
            <li data-info="needlogin=1&amp;url=/my/favorHouse/">
              <a href="javascript:;">我关注的二手房</a>
              <span class="list_item"></span>
              <span class="right_arrow"></span>
            </li>
            <li data-info="needlogin=1&amp;url=/my/favorCommunity/">
              <a href="javascript:;">我关注的小区</a>
              <span class="list_item item_focus_community"></span>
              <span class="right_arrow"></span>
            </li>
            <li data-info="needlogin=1&amp;url=/my/favorNewHouse/">
              <a href="javascript:;">我关注的新房</a>
              <span class="list_item item_focus_new_house"></span>
              <span class="right_arrow"></span>
            </li>
            <li data-info="needlogin=1&amp;url=https://m.lianjia.com/chuzu/user/houselist">
              <a href="javascript:;">我关注的租房</a>
              <span class="list_item item_focus_zufang"></span>
              <span class="right_arrow"></span>
            </li>
            <li data-info="needlogin=0&amp;url=https://www.lianjia.com/zhuanti/miandarao">
              <a href="javascript:;">免电话营销</a>
              <span class="list_item item_shiled"></span>
              <span class="right_arrow"></span>
            </li>
          </ul>
        </div>
        <a
          class="logout"
          @click="remove"
          v-if="$cookie.get('user')"
        >退出登录</a>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  mounted() {
    return this.$store.commit("navigat", 1);
  },
  methods: {
    remove() {
      this.$cookie.delete("user");
      window.location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
}
.wrapper {
  min-height: 100%;
  background-color: #f5f5f5;
}

.wrapper {
  height: 100%;
  overflow: hidden;
}
.wrapper .page {
  background: #f5f5f5;
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
.page .user_comp {
  height: 15.5625rem;
  background-image: url("/img/mine_head_bg_new.png");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 2rem;
}
.page .user_comp .img_head {
  width: 3.375rem;
  border-radius: 3.375rem;
  margin-top: 1rem;
  height: 3.375rem;
}
.page .user_comp .user_num {
  margin-top: 3.15rem;
  color: #fff;
  font-size: 1rem;
}
.page .user_comp .user_num a {
  display: inline-block;
  width: 6.5rem;
  height: 2.25rem;
  border: 1px solid #fff;
  line-height: 2.25rem;
  margin: 0 0.5rem;
  border-radius: 2px;
  text-align: center;
  color: #fff;
}
.wrapper .page .content_area {
  min-height: 32rem;
  min-height: 57.1875vh;
}
.page .content_area .page_list {
  margin-top: 0.78125rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.page .content_area .page_list > ul {
  padding-left: 3.125rem;
}
.page .content_area .page_list > ul > li {
  border-bottom: 1px solid #e2e2e2;
  position: relative;
}
.page .content_area ul > li > a {
  color: #000;
  display: block;
  height: 3.1875rem;
  line-height: 3.1875rem;
}
.page .content_area ul > li > .list_item {
  position: absolute;
  left: -1.875rem;
  top: 0;
  bottom: 0;
  margin: auto;
  background-image: url(/img/list-icon.png?version=60b7e28422);
  width: 1rem;
  height: 1rem;
  background-size: cover;
}
.page .content_area ul > li > .right_arrow {
  float: right;
  border-right: 1px solid #999;
  border-top: 1px solid #999;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 0.6375rem;
  height: 0.6375rem;
  position: absolute;
  right: 0.75rem;
  top: 40%;
  margin-right: 1.25rem;
}
.page .content_area ul > li > .item_focus_community {
  background-position: 0 -1.0234375rem;
  height: 1.0625rem;
}
.page .content_area ul > li > .item_focus_new_house {
  background-position: 0 -2.0625rem;
}
.page .content_area ul > li > .item_focus_zufang {
  background-image: url(/img/focus_zufang.png?version=932d18fe3d);
  background-position: 0 0;
}
.page .content_area ul > li > .item_shiled {
  background-position: 0 -4.09375rem;
  height: 1.0625rem;
}
.page .content_area .logout {
  display: block;
  margin: 1.75rem 0.625rem 1rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: #fff;
  border: 1px solid #c5c5c5;
}
</style>

