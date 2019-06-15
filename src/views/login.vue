<template>
  <div class="wrapper">
    <section class="page page_user">
      <div class="content_area">
        <div class="login_area">
          <div class="login_header">
            <a class="close" href="javascript:history.go(-1)" data-act></a>
            <router-link class="register" to="/register">注册</router-link>
          </div>
          <div class="login_desc">
            <div class="login_type" data-mark="login_type">账号密码登录</div>
          </div>
          <form action method="post" data-mark="login_area_form" class>
            <div class="input_area border">
              <input
                type="text"
                id="pwd_tel"
                placeholder="请输入手机号码"
                name="username"
                maxlength="11"
                v-model="phone"
              >
            </div>
            <div class="input_area border">
              <input
                name="password"
                id="pwd_pwd"
                type="password"
                placeholder="请输入密码"
                maxlength="20"
                ref="password"
              >
            </div>
            <input type="hidden" name="lt" value>
            <input type="hidden" name="execution" value="e11s1">
            <input type="hidden" name="_eventId" value="submit">
          </form>
        </div>
        <div class="btn_area">
          <a
            class="btn btn_green post_ulog"
            data-evtid="10438"
            data-ulog
            data-mark="submit"
            @click="submit"
          >登录</a>
          <div class="center">
            <a class="forget post_ulog" href="javascript:;">忘记密码</a>
          </div>
        </div>
      </div>
    </section>
    <div class="agree_protocol">
      <span>
        注册/登录即代表同意
        <a href="javascript:;" class="link_protocol post_ulog">《链家网用户协议》</a>
      </span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "mint-ui";
import "mint-ui/lib/style.css";
import "../font/iconfont.css";
Vue.use(Toast);
export default {
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    submit() {
      if (
        this.phone == "" ||
        !/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(
          this.phone
        )
      ) {
        Toast({
          message: "请输入有效的手机号",
          iconClass: "iconfont icon-alert2",
          duration: 1000
        });
      } else if (
        this.$refs.password.value == "" ||
        this.$refs.password.value.length < 8
      ) {
        Toast({
          message: "密码最少8位，且包含数字和字母",
          iconClass: "iconfont icon-alert2",
          duration: 1000
        });
      } else {
        this.$axios({
          method: "get",
          url: "https://www.apiopen.top/login",
          params: {
            key: "00d91e8e0cca2b76f515926a36db68f5",
            phone: this.phone,
            passwd: this.$refs.password.value
          }
        })
          .then(response => {
            if (response.data.msg == "用户名或者密码错误！") {
              Toast({
                message: "用户名或者密码错误！",
                iconClass: "iconfont icon-alert2",
                duration: 1000
              });
            }else{
                this.$cookie.set('user',this.phone , { expires: '7D' });
                window.location.href = "/user";
            }
          })
          .catch(error => {
            console.log(error); //请求失败返回的数据
          });
      }
    }
  },
  mounted() {
    return this.$store.commit("navigat", 0);
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  background: #fff;
  position: relative;
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
.wrapper .page .content_area {
  min-height: 32rem;
  min-height: 100vh;
}
.content_area .login_area {
  position: relative;
  background-color: white;
}
.content_area .login_header {
  height: 2.75rem;
  line-height: 2.75rem;
  position: relative;
}
.content_area .login_header .close {
  height: 1.5rem;
  width: 1.5rem;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1.25rem;
  margin: auto;
}
.content_area .login_header .close::after,
.content_area .login_area .close::before {
  content: "";
  display: block;
  position: absolute;
  width: 0.1rem;
  height: 100%;
  left: 50%;
  top: 50%;
  background: #6b7072;
}
.content_area .login_header .close::before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translateX(-50%, -50%) rotate(45deg);
}
.content_area .login_header .close::after {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translateX(-50%, -50%) rotate(-45deg);
}
.login_header .register {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.25rem;
  margin: auto;
  font-size: 1rem;
  color: #6b7072;
  display: inline-block;
  line-height: 1rem;
  height: 1rem;
}
.login_desc {
  margin: 0 1.875rem;
  position: relative;
}
.login_desc .login_type {
  height: 3.75rem;
  line-height: 3.75rem;
  color: #394043;
  font-size: 1.75rem;
  width: 100%;
  top: 0;
}
.content_area .login_area .input_area {
  height: 3.75rem;
  line-height: 3.75rem;
  margin: 0 1.875rem;
  position: relative;
  padding-right: 1.5rem;
}
.content_area .login_area .border {
  border-bottom: 1px solid rgb(226, 226, 226);
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
.content_area .login_area input {
  border: none;
  padding: 0;
  font-size: 1rem;
}
.content_area .btn_area {
  padding: 1.75rem 1.875rem;
  text-align: center;
  font-size: 0.8125rem;
  color: #6b7072;
}
.btn {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 1px;
  height: 3.0625rem;
  line-height: 3.0625rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
}
.btn_green {
  border-color: #00ae66;
  background: #00ae66;
}
.content_area .btn_area .btn {
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 1.25rem;
  background-color: #66cea3;
}
.center {
  text-align: center;
  margin-top: 0.5rem;
}
.agree_protocol {
  position: absolute;
  bottom: 0.5rem;
  width: 100%;
  font-size: 0.8125rem;
  line-height: 1rem;
  color: #cdcfd0;
  text-align: center;
}
.agree_protocol a.link_protocol {
  color: inherit;
  text-decoration: underline;
  line-height: 1rem;
}
</style>