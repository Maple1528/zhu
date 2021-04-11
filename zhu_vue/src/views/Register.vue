<template>
  <div class="register">
    <LoginBG :bgSrc="bgSrc"></LoginBG>
    <div class="register_container">
      <div class="register_text">注 册</div>
      <div class="register_main">
        <div class="text_box">
          <input type="text" required v-model="id" :input="checkAble()">
          <span data-placceholder="用户名"></span>
          <div class="err_icon" v-show="idSpan">!</div>
        </div>
        <div class="text_box">
          <input type="password" name="" required v-model="password" :input="checkAble()">
          <span data-placceholder="密码（最少6位）"></span>
          <div class="err_icon" v-show="passwordSpan">!</div>
        </div>
        <div class="text_box">
          <input type="password" name="" required v-model="checkPassword" :input="checkAble()">
          <span data-placceholder="确认密码"></span>
          <div class="err_icon" v-show="checkPswSpan">!</div>
        </div>
        <div class="check_box">
          <button class="btn" :disabled="disable" @click="check()">确 认 注 册</button>
        </div>
        <div class="bottom_text">已经有账户？<span @click="loginLink()">点此登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import LoginBG from '@/components/LoginBG.vue'

export default {
  name: 'register',
  data () {
    return {
      id: '',
      password: '',
      checkPassword: '',
      idSpan: false,
      passwordSpan: false,
      checkPswSpan: false,
      disable: true,
      bgSrc: require('../assets/img/bg/bg2.jpg')
    }
  },
  components: {
    LoginBG
  },
  methods: {
    loginLink () {
      this.$router.push({
        path: 'login'
      })
    },
    checkAble () {
      if (this.id !== '' && this.password !== '' && this.checkPassword !== '') {
        this.disable = false
      } else {
        this.disable = true
      }
    },
    check () {
      this.idSpan = false
      this.passwordSpan = false
      this.checkPswSpan = false
      if (this.password !== '' && this.password.length < 6) {
        this.passwordSpan = true
        return
      }
      if (this.checkPassword !== '' && this.password !== this.checkPassword) {
        this.checkPswSpan = true
        return
      }
      if (!this.passwordSpan && !this.checkPswSpan) {
        axios.post('/api/register', { id: this.id, password: this.password }).then(res => {
          var code = res.data.code
          console.log(res.data)
          if (code === -1) {
            this.idSpan = true
          } else if (code === 1) {
            this.$store.commit('changeLogin', true)
            this.$store.commit('changeUser', this.id)
            this.$router.push({
              path: '/home'
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
body div input {
  padding: 0;
  margin: 0;
}

.register {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 200;
}

.register_container {
  width: 70%;
  min-width: 840px;
  height: 700px;
  /* background-color: antiquewhite; */
  position: absolute;
  right: 0%;
  margin-top: 150px;
  z-index: 201;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.register_text {
  width: 300px;
  height: 100px;
  /* background-color: #52b6f9; */
  text-align: center;
  font-size: 64px;
  line-height: 100px;
  font-weight: bolder;
  word-spacing: 30px;
}

.register_main {
  width: 360px;
  height: 600px;
  /* background-color: #b9ddf5; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 120px 0px;
}

.text_box {
  width: 360px;
  height: 50px;
  /* background-color: #ffffff; */
  border-bottom: 3px solid #d3d3d3;
  margin: 20px 0;
  position: relative;
}

.text_box input {
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #333333;
  background: none;
  border: none;
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
}

.err_icon {
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  color: #ffffff;
  font-weight: bolder;
  text-align: center;
  line-height: 20px;
  position: absolute;
  right: -40px;
  top: 12px;
  z-index: 400;
}

.text_box span::before {
  content: attr(data-placceholder);
  color: #929292;
  font-size: 16px;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  /* top: var(--top); */
  left: 10px;
  z-index: -1;
  transition: 0.5s;
}

.text_box span::after {
  content: '';
  widows: 0%;
  /* width: var(--width); */
  position: absolute;
  height: 3px;
  background: #52b6f9;
  transition: .5s;
  left: 0%;
  top: 100%;
}

.text_box input:valid ~ span::before,
.text_box input:focus ~ span::before {
  top: -5px;
  font-size: 14px;
}

.text_box input:valid ~ span::after,
.text_box input:focus ~ span::after {
  width: 100%;
}

.check_box {
  height: 60px;
  width: 100%;
  /* background-color: #c8e9ff; */
  margin: 20px 0px;
}

.btn {
  height: 100%;
  width: 100%;
  border: none;
  background-color: #52b6f9;
  color: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  word-spacing: 10px;
  transition: .5s;
  cursor: pointer;
  outline: none;
}

.btn:hover {
  opacity: 0.8;
}

.btn:active {
  opacity: 1;
  transform: scale(0.95);
}

.btn:disabled {
  background-color: transparent;
  color: #dddddd;
  border: 2px solid #dddddd;
}

.bottom_text {
  font-size: 14px;
  color: #929292;
  margin-top: 10px;
}

.bottom_text span {
  /* text-decoration: underline; */
  transition: .3s;
}

.bottom_text span:hover {
  color: black;
  cursor: pointer;
}

</style>
