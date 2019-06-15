<template>
  <div class="wrapper">
    <div class="dispersion-list-container" style="min-height:95vh">
      <div class="dispersion-list-header">
        <section class="search" id="search">
          <a data-el="searchInput">请输入小区/商圈/地铁</a>
        </section>
      </div>
      <section class="filter" id="filter">
        <ul class="filter__title" data-el="title">
          <li class="filter__title__item" data-el="filterItem">
            <span class="oneline">区域</span>
            <i></i>
          </li>
          <li class="filter__title__item" data-el="filterItem">
            <span class="oneline">方式</span>
            <i></i>
          </li>
          <li class="filter__title__item" data-el="filterItem">
            <span class="oneline">租金</span>
            <i></i>
          </li>
          <li class="filter__title__item" data-el="filterItem">
            <span class="oneline">筛选</span>
            <i></i>
          </li>
        </ul>
      </section>
      <section class="house_lists list">
        <rent-room/>
      </section>
    </div>
  </div>
</template>
<script>
import rentRoom from "./content/rentRoom.vue";
export default {
  mounted() {
    return this.$store.commit("navigat", 1);
  },
  components: {
    rentRoom
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 64rem;
  margin: 0 auto;
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
.search {
  padding: 0.75rem;
  background-color: #fff;
}
.search a {
  display: block;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  background-color: #f5f5f5;
  -webkit-border-radius: 0.9375rem;
  -moz-border-radius: 0.9375rem;
  border-radius: 0.9375rem;
  text-align: center;
  font-size: 0.8125rem;
  color: #ccc;
}
[data-el] {
  cursor: pointer;
}
[data-icon-left]::before {
  font-family: martrix !important;
  content: attr(data-icon);
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;
  -webkit-font-smoothing: antialiased;
  content: attr(data-icon-left);
  margin-right: 0.25rem;
}
.filter {
  height: 2.8125rem;
}
.filter__title {
  display: table;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 1.23rem;
  line-height: 1.23rem;
  padding-top: 0.9375rem;
  padding-bottom: 0.8125rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e6f0;
  overflow: hidden;
  font-size: 0.875rem;
}
.filter__title .filter__title__item {
  display: table-cell;
  text-align: center;
  cursor: pointer;
}
.oneline {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.filter__title .filter__title__item span {
  max-width: 4rem;
}
.filter__title .filter__title__item i {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.4375rem;
  border: 0.25rem solid transparent;
  border-top-color: #9ea1a3;
}
.list {
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
}
section{
    background: #fff;
}
</style>

