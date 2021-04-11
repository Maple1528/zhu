<template>
  <div id="app">
    <div class="nav" :style="style">
      <div class="nav_box">
        <div class="nav_left">
          <img src="@/assets/img/logo.svg" alt="logo" class="logo" @click="routerLink('home')">
          <NavItem :link_path="path[0]">首页</NavItem>
          <NavItem :link_path="path[1]">探索</NavItem>
          <!-- <NavItem :link_path="path[2]">资讯</NavItem> -->
          <div class="sort">
            <div @click="sortLink('location')" class="sort_box">
              <div>分类</div>
              <img src="@/assets/img/icon/fold.svg" alt="展开">
            </div>
            <ul>
              <li @click="sortLink('location')"><NavItem>地区</NavItem></li>
              <li @click="sortLink('type')"><NavItem>类型</NavItem></li>
            </ul>
          </div>
        </div>
        <div class="nav_right" v-show="!this.$store.state.isLogin">
          <NavItem :link_path="path[5]">登录</NavItem>
          <div class="register_box" @click="routerLink('register')"><span></span>注册</div>
        </div>
        <div class="nav_user" v-show="this.$store.state.isLogin">
          <img class="nav_user_profile" src="@/assets/img/icon/profile.svg" alt="头像" @click="userLink()">
          <div class="nav_user_name" @click="userLink()">{{ this.$store.state.user.id }}</div>
          <ul>
            <li @click="userLink()">
              <img src="@/assets/img/icon/mine.svg" alt="喜欢">
              <div>个人中心</div>
            </li>
            <li>
              <img src="@/assets/img/icon/setting.svg" alt="收藏">
              <div>编辑信息</div>
            </li>
            <li></li>
            <li @click="quitLogin()">
              <img src="@/assets/img/icon/quit.svg" alt="退出">
              <div>退出登录</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavItem from '@/components/NavItem.vue'

export default {
  data () {
    return {
      style: '',
      opacity: 0,
      userId: this.$store.state.user.id,
      path: ['home', 'explore', 'news', '', '', 'login']
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: {
    NavItem
  },
  methods: {
    routerLink (linkPath) {
      this.$router.push({
        path: `/${linkPath}`
      })
    },
    sortLink (sortItem) {
      console.log(sortItem)
      this.$router.push({
        // path: 'sort'
        name: 'Sort',
        params: {
          sortItem: sortItem
        }
      })
    },
    userLink () {
      this.$router.push({
        path: `/user/${this.$store.state.user.id}`
      })
    },
    quitLogin () {
      this.$store.commit('changeLogin', false)
      this.$store.commit('changeUser', '')
      // this.routerLink('home')
    },
    handleScroll () {
      // console.log(this.userId)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.opacity = Math.abs(Math.round(scrollTop)) / 1000
      var shadow = Math.min(this.opacity / 2, 0.4)
      this.style = {
        background: 'rgba(255, 255, 255,' + this.opacity + ')',
        boxShadow: '5px 5px 20px rgba(1, 67, 147,' + shadow + ')'
      }
    }
  }
}
</script>

<style>
body, div, img, a, input, ul, li {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: 'SourceHanSansCN';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

.nav {
  width: 100%;
  height: 60px;
  text-align: center;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  line-height: 36px;
}

.nav_box {
  width: 60%;
  min-width: 900px;
  margin: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav_left {
  height: 60px;
  width: 330px;
  /* width: 400px; */
  /* background-color: #fc9999; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav_right {
  height: 60px;
  width: 140px;
  /* background-color: #ffdaa9; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.nav_login {
  height: 40px;
  width: 40px;
  background-color: #52b6f9;
  border-radius: 50%;
  margin: 10px 0px;
}

.logo {
  height: 36px;
  width: 36px;
  /* background-color: #52b6f9; */
  margin-right: 20px;
  padding: 7px;
}

.sort {
  width: 80px;
  position: relative;
}

.sort:hover, .register_box:hover, .nav_user:hover {
  cursor: pointer;
}

.register_box {
  height: 36px;
  width: 60px;
  position: relative;
}

.register_box span::before {
  content: '';
  width: 60px;
  height: 36px;
  background-color: #52b6f9;
  position: absolute;
  transition: .3s ease;
  bottom: 0px;
  left: 0px;
  opacity: 1;
  z-index: -1;
}

.register_box:hover span::before {
  bottom: 0px;
  height: 4px;
  width: 36px;
  left: 12px;
}

.sort_box {
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sort img {
  height: 36px;
  width: 10px;
  margin-left: 10px;
  transition: .3s ease;
}

.sort:hover img {
  transform: rotate(180deg);
}

.sort ul, .nav_user ul {
  position: absolute;
  top: 80px;
  left: 0px;
  background-color: #ffffff;
  box-shadow: 5px 5px 20px #0143934d;
  border-radius: 5px;
  transition: .5s ease;
  padding: 0px 6px;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;
}

.sort ul {
  height: 86px;
  width: 60px;
}

.sort div:hover ~ ul,
.sort ul:hover {
  top: 60px;
  opacity: 1;
  visibility: visible;
}

.nav_user div:hover ~ ul,
.nav_user img:hover ~ ul,
.nav_user ul:hover {
  top: 70px;
  opacity: 1;
  visibility: visible;
}

.sort ul::before, .nav_user ul::before{
  content: '';
  height: 0.8em;
  width: 0.8em;
  background-color: #ffffff;
  position: absolute;
  left: calc(50% - 0.4em);
  top: -0.4em;
  transform: rotate(45deg);
}

.sort ul li {
  list-style: none;
  position: relative;
}

.nav_user {
  height: 60px;
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav_user ul {
  height: 180px;
  width: 160px;
  top: 90px;
  align-items: center;
  padding: 0px;
}

.nav_user ul li {
  list-style: none;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  transition: .3s ease;
}

.nav_user ul li img {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.nav_user ul li:hover {
  background-color: #ececec;
}

.nav_user ul li:nth-last-child(2) {
  /* width: 80px; */
  height: 2px;
  margin: 8px 0px;
  background-color: #f0f0f0;
}

.nav_user_profile {
  height: 34px;
  width: 34px;
  background-color: #ffffff00;
  border: 3px solid #52b6f9;
  border-radius: 50%;
}

.nav_user_name {
  width: 70px;
  margin: 0px 5px;
}

</style>
