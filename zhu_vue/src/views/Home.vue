<template>
  <div class="home">
    <div class="main">
      <div class="main_left"></div>
      <div class="main_center">
        <div class="main_center_text1">「<span>筑</span>」</div>
        <div class="main_center_text2">Architectural</div>
        <img src="@/assets/img/icon/down.svg" alt="向下" class="main_center_img">
      </div>
      <div class="main_right">
        <img src="@/assets/img/col/col2.jpg" alt="建筑图片" class="main_right_img1">
        <div class="main_right_box"></div>
        <img src="@/assets/img/col/col1.jpg" alt="建筑图片" class="main_right_img2">
      </div>
    </div>
    <div class="container">
      <div class="container_col"></div>
      <div class="container_row">
        <div class="container_row1">
          <div class="col_box box5"></div>
          <img src="@/assets/img/small/6.jpg" alt="建筑图片" class="col_img img1">
          <img src="@/assets/img/small/1.jpg" alt="建筑图片" class="col_img img2">
          <div class="col_box box1">探索建筑世界的更多可能</div>
          <div class="col_box box2"></div>
        </div>
        <div class="container_row2">
          <img src="@/assets/img/small/7.jpg" alt="建筑图片" class="col_img img3">
          <img src="@/assets/img/small/8.jpg" alt="建筑图片" class="col_img img4">
          <div class="col_box box3"></div>
          <div class="col_box box4">寻找创意灵感</div>
        </div>
      </div>
      <Next :link_path="path[0]">探索更多</Next>
    </div>
    <div class="container2">
      <div class="container2_title">每周最佳建筑</div>
      <div class="container2_main">
        <div class="container2_left">
          <img class="container2_main_img" v-for="(item, i) in imgSrc" :key="i" :src="item.src" v-show="i==n" alt="大图">
          <div class="container2_small_img_box">
            <span></span>
            <ul>
              <li v-for="(item, i) in imgSrc" :key="i" class="container2_small_img">
                <img :src="item.src" alt="缩略图" @click="changeImg(i)">
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container2_right">
          <img src="@/assets/img/icon/profile.svg" class="container2_profile">
          <div class="container2_name">BIG</div>
          <div class="container2_proj">
            <div class="container2_proj_name">瑞士螺旋钟表博物馆</div>
            <div class="container2_proj_intro_box">
              <div class="container2_proj_intro" v-for="(item, i) in text" :key="i">{{ item }}</div>
            </div>
            <!-- <div class="container2_proj_more" @click="routerLink('proj/project1')">
              <div>详情</div>
              <img src="@/assets/img/icon/arrow_black.svg">
            </div> -->
          </div>
        </div>
      </div>
      <Next :link_path="path[1]">更多信息</Next>
    </div>
    <Footer></Footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Next from '@/components/Next.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data () {
    return {
      path: ['explore', 'proj/project1'],
      n: 0,
      imgSrc: [
        {
          name: 1,
          src: require('../assets/img/proj/proj1.jpg')
        },
        {
          name: 2,
          src: require('../assets/img/proj/proj2.jpg')
        },
        {
          name: 3,
          src: require('../assets/img/proj/proj3.jpg')
        },
        {
          name: 4,
          src: require('../assets/img/proj/proj4.jpg')
        },
        {
          name: 5,
          src: require('../assets/img/proj/proj5.jpg')
        }
      ],
      text: [
        'BIG建筑事务所',
        '从表盘逐步深入机芯',
        '螺旋形玻璃展亭',
        '嵌入地景中的博物馆',
        '完美钟表制造工艺',
        '…'
      ]
    }
  },
  components: {
    Next,
    Footer
  },
  methods: {
    changeImg (i) {
      this.n = i
    },
    play () {
      setInterval(() => {
        this.n++
        if (this.n === this.imgSrc.length) {
          this.n = 0
        }
      }, 3000)
    },
    routerLink (linkPath) {
      this.$router.push({
        path: `/${linkPath}`
      })
    }
  },
  mounted () {
    this.play()
  }
}
</script>

