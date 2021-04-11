<template>
  <div class="user">
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="user_box">
      <div class="user_left">
        <div class="user_top">
          <img src="@/assets/img/icon/profile.svg">
          <div>{{ userId }}</div>
        </div>
        <div class="user_top2">
          <div class="user_follow">关注数<span>233</span></div>
          <div class="user_separate"></div>
          <div class="user_follow">粉丝数<span>23</span></div>
        </div>
        <div class="user_link" v-for="(item, i) in iconSrc" :key="i" @click="routerLink(routerPath[i])">
          <img :src="item.src" :alt="item.name">
          <div>{{ item.name }}</div>
        </div>
        <div class="user_edit" @click="routerLink('user/' + userId + '/edit')">编辑信息</div>
        <div class="user_quit" @click="quitLogin()">退出登录</div>
      </div>
      <div class="separate_line"></div>
      <div class="user_right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      routerPath: [
        'user/' + this.userId + '/myproj',
        'user/' + this.userId + '/like',
        'user/' + this.userId + '/favorite'
      ],
      iconSrc: [
        {
          name: '作品',
          src: require('@/assets/img/icon/proj.svg')
        },
        {
          name: '喜欢作品',
          src: require('@/assets/img/icon/like.svg')
        },
        {
          name: '收藏夹',
          src: require('@/assets/img/icon/favorite.svg')
        }
      ]
    }
  },
  computed: {
    userId () {
      return this.$store.state.user.id
    }
  },
  methods: {
    routerLink (linkPath) {
      this.$router.push({
        path: `/${linkPath}`
      })
    },
    quitLogin () {
      this.$store.commit('changeLogin', false)
      this.$store.commit('changeUser', '')
      this.routerLink('home')
    }
  }
}
</script>

<style scoped>
.user {
  width: 100%;
  /* min-width: 1400px; */
  height: 100vh;
  /* background-color: #d1e7fe; */
  position: relative;
  overflow: hidden;
}

.color {
  position: absolute;
  filter: blur(150px);
}

.color:nth-child(1) {
  bottom: -100px;
  right: -100px;
  height: 600px;
  width: 800px;
  background-color: #aad3ffe0;
}

.color:nth-child(2) {
  top: 200px;
  right: -100px;
  height: 300px;
  width: 500px;
  background-color: #349dffe0;
}

.color:nth-child(3) {
  top: -100px;
  left: -100px;
  height: calc(100vh - 100px);
  width: 1000px;
  background-color: #aad3ffe0;
}

.color:nth-child(4) {
  left: 500px;
  bottom: -100px;
  height: 400px;
  width: 500px;
  background-color: #55adffe0;
}

.user_box {
  height: 80%;
  width: 80%;
  min-width: 1200px;
  background-color: #ffffff71;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  backdrop-filter: blur(50px);
}

.separate_line {
  height: 50%;
  width: 2px;
  background-color: #ffffffbd;
}

.user_left {
  width: 340px;
  height: 600px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-right: 50px; */
}

.user_left>div {
  width: 110px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 70px;
  margin: 5px 0px;
  border-radius: 4px;
  transition: .3s ease;
}

.user_left div img {
  width: 24px;
}

.user_left .user_top {
  width: 250px;
  height: 100px;
  padding: 0px;
  font-size: 30px;
  font-weight: bold;
}

.user_left .user_top img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 4px solid #52b6f9;
}

.user_left .user_top div {
  margin-left: 20px;
}

.user_left .user_top2 {
  width: 250px;
  padding: 0px;
  line-height: 50px;
}

.user_top2 .user_separate {
  width: 2px;
  height: 20px;
  background-color: #52b6f9;
  margin: 0px 20px;
}

.user_left .user_follow span {
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
}

.user_left .user_link {
  justify-content: flex-start;
}

.user_left .user_link div {
  margin-left: 20px;
}

.user_link:hover {
  background-color: #ffffffd0;
}

.user_link:active {
  background-color: #ffffff;
}

.user_link:focus {
  background-color: #ffffff;
}

.user_left .user_edit {
  background-color: #52b6f9;
  margin: 10px 0px;
}

.user_edit:hover {
  opacity: 0.8;
}

.user_left .user_quit {
  width: 106px;
  height: 46px;
  border: 2px solid #52b6f9;
  margin: 10px 0px;
}

.user_quit:hover {
  border: 2px solid #ffffffd0;
  background-color: #ffffffd0;
}

.user_link:hover, .user_edit:hover, .user_quit:hover {
  cursor: pointer;
}

.user_right {
  width: 1000px;
  height: 700px;
  /* background-color: white; */
  border-radius: 10px;
  /* margin-left: 50px; */
}
</style>
