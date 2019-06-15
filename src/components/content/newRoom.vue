<template>
  <div class="mod_cont">
    <ul class="lists mod_xinfang active">
      <li class="resblock-list-item recommend_log_info lazyload_ulog_action post_ulog" v-for="(item,index) in arr" :key="index">
        <router-link class="resblock-info" to="/details">
          <img
            :src="item.img"
            class="avatar lazyload"
          >
          <div class="main-info">
            <div class="resblock-name-line">
              <h3 class="name">{{item.title}}</h3>
              <span class="tag" style="color:#FB9252;">住宅</span>
              <span class="tag" style="color:#53CC9A;">在售</span>
            </div>
            <div class="resblock-location-line">{{item.pricecen.split(' ')[1]}}-{{item.pricecen.split(' ')[2]}}</div>
            <div class="resblock-tags-line">
              <span class="tag">{{item.tags.split(' ')[0]}}</span>
              <span class="tag">{{item.tags.split(' ')[1]}}</span>
              <span class="tag">{{item.tags.split(' ')[2]}}</span>
            </div>
            <div class="resblock-price">
              <span class="price_num">{{item.price.split(' ')[0]}}</span>
              <span class="price_bunch">{{item.price.split(' ')[1]}}</span>
              <span class="area">{{item.price.split(' ')[2]}}</span>
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
            if (item.type == "新房") {
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
.page_home .resblock-list-item {
  padding: 1.25rem 0;
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
.page_home .resblock-list-item .resblock-info {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.page_home .resblock-list-item .resblock-info .avatar {
  display: block;
  position: relative;
  width: 7.5625rem;
  height: 5rem;
  flex-shrink: 0;
}

img {
  max-width: 100%;
}
.page_home .resblock-list-item .resblock-info .main-info {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 1.125rem;
}
.page_home .resblock-list-item .resblock-info .main-info .resblock-name-line {
  display: flex;
  justify-content: flex-start;
}
.page_home
  .resblock-list-item
  .resblock-info
  .main-info
  .resblock-name-line
  .name {
  display: inline-block;
  font-size: 1rem;
  line-height: 1;
  color: #394043;
  margin-right: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1rem;
}
.page_home
  .resblock-list-item
  .resblock-info
  .main-info
  .resblock-name-line
  .tag {
  font-size: 0.6875rem;
  color: #9c9fa1;
  line-height: 1;
  display: flex;
  align-items: center;
  padding: 0.125rem 0.3125rem;
  background: hsla(204, 3%, 62%, 0.15);
  border-radius: 0.125rem;
  flex-shrink: 0;
  margin-right: 0.3125rem;
}
.page_home
  .resblock-list-item
  .resblock-info
  .main-info
  .resblock-location-line {
  font-size: 0.75rem;
  color: #6b7072;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-transform: translateY(0.0625rem);
  transform: translateY(0.0625rem);
  height: 1rem;
  line-height: 1rem;
  margin: 0.125rem 0;
}
.page_home .resblock-list-item .resblock-info .main-info .resblock-tags-line {
  height: 1.25rem;
  overflow: hidden;
  font-size: 0;
  margin-top: 0.1875rem;
  line-height: 1.25rem;
}
.page_home .resblock-list-item .resblock-info .main-info .resblock-price {
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #9c9fa1;
}
.page_home
  .resblock-list-item
  .resblock-info
  .main-info
  .resblock-price
  .price_num {
  color: #fa5741;
  line-height: 1;
  font-weight: 700;
  font-size: 0.9375rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.page_home
  .resblock-list-item
  .resblock-info
  .main-info
  .resblock-price
  .price_bunch {
  color: #fa5741;
  line-height: 1;
  font-weight: 700;
  font-size: 0.8125rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.page_home .resblock-list-item .resblock-info .main-info .resblock-price .area {
  font-size: 0.75rem;
  color: #9c9fa1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.page_home
  .resblock-list-item
  .resblock-info
  .main-info
  .resblock-tags-line
  .tag {
  font-size: 0.6875rem;
  color: #9c9fa1;
  border: 1px solid #e5e5e5;
  line-height: 0.75rem;
  border-radius: 0.125rem;
  padding: 0.125rem 0.3125rem;
  display: inline-block;
  margin: 0 0.25rem 0.25rem 0;
  background-color: #fff;
}
</style>


