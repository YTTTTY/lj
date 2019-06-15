<template>
  <header class="header header_white" v-if="headershow">
    <div class="flexbox left">
      <a href="javascript:;" class="header_back" @click="routerback"></a>
      <a href="/city/" class="city_wrap">
        <span class="switch_city">
          <em class="city">广州</em>
          <i class="icon_pull"></i>
        </span>
      </a>
    </div>
    <router-link to="/" class="logo_wrap center">
      <span class="logo">链家网</span>
    </router-link>
    <router-link to="/user" class="my right">
      <i class="icon_user"></i>
    </router-link>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  },
  computed: {
    headershow() {
      return this.$store.state.navigation;
    }
  }
  // mounted() {
  //   return this.$store.commit("navigat", 0);
  // },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 3.125rem;
  line-height: 3.125rem;
  padding: 0 1.1875rem 0 1.25rem;
  text-align: left;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #fff;
  color: #222;
  border-bottom: 1px solid #e5e5e5;
}
.page_ershoufang_index .header {
  position: relative;
  z-index: 6;
}
.flexbox {
  display: flex;
}
.header .header_back:after {
  content: "";
  height: 1.25rem;
  width: 1.25rem;
  background-size: 1.25rem;
  margin: 0.9375rem 0 0 -0.3125rem;
  background-position: 0 -1.484375rem;
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
.header .city_wrap {
  display: block;
  padding: 0 0.5rem;
  font-size: 0;
}
.header .switch_city {
  display: inline-block;
  color: #222;
  vertical-align: top;
  line-height: 3.125rem;
}
.header .switch_city .city {
  font-size: 0.8125rem;
  vertical-align: middle;
}
.header .center,
.header .left,
.header .right {
  padding: 0;
  font-size: 0;
  flex: 1;
  text-align: center;
}
.header .left {
  text-align: left;
}
.header .header_back {
  display: block;
  height: 100%;
  font-size: 0;
  margin-right: 0.9375rem;
}
a,
button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a,
a:hover {
  text-decoration: none;
}
a {
  color: #000;
}
.header .center,
.header .left,
.header .right {
  padding: 0;
  font-size: 0;
  flex: 1;
  text-align: center;
}
.header .logo_wrap {
  display: block;
  height: 100%;
  overflow: hidden;
}
.header .logo {
  width: 4.2rem;
  height: 100%;
  background-size: 4.2rem;
  background-position: 0 -10.5125rem;
}
.header .right {
  text-align: right;
}

.header .center,
.header .left,
.header .right {
  padding: 0;
  font-size: 0;
  flex: 1;
  text-align: center;
}
.header .app,
.header .my {
  display: inline-block;
  width: 2.5rem;
  height: 100%;
  line-height: 1em;
  padding-top: 0.5rem;
  font-size: 0.75rem;
  color: #00ae66;
  text-align: center;
  box-sizing: border-box;
}
.header .icon_user {
  width: 1.8rem;
  height: 1.8rem;
  background-size: 1.8rem;
  margin-top: 0.6625rem;
  margin-right: -0.3rem;
}
.header .center,
.header .left,
.header .right {
  padding: 0;
  font-size: 0;
  flex: 1;
  text-align: center;
}
.header .right {
  text-align: right;
}
.header .header_back:after {
  content: "";
  height: 1.25rem;
  width: 1.25rem;
  background-size: 1.25rem;
  margin: 0.9375rem 0 0 -0.3125rem;
  background-position: 0 -1.484375rem;
}
.header .icon_pull {
  width: 0.5625rem;
  height: 0.5625rem;
  background-size: 0.5625rem;
  background-position: 0 -4.0078125rem;
  margin: 0;
  margin-left: 0.18rem;
}
</style>

