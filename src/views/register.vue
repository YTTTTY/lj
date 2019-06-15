<template>
  <div class="wrapper">
    <div class="main_start">
      <section class="page page_user">
        <div class="content_area">
          <div class="login_area">
            <div class="login_header">
              <a class="back" href="javascript:;" data-act="back" @click="routerback"></a>
              <div class="login_title">注册账号</div>
            </div>
            <form action method="post">
              <div class="input_area border">
                <input
                  id="tel"
                  name="username"
                  class="short_input"
                  type="text"
                  placeholder="请输入手机号"
                  maxlength="11"
                  autocomplete="off"
                  v-model="phone"
                >
                <a
                  class="send_verify_num post_ulog"
                  id="send_verify_code"
                  @click="verification"
                  ref="verification"
                >发送验证码</a>
              </div>
              <div class="input_area border">
                <input
                  id="vern"
                  name="smsCode"
                  type="text"
                  placeholder="请输入验证码"
                  minlength="6"
                  maxlength="6"
                  autocomplete="off"
                  ref="inputVerification"
                >
              </div>
              <div class="input_area border">
                <input
                  id="pwd"
                  type="password"
                  placeholder="请输入新密码（最少8位,数字+字母）"
                  name="password"
                  minlength="8"
                  maxlength="20"
                  autocomplete="off"
                  ref="password"
                >
              </div>
              <input id="pwdConfirm" type="hidden" name="confirmPassword">
              <input type="hidden" name="lt" value>
              <input type="hidden" name="execution" value="e1s1">
              <input type="hidden" name="_eventId" value="submit">
            </form>
          </div>
          <div class="btn_area">
            <a
              class="btn btn_green post_ulog"
              data-evtid="10439"
              data-ulog
              data-mark="submit"
              @click="submit"
            >提交</a>
          </div>

          <div class="agree_protocol">
            <span>
              注册/登录即代表同意
              <a
                href="https://m.lianjia.com/user/protocol"
                class="link_protocol post_ulog"
                data-evtid="10442"
                data-ulog
              >《链家网用户协议》</a>
            </span>
          </div>
        </div>
      </section>
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
      phone: "",
      tr: true,
      code: ""
    };
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    },
    verification() {
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
      } else {
        if (this.tr) {
          (this.code = ""), (this.tr = false);
          let time = 60;
          this.$refs.verification.innerHTML = "重新发送(" + time + ")";
          let dataver = setInterval(() => {
            time--;
            this.$refs.verification.innerHTML = "重新发送(" + time + ")";
            if (time == 0) {
              this.tr = true;
              clearInterval(dataver);
              this.$refs.verification.innerHTML = "获取验证码";
            }
          }, 1000);
          for (let i = 0; i < 4; i++) {
            if (i == 0) {
              this.code += String(Math.floor(Math.random() * 9) + 1);
            } else {
              this.code += Math.floor(Math.random() * 10);
            }
          }
          console.log(this.code);
        }
      }
    },
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
      } else if (this.$refs.inputVerification.value == "") {
        Toast({
          message: "请输入验证码",
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
      } else if (this.$refs.inputVerification.value !== this.code) {
        Toast({
          message: "验证码错误",
          iconClass: "iconfont icon-alert2",
          duration: 1000
        });
      } else {
        this.$axios({
          method: "get",
          url: "https://www.apiopen.top/createUser",
          params: {
            key: "00d91e8e0cca2b76f515926a36db68f5",
            phone: this.phone,
            passwd: this.$refs.password.value
          }
        })
          .then(response => {
            if (response.data.msg == "用户已注册！") {
              Toast({
                message: "用户已注册！",
                iconClass: "iconfont icon-alert2",
                duration: 1000
              });
            } else {
              window.location.href = "/login";
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
}
.content_area {
  position: relative;
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
.content_area .login_area .login_header .back {
  height: 0.8rem;
  width: 0.8rem;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1.25rem;
  z-index: 1;
  margin: auto;
  border: solid #6b7072;
  border-width: 0 0 2px 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.login_title {
  text-align: center;
  color: #394043;
  font-size: 1.125rem;
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
input,
textarea {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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
.content_area .login_area .send_verify_num,
.content_area .login_area .send_verify_num_s {
  display: inline-block;
  float: right;
  height: 2rem;
  margin: 0.93rem -1.5rem 0.44rem 0;
  line-height: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #9c9fa1;
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
.agree_protocol {
  position: absolute;
  bottom: 1rem;
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
.content_area .login_area .short_input {
  width: 55%;
}
.btn:active {
  opacity: 0.8;
}
</style>


