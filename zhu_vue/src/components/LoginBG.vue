<template>
  <div class="login_bg">
    <div class="left">
      <img :src="bgSrc" alt="背景图片" class="bg">
      <img src="@/assets/img/logo.svg" alt="logo" class="logo" @click="linkToHome">
    </div>
    <div class="right">
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="back" @click="back">
        <img src="@/assets/img/icon/back.svg" alt="返回">
        <div>返回</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBG',
  props: ['bgSrc'],
  methods: {
    linkToHome () {
      this.$router.push('/home')
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .login_bg {
    width: 100%;
    min-width: 1200px;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: row;
  }

  .left {
    width: 600px;
    height: 100%;
    background-color: #52b6f9;
    position: relative;
    z-index: 300;
  }

  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo {
    width: 100px;
    height: 100px;
    /* background-color: #ffffff; */
    position: absolute;
    display: flex;
    justify-self: center;
    top: 150px;
    left: 250px;
  }

  .right {
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
  }

  .color {
    position: absolute;
    filter: blur(150px);
  }

  .color:nth-child(1) {
    top: -100px;
    right: 200px;
    height: 450px;
    width: 450px;
    background-color: #33adffce;
  }

  .color:nth-child(2) {
    top: 150px;
    right: 100px;
    height: 300px;
    width: 300px;
    background-color: #c6e225af;
  }

  .color:nth-child(3) {
    top: 100px;
    left: -100px;
    height: 500px;
    width: 500px;
    background-color: #9ae4fac7;
  }

  .back {
    width: 60px;
    height: 40px;
    position: absolute;
    top: 180px;
    left: 10%;
    /* background-color: #ffffff; */
    display: flex;
    align-content: center;
    justify-content: space-between;
    line-height: 40px;
    z-index: 202;
  }

  .back img {
    width: 10px;
  }

  .logo:hover {
    cursor: pointer;
  }

  .back:hover {
    cursor: pointer;
  }
</style>
