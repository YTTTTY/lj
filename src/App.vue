<template>
  <div id="app">
    <ljheader/>
    <router-view/>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import ljheader from "@/components/header/header.vue";
@Component({
  components: {
    ljheader
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  overflow-y: auto;
  font-family: PingFang-SC-Regular, Helvetica, "sans-serif";
  -webkit-overflow-scrolling: touch;
  color: #333;
  background-color: #f5f5f5;
  -webkit-text-size-adjust: none;
}

.gridbox:after,
.gridbox:before {
  display: table;
  content: "";
}
a,
abbr,
acronym,
address,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
body,
html {
  font-size: 0.9rem;
  -webkit-user-select: none;
}
a {
    color: #000;
}
</style>
