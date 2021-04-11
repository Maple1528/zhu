<template>
  <div class="project1">
    <div class="project1_top"></div>
    <div class="project1_main">
      <div class="project1_main_left">
        <div class="project1_title">瑞士螺旋钟表博物馆</div>
        <!-- <div class="project1_subtitle">
          <div class="project1_index">筑<span>></span>项目<span>></span>展陈建筑<span>></span>瑞士<span>></span><span>瑞士螺旋钟表博物馆</span></div>
          <div class="project1_icon">
            <div></div>
            <div></div>
          </div>
        </div> -->
        <img class="left_top_img text_img" v-for="(item, i) in imgSrc" :key="i" :src="item.src" v-show="i==n" alt="大图">
        <ul class="left_more_img">
          <li v-for="(item, i) in imgSrc" :key="i" class="left_small_img">
            <img :src="item.src" alt="缩略图" @click="changeImg(i)">
            <span></span>
          </li>
        </ul>
        <div class="project1_info_box">
          <div class="project1_info">
            <div class="info_img"></div>
            <div>建筑师: ATELIER BRÜCKNER, Bjarke Ingels Group, CCHE</div>
          </div>
          <div class="project1_info">
            <div class="info_img"></div>
            <div>面积: 900 m²</div>
          </div>
          <div class="project1_info">
            <div class="info_img"></div>
            <div>项目年份: 2020</div>
          </div>
        </div>
        <div class="project1_text">
          <img class="text_img" src="@/assets/img/proj/proj4.jpg">
          <div class="text">{{ text[0] }}</div>
          <img class="text_img" src="@/assets/img/proj/proj5.jpg">
          <div class="text">{{ text[1] }}</div>
          <img class="text_img" src="@/assets/img/proj/proj6.jpg">
          <div class="text">{{ text[2] }}</div>
          <img class="text_img" src="@/assets/img/proj/proj7.jpg">
          <div class="text">{{ text[3] }}</div>
        </div>
      </div>
      <div class="project1_main_right">
        <div class="project1_user">
          <img class="user_img" src="@/assets/img/big.jpg">
          <div class="user_right">
            <div class="user_name">BIG工作室</div>
            <div class="user_follow" @click="fol()" :style="style">{{ follow }}</div>
          </div>
        </div>
        <div class="user_more more_proj">
          <div class="more_proj_title">"BIG"的更多项目</div>
          <ProjRow :src="moreImg[0].src" :title="moreImg[0].name"></ProjRow>
          <ProjRow :src="moreImg[1].src" :title="moreImg[1].name"></ProjRow>
        </div>
        <div class="type_more more_proj">
          <div class="more_proj_title">"展陈建筑"的更多项目</div>
          <ProjRow :src="moreImg[2].src" :title="moreImg[2].name"></ProjRow>
          <ProjRow :src="moreImg[3].src" :title="moreImg[3].name"></ProjRow>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <ToTop></ToTop>
  </div>
</template>

<script>
import ProjRow from '@/components/ProjRow.vue'
import Footer from '@/components/Footer.vue'
import ToTop from '@/components/ToTop.vue'

