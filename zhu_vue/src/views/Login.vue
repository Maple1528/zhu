<template>
  <div class="login">
    <LoginBG :bgSrc="bgSrc"></LoginBG>
    <div class="login_container">
      <div class="login_text">登 录</div>
      <div class="login_box">
        <div class="text_box">
          <input type="text" value="" required v-model="id" :input="checkAble()">
          <span data-placceholder="用户名"></span>
          <div class="err_icon" v-show="idSpan">!</div>
        </div>
        <div class="text_box">
          <input type="password" name="" required v-model="password" :input="checkAble()">
          <span data-placceholder="密码"></span>
          <div class="err_icon" v-show="passwordSpan">!</div>
        </div>
        <div class="check_box">
          <button class="btn" :disabled="disable" @click="check()">确 认 登 录</button>
        </div>
        <div class="bottom_text">还没有账户？<span @click="registerLink()">点此注册</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import LoginBG from '@/components/LoginBG.vue'

export default {
  name: 'Login',
  data () {
    return {
      id: '',
      password: '',
      truePassword: '',
      idSpan: false,
      passwordSpan: false,
      disable: true,
      bgSrc: require('../assets/img/bg/bg1.jpg')
    }
  },
  components: {
    LoginBG
  },
  methods: {
    registerLink () {
      this.$router.push({
        path: '/register'
      })
    },
    // register () {
    //   this.$router.push({
    //     path: '/register'
    //   })
    // },
    checkAble () {
      if (this.id !== '' && this.password !== '') {
        this.disable = false
      } else {
        this.disable = true
      }
    },
    check () {
      axios.post('/api/login/' + this.id, { id: this.id }).then(res => {
        this.idSpan = false
        this.passwordSpan = false
        if (res.data.code === -1) {
          this.idSpan = true
        } else {
          var result = res.data.result[0]
          if (this.password === result.password) {
            this.$store.commit('changeLogin', true)
            this.$store.commit('changeUser', this.id)
            console.log(this.$store.state.user.id)
            this.$router.push({
              path: '/home'
            })
          } else {
            this.passwordSpan = true
          }
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
body div input {
  padding: 0;
  margin: 0;
}

.login {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 200;
}

.login_container {
  width: 70vw;
  min-width: 840px;
  height: 700px;
  /* background-color: antiquewhite; */
  position: absolute;
  right: 0%;
  padding-top: 150px;
  z-index: 201;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.login_text {
  width: 300px;
  height: 100px;
  /* background-color: #52b6f9; */
  text-align: center;
  font-size: 64px;
  line-height: 100px;
  font-weight: bolder;
  word-spacing: 30px;
}

.login_box {
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
  width: 100%;
  height: 50px;
  /* background-color: #ffffff; */
  border-bottom: 3px solid #cacaca;
  margin: 30px 0;
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
  transition: .3s;
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
