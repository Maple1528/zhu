<template>
  <div class="totop_box" v-show="toTop" @click="backTop()">
    <img src="@/assets/img/icon/totop.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  data () {
    return {
      toTop: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      const that = this
      const scrolltop = window.pageYOffset || document.documentElement.scrolltop || document.body.scrolltop
      // console.log(scrolltop)
      that.scrollTop = scrolltop
      if (scrolltop > 1000) {
        this.toTop = true
      } else {
        this.toTop = false
      }
    },
    backTop () {
      let top = window.pageYOffset || document.documentElement.scrolltop || document.body.scrolltop
      // console.log(top)
      const timeTop = setInterval(() => {
        document.documentElement.scrollTop = document.body.scrollTop = top -= 50
        this.toTop = true
        if (top <= 0) {
          clearInterval(timeTop)
          console.log('clear')
        }
      }, 10)
    }
  }
}
</script>

<style scoped>
.totop_box {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #52b6f9;
  position: fixed;
  right: 250px;
  bottom: 200px;
  box-shadow: 0px 0px 15px #3686e78a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s ease;
}

.totop_box img {
  height: 15px;
  object-fit: cover;
  margin-bottom: 5px;
}

.totop_box:hover {
  opacity: 0.9;
  cursor: pointer;
  transform: rotate(360deg);
}

.totop_box:active {
  transform: scale(0.9);
}
</style>