export default {
  name: 'Project1',
  data () {
    return {
      n: 0,
      isFollow: false,
      follow: '加关注',
      style: '',
      info: [],
      imgSrc: [
        {
          name: 1,
          src: require('@/assets/img/proj/proj1.jpg')
        },
        {
          name: 2,
          src: require('@/assets/img/proj/proj2.jpg')
        },
        {
          name: 3,
          src: require('@/assets/img/proj/proj3.jpg')
        },
        {
          name: 4,
          src: require('@/assets/img/proj/proj4.jpg')
        },
        {
          name: 5,
          src: require('@/assets/img/proj/proj5.jpg')
        }
      ],
      moreImg: [
        {
          name: '伊森伯格管理学院商业创新中心',
          src: require('@/assets/img/small/1.jpg')
        },
        {
          name: '蛇形走廊',
          src: require('@/assets/img/small/6.jpg')
        },
        {
          name: '华茂艺术教育博物馆',
          src: require('@/assets/img/small/8.jpg')
        },
        {
          name: '医学院礼堂',
          src: require('@/assets/img/small/5.jpg')
        }
      ],
      text: [
        '来自建筑师。BIG建筑事务所于2014年赢得了瑞士顶级钟表制造商爱彼（Audemars Piguet）所举办的园区扩建竞赛，为其设计了一个螺旋形的玻璃展亭，来呼应该公司园区内最老的一栋建筑。该历史建筑是1875年，Jules Louis Audemars和Edward Auguste Piguet所共同设立的工作坊，也就是品牌最早的缘起之地。建筑师希望借助这个项目来彰显品牌本身所蕴含的哲匠精神，以及其与汝拉山谷 (Vallée de Joux)的紧密联系。这个嵌入地景之中的博物馆，从地面缓缓升起，展现了品牌的高超制造工艺和其与当地环境间年复一年的交流磨合。',
        '建筑师试图通过螺旋形的空间形态，来表达品牌延续至今的完美钟表制造工艺，并同时使来访者可以零距离地与这些杰作及其背后的匠人沟通交流。建筑师在博物馆的中心设置了工艺展示和工作坊空间，使得来访者可以更好地去认知和了解品牌所具备的高超技艺。此外，建筑师还尽可能地将这种对工艺技术的展示呈现在整个博物馆空间之中。',
        '得益于建筑师、工程师、当地艺术家和品牌旗下多个部门的共同合作和创新，这个极具先锋性的博物馆空间将使得该品牌以一种独特的姿态和视角，介入汝拉山谷和当地的钟表制造文化中。每一方力量都竭尽全力，将这件作品推到了一个全新的高度。随着时间的流逝，这一建筑作品必将于日后成为一个传奇性的存在。',
        '建筑师通过这种独特的螺旋形态以融入当地的自然景观地形中。建筑师顺应既有的地形坡度设置了内部的地面，并顺势将常见的线性参观体验，调整为了螺旋状的观展空间。同时，建筑师还将弧形玻璃墙顺时针方向收于建筑的中心区域，旨在给来访者营造一种从表盘深入机芯之感。'
      ]
    }
  },
  components: {
    ProjRow,
    Footer,
    ToTop
  },
  methods: {
    changeImg (i) {
      this.n = i
    },
    fol () {
      if (this.isFollow) {
        this.style = 'backgroundColor: #dddddd'
        this.follow = '已关注'
      } else {
        this.style = 'backgroundColor: #52b6f9'
        this.follow = '加关注'
      }
      this.isFollow = !this.isFollow
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.project1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project1_top {
  width: 100%;
  height: 60px;
  background-color: #d1e7fe;
}

.project1_main {
  width: 70%;
  /* background-color: #9ecdff; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 100px;
}

.project1_main_left {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project1_title {
  width: 640px;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  /* background-color: #b6d9ff; */
}

.project1_subtitle {
  width: 640px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.project1_index {
  color: #6ac2fc;
}

.project1_index span {
  color: #d3d3d3;
  margin: 0px 5px;
}

.project1_icon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.project1_icon div {
  height: 30px;
  width: 30px;
  background-color: #52b6f9;
  margin-left: 15px;
}

.text_img {
  width: 700px;
  height: 450px;
  margin: 10px 0px;
  background-color: #b6d9ff;
}

.left_more_img {
  height: 110px;
  width: 640px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

.left_small_img {
  position: relative;
}

.left_small_img:hover {
  cursor: pointer;
}

.left_small_img img {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  object-fit: cover;
  border: 5px solid #a1b4c900;
}

.left_small_img:last-child span::before {
  content: "+24";
  height: 100px;
  width: 100px;
  background-color: black;
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  line-height: 100px;
  opacity: 0.5;
  position: absolute;
  left: 5px;
  top: 5px;
}

.project1_info_box {
  width: 640px;
  padding: 0px 30px;
}

.project1_info {
  width: 100%;
  height: 35px;
  color: #a8a8a8;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 35px;
}

.info_img {
  height: 14px;
  width: 14px;
  background-color: #d1d1d1;
  margin: 0px 15px;
}

.project1_text {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  width: 700px;
  margin: 20px 0px;
}

.project1_main_right {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project1_user {
  width: 350px;
  height: 160px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.project1_user .user_img {
  width: 120px;
  height: 120px;
  background-color: #cce0f5;
  border-radius: 50%;
  border: 2px solid #cce0f5;
  object-fit: cover;
}

.project1_user .user_right {
  width: 200px;
  height: 120px;
  /* background-color: #cce0f5; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.user_right .user_name {
  font-size: 24px;
  font-weight: bold;
}

.user_right .user_follow {
  width: 180px;
  height: 36px;
  background-color: #52b6f9;
  /* border-radius: 5px; */
  text-align: center;
  line-height: 36px;
  transition: .5s ease;
}

.user_right .user_follow:hover {
  cursor: pointer;
  opacity: 0.8;
}

.more_proj {
  width: 100%;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.more_proj_title {
  width: 70%;
  font-weight: 600;
  font-size: 20px;
}
</style>