<style scope>
  body div img p {
    padding: 0;
    margin: 0;
  }

  .main {
    width: 80%;
    min-width: 1200px;
    height: 100vh;
    background-color: #d1e7fe;
    display: flex;
    justify-content: space-between;
    padding: 0px 10%;
  }

  .main_left {
    height: 90vh;
    width: 8%;
    min-width: 100px;
    background-color: #52b6f9;
  }

  .main_center {
    width: 40%;
    min-width: 460px;
    padding-top: 240px;
    padding-bottom: 200px;
    /* background-color: #529af9; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    z-index: 1;
  }

  .main_center_text1 {
    height: 240px;
    min-width: 450px;
    /* background: #5263f9; */
    font-size: 120px;
    font-weight: bold;
  }

  .main_center_text1 span {
    margin: 0 40px;
    font-size: 200px;
    font-weight: bolder;
  }

  .main_center_text2 {
    height: 80px;
    /* width: 340px; */
    /* background: #5263f9; */
    font-size: 60px;
    font-family: 'Montserrat';
    padding-left: 100px;
  }

  .main_center_img {
    height: 60px;
    width: 60px;
    /* background: #5263f9; */
  }

  .main_right {
    width: 50%;
    min-width: 500px;
    /* background-color: #5263f9; */
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .main_right_img1 {
    height: 80vh;
    width: 200px;
    background-color: #f9be52;
    object-fit: cover;
  }

  .main_right_box {
    height: 350px;
    width: 150px;
    background-color: #52b6f9;
    position: absolute;
    left: 8vw;
    top: 35vh;
  }

  .main_right_img2 {
    height: 80vh;
    width: 300px;
    background-color: #f9be52;
    margin-top: 20vh;
    margin-left: 100px;
  }

  .container {
    width: 80%;
    min-width: 1200px;
    height: 100vh;
    /* background-color: #eaf7ff; */
    padding: 0px 10%;
    position: relative;
    display: flex;
    align-items: center;
  }

  .container_col {
    width: 200px;
    height: 65vh;
    position: absolute;
    left: 55vw;
    top: 80px;
    border: 30px solid #52a0f9a1;
    z-index: 1;
  }

  .container_row {
    width: 100%;
    /* max-width: 1200px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .container_row1 {
    width: 100%;
    height: 300px;
    /* background-color: #5263f99a; */
    padding-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: flex-end;
    position: relative;
    z-index: 2;
  }

  .container_row2 {
    width: 100%;
    height: 300px;
    /* background-color: #5263f99c; */
    padding-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }

  .col_img {
    object-fit: cover;
    margin: 0px 20px;
  }

  .col_box {
    background-color: #8ed0fc77;
    backdrop-filter: blur(10px);
    position: absolute;
    line-height: 30px;
  }

  .img2, .img4, .box1, .box5 {
    box-shadow: 0px 0px 15px #01439369;
  }

  .img1 {
    width: 450px;
    height: 300px;
    margin-left: 100px;
    margin-right: 200px;
  }

  .img2 {
    height: 200px;
    width: 300px;
  }

  .img3 {
    height: 160px;
    width: 240px;
    margin-right: 180px;
  }

  .img4 {
    height: 250px;
    width: 350px;
    margin-right: 450px;
  }

  .box1 {
    height: 60px;
    width: 110px;
    bottom: 50px;
    padding: 20px 20px;
  }

  .box2 {
    height: 80px;
    width: 200px;
    bottom: 180px;
    right: 375px;
    z-index: -1;
  }

  .box3 {
    height: 100px;
    width: 150px;
    top: 60px;
    left: 450px;
    z-index: -1;
  }

  .box4 {
    height: 30px;
    width: 250px;
    right: 200px;
    padding: 35px 0px;
  }

  .box5 {
    height: 120px;
    width: 120px;
    bottom: 120px;
    left: 0px;
    z-index: -1;
  }

  .container_next {
    width: 120px;
    height: 30px;
    position: absolute;
    bottom: 80px;
    left: 60vw;
    /* background-color: #4d88af; */
    display: flex;
  }

  .container_next_text {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
  }

  .container_next_box {
    width: 80px;
    height: 30px;
    margin-left: 40px;
    background-color: #52b6f9;
    position: absolute;
    right: 10px;
    bottom: 0;
  }

  .container2 {
    width: 80%;
    min-width: 1200px;
    height: 100vh;
    background-color: #c2e3ff;
    padding: 0px 10% 20px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .container2_title {
    width: 90%;
    height: 50px;
    /* background-color: #5263f9; */
    padding-left: 10%;
    font-size: 20px;
    font-weight: medium;
    line-height: 50px;
    margin-bottom: 20px;
    margin-left: 200px;
  }

  .container2_main {
    width: 1200px;
    height: 600px;
    /* background-color: #52b6f9; */
    /* padding-left: 10%; */
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .container2_left {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .container2_main_img {
    width: 100%;
    height: 400px;
    background-color: #fff;
    box-shadow: 5px 5px 20px #01439388;
    z-index: 1;
    transition: .5s;
    /* opacity: 0; */
  }

  .container2_main_img:hover {
    box-shadow: 5px 5px 20px #01439300;
  }

  .container2_main_img:active {
    opacity: 1;
  }

  .container2_small_img_box {
    width: 60%;
    height: 150px;
    background-color: #52b6f9;
    display: flex;
    justify-content: flex-end;
    padding-top: 50px;
  }

  .container2_small_img_box ul {
    height: 50px;
    width: 360px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .container2_small_img img {
    height: 42px;
    width: 42px;
    margin: 0px 5px;
    object-fit: cover;
    border: 4px solid #ffffff00;
    transition: .3s ease;
  }

  .container2_small_img img:hover {
    cursor: pointer;
    border: 4px solid #ffffff;
  }

  .container2_right {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .container2_profile {
    height: 120px;
    width: 120px;
    background-color: #52b6f9;
    border-radius: 50%;
  }

  .container2_name {
    font-size: 30px;
    font-weight: bold;
  }

  .container2_proj {
    height: 400px;
    width: 100%;
    background-color: #52b6f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .container2_proj_name {
    height: 40px;
    width: 60%;
    /* background-color: #95d3fc; */
    font-size: 24px;
    font-weight: 600;
    line-height: 40px;
    padding-bottom: 35px;
  }

  .container2_proj_intro_box {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .container2_proj_intro {
    /* height: 230px; */
    width: 60%;
    margin: 5px 0px;
    font-style: italic;
  }

  .container2_proj_more {
    font-weight: 600;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
  }

  .container2_proj_more img {
    width: 25px;
    margin-left: 10px;
  }

  .footer {
    width: 80%;
    min-width: 1200px;
    height: 100px;
    background-color: #92aabe;
    padding: 0 10%;
  }
</style>
