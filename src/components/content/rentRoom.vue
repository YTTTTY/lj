<template>
  <div class="mod_cont">
    <ul class="lists mod_zufang active">
      <li class="pictext lazyload_ulog_action post_ulog" v-for="(item,index) in arr" :key="index">
        <router-link to="/details">
          <div class="flexbox">
            <div class="mod_media">
              <div class="media_main">
                <img
                  :src="item.img"
                  class="lazyload"
                >
              </div>
            </div>
            <div class="item_list">
              <div class="item_main">{{item.title}}</div>
              <div class="item_other text_cut" title="万润家园租房">{{item.name}}</div>
              <div class="tag_box">
                <span class="tag" style="background-color:edf0f3;color:849aae;">{{item.pricecen}}</span>
                <span class="tag" style="background-color:edf0f3;color:849aae;">随时看房</span>
              </div>
              <div class="item_minor">
                <span class="price_total">
                  <em>{{item.price.split(' ')[0]}}</em>
                  <span class="unit">元/月</span>
                </span>
              </div>
            </div>
          </div>
        </router-link>
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
            if (item.type == "租房") {
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
a,
button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.flexbox {
  display: flex;
}
.pictext .mod_media,
.pictext .mod_media .media_main {
  position: relative;
  width: 7.0625rem;
  height: 6.0625rem;
  text-align: center;
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
.house_lists .mod_media,
.house_lists .mod_media .media_main {
  width: 6.75rem;
}
.pictext .mod_media img {
  display: block;
  vertical-align: top;
}
img {
  max-width: 100%;
}
.pictext .mod_media .media_main img,
.pictext .mod_media img {
  width: 100%;
  height: 100%;
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
.text_cut {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pictext .item_minor,
.pictext .item_other {
  margin-bottom: 0.45rem;
  line-height: 1.2em;
  font-size: 1.2rem;
  color: #333;
  font-size: 0.75rem;
}
.house_lists .item_minor.text_cut,
.house_lists .item_other.text_cut {
  display: block;
}
.page_home .house_lists .item_other.text_cut {
  color: #9399a5;
}
.house_lists .tag_box {
  line-height: 0.9375rem;
  margin-top: -0.135rem;
  height: 1rem;
}
.page_home .house_lists .tag_box {
  margin-bottom: 0.375rem;
  overflow: hidden;
}
.tag,
.tag_a,
.tag_b,
.tag_c,
.tag_d,
.tag_e {
  display: inline-block;
  line-height: 1em;
  padding: 0.125rem 0.25rem;
  font-size: 0.6875rem;
  border-radius: 0.125rem;
}
.tag {
  background-color: #f4f7f9;
  color: #849aae;
}
.house_lists .tag_box > .tag {
  margin: 0 0.3125rem 0 0;
  line-height: 1em;
  vertical-align: top;
}
.pictext .item_minor,
.pictext .item_other {
  margin-bottom: 0.45rem;
  line-height: 1.2em;
  font-size: 1.2rem;
  color: #333;
  font-size: 0.75rem;
}
.house_lists .item_minor,
.house_lists .item_other {
  display: flex;
}
.pictext .item_list > div:last-child {
  margin-bottom: 0;
}
.pictext .item_main > *,
.pictext .item_minor > *,
.pictext .item_other > * {
  vertical-align: middle;
  margin-right: 0.3125rem;
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
</style>

