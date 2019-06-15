<template>
  <div class="mod_cont">
    <ul class="lists mod_ershoufang active">
      <li class="pictext" v-for="(item,index) in arr" :key="index">
        <router-link
          to="/details"
          class="a_mask post_ulog_search lazyload_ulog_search post_ulog_action lazyload_ulog_action"
        ></router-link>
        <div class="flexbox">
          <div class="mod_media">
            <div class="media_main">
              <img :src="item.img" class="lazyload">
              <span class="vr_item">
                <i></i>
              </span>
            </div>
          </div>
          <div class="item_list">
            <div class="item_main">{{item.title}}</div>
            <div class="item_other text_cut" title="金碧二手房">{{item.name}}</div>
            <div class="item_minor">
              <span class="price_total">
                <em>{{item.price}}</em>
                <span class="unit">万</span>
              </span>
              <span class="unit_price">{{item.pricecen}}</span>
            </div>
            <div class="tag_box">
              <span
                class="tag"
                style="color:rgb(255,255,255);background-color:rgba(48,114,246,1);"
              >必看好房</span>
              <span
                class="tag"
                style="color:rgb(89,171,253);background-color:rgba(89,171,253,0.15);"
              >地铁</span>
              <span
                class="tag"
                style="color:rgb(100,142,249);background-color:rgba(100,142,249,0.15);"
              >VR房源</span>
              <span
                class="tag"
                style="color:rgb(51,190,133);background-color:rgba(51,190,133,0.15);"
              >随时看房</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.getcontent();
  },
  methods: {
    getcontent() {
      this.$axios({
        method: "get",
        url: "https://www.easy-mock.com/mock/5d00e4e485f573592bce090e/lj"
      })
        .then(response => {
          response.data.data.home.forEach(item => {
            if (item.type == "二手房") {
              this.arr.push(item);
            }
          });
        })
        .catch(error => {
          console.log(error); //请求失败返回的数据
        });
    }
  }
};
</script>
<style lang="scss" scoped>
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
  width: 7.0625rem;
  height: 6.0625rem;
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
.page_home .vr_item {
  position: absolute;
  left: 0.375rem;
  bottom: 0.375rem;
  border: 0.03125rem solid hsla(0, 0%, 100%, 0.8);
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  z-index: 99;
}
.page_home .vr_item i {
  background: url(/img/vr-animation.png) no-repeat;
  background-size: 1.25rem auto;
  width: 1.25rem;
  height: 1.25rem;
  -webkit-animation: vrIcon 3.5s steps(53) infinite;
  animation: vrIcon 3.5s steps(53) infinite;
  display: block;
}
@keyframes vrIcon {
  0% {
    background-position: 0 0;
  }
  20% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}
</style>

