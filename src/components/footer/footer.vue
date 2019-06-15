<template>
  <footer class="footer">
    <div class="nav">
      <span class="location">
        <h1 class="cur" title="广州手机链家网">
          <a href="https://m.lianjia.com/gz/">广州手机链家网</a>
        </h1>
      </span>
      <span class="location cur">
        <i class="location_sp"></i>
        <a href="/user/privacyprotocol">隐私声明</a>
      </span>
      <span class="location cur">
        <i class="location_sp"></i>
        <a target="_blank" href="https://img.ljcdn.com/beike/lianjia-web/1550576952648.png">营业执照</a>
      </span>
    </div>
    <div class="link_box">
      <div class="link_tit">
        <h3 class="li text_cut active" data-act="foot_nav" data-mark="foot_nav">链家分站</h3>
        <h3 class="li text_cut" data-act="foot_nav" data-mark="foot_nav">热门城市</h3>
      </div>
      <div class="link_cont">
        <ul class="gridbox col_3 contlists active clearfix" data-mark="foot_navs">
          <li class="box_col">
            <a href="http://m.lianjia.com/bj/">北京链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/cd/">成都链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/hz/">杭州链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/sh/">上海链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/tj/">天津链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/nj/">南京链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/qd/">青岛链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/gz/">广州链家</a>
          </li>
          <li class="box_col">
            <a href="http://m.lianjia.com/jn/">济南链家</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="info">
      <div class="icon_box">
        <a href="javascript:;" class="icon_iphone lazyload_ulog">iPhone客户端</a>
        <a href="javascript:;" class="icon_android lazyload_ulog">Android客户端</a>
      </div>
      <div class="copyright">
        <p class="company">链家网（北京）科技有限公司</p>
        <p class="record">网络经营许可证 京ICP备16057509号-2</p>
        <div class="record" style>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802024019"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
          >
            <img
              src="https://s1.ljcdn.com/hulk-web/static/m/images/common/beian.png?_v=20190612202019cff"
              style="float:left;"
            >
            <p
              style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#727373;"
            >京公网安备 11010802024019号</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
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
.footer,
.header {
  text-align: center;
  z-index: 10;
}
.footer {
  margin-top: 0.75rem;
  padding: 0 0.9375rem;
  background: #2f3130;
  color: #727373;
}
.footer .nav {
  height: 2rem;
  line-height: 2rem;
  text-align: left;
  border-bottom: 1px solid #3e403f;
  font-size: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.footer .location,
.footer .location a {
  color: #939494;
}
.footer .nav h1 {
  display: inline;
}
.footer .cur a {
  color: #727373;
}
a,
button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.footer .location_sp {
  display: inline-block;
  opacity: 0.5;
  border-left: 1px solid #999;
  height: 0.4375rem;
  margin: 0 0.46875rem;
}
.footer .cur a {
  color: #727373;
}
.link_box {
  padding: 1rem 0 0;
}
.link_box .link_tit {
  display: flex;
  height: 2rem;
  line-height: 2rem;
}
.text_cut {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text_cut {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.link_box .link_tit > h3 {
  color: #6e6e6e;
  position: relative;
  flex: 1;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #212121;
  margin: 0 0.5rem;
}
.link_box .link_tit > h3.active {
  background-color: #3c3f3d;
  color: #fff;
}
.link_box .link_tit > h3:first-child {
  margin-left: 0;
}
.link_box .link_tit > h3:last-child {
  margin-right: 0;
}
.link_box .link_cont {
  padding: 0.625rem 0;
}
.link_box .link_cont .contlists.active {
  display: block;
}
.gridbox .box_col {
  float: left;
  box-sizing: border-box;
  text-align: center;
}
.gridbox.col_3 .box_col {
  width: 33.33333%;
}
.link_box .link_cont .contlists > li {
  padding-left: 0.5rem;
  height: 1.875rem;
  line-height: 1.875rem;
  list-style-type: disc;
  list-style-position: inside;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.link_box .link_cont .contlists > li > a {
  color: #828383;
}
.footer .info {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.footer .icon_box {
  width: 7.8125rem;
  padding-top: 0.875rem;
  font-size: 0;
}
.footer .icon_android,
.footer .icon_iphone {
  display: inline-block;
  width: 3.75rem;
  height: 1.4375rem;
  background: url(/img/foot_sprite.png) 0 0 no-repeat;
  font-size: 0;
  background-size: 3.75rem 2.875rem;
  vertical-align: top;
  opacity: 0.32;
}
.footer .icon_android,
.footer .icon_iphone {
  display: inline-block;
  width: 3.75rem;
  height: 1.4375rem;
  background: url(/img/foot_sprite.png)
    0 0 no-repeat;
  font-size: 0;
  background-size: 3.75rem 2.875rem;
  vertical-align: top;
  opacity: 0.32;
}
.footer .copyright {
  flex: 1;
  padding-top: 0.75rem;
  text-align: right;
  font-size: 0.5625rem;
  line-height: 1.5;
}
</style>



