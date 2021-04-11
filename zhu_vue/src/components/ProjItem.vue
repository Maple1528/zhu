<template>
  <div class="proj_item" v-if="showItem">
    <div class="img_box" @click="routerLink()">
      <img :src="img" alt="项目封面图" @load="loadImg()">
      <div class="cover">
        <div class="more">
          <div>详 细 信 息</div>
          <img src="@/assets/img/icon/arrow_white.svg" alt="">
        </div>
        <div class="location">{{ location }}</div>
        <div class="type">{{  type }}</div>
      </div>
    </div>
    <div class="text_box" @click="routerLink()">{{ name }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProjItem',
  props: ['proj_id'],
  data () {
    return {
      showItem: false,
      name: '',
      location: '',
      type: '',
      imgSrc: [
        {
          src: require('../assets/img/small/1.jpg')
        },
        {
          src: require('../assets/img/small/2.jpg')
        },
        {
          src: require('../assets/img/small/3.jpg')
        },
        {
          src: require('../assets/img/small/4.jpg')
        },
        {
          src: require('../assets/img/small/5.jpg')
        },
        {
          src: require('../assets/img/small/6.jpg')
        },
        {
          src: require('../assets/img/small/7.jpg')
        },
        {
          src: require('../assets/img/small/8.jpg')
        }
      ]
    }
  },
  computed: {
    img () {
      return this.imgSrc[this.proj_id - 1].src
    }
  },
  created () {
    this.getProjInfo()
  },
  methods: {
    getProjInfo () {
      axios.post('/api/getProjInfo/' + this.proj_id, { id: this.proj_id }).then(res => {
        // console.log(res.data)
        if (res.data.code === 1) {
          var result = res.data.result[0]
          this.name = result.name
          this.location = result.location
          this.type = result.type
          // this.imgSrc = result.img_src
          this.showItem = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    loadImg () {
      this.showItem = true
      // console.log('load')
    },
    routerLink () {
      if (this.proj_id === 1) {
        this.$router.push({
          path: '/proj/project1'
        })
      }
    }
  }
}
</script>

<style scoped>
.proj_item {
  height: 300px;
  width: 360px;
  /* background-color: #eeeeee; */
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  transition: .5s ease;
}

.img_box {
  height: 240px;
  width: 360px;
  position: relative;
}

.img_box img {
  height: 240px;
  width: 360px;
  object-fit: cover;
}

.img_box .cover {
  height: 246px;
  width: 366px;
  position: absolute;
  top: -3px;
  left: -3px;
  color: #ffffff;
  background-color: #00000094;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: .3s ease-out;
}

.img_box:hover .cover, .text_box:hover {
  height: 240px;
  width: 360px;
  top: 0px;
  left: 0px;
  opacity: 1;
  cursor: pointer;
}

.cover .more {
  height: 30px;
  width: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  word-spacing: 6px;
}

.cover .more img {
  margin-left: 15px;
  height: 12px;
  width: 30px;
  object-fit: fill;
}

.cover .location {
  font-size: 14px;
  position: absolute;
  left: 30px;
  bottom: 20px;
}

.cover .type {
  font-size: 14px;
  position: absolute;
  right: 30px;
  bottom: 20px;
}

.text_box {
  height: 40px;
  width: 320px;
  /* background-color: #82cdff; */
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
