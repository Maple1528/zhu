<template>
  <div class="unlimited_list">
    <div class="list_title">探索更多</div>
    <div class="main_box">
      <div class="list_item" v-for="(item, i) in unlimitedList" :key="i"><ProjItem :proj_id="item"></ProjItem></div>
    </div>
  </div>
</template>

<script>
import ProjItem from '@/components/ProjItem.vue'

export default {
  name: 'UnlimitedList',
  data () {
    return {
      windowH: window.screen.height + 600,
      listItem: 1,
      unlimitedList: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  components: {
    ProjItem
  },
  methods: {
    addList () {
      // var scrollTop = document.documentElement.scrollTop + document.body.scrollTop
      // var scrollHeight = document.documentElement.scrollHeight + document.body.scrollHeight
      // console.log(scrollTop, scrollHeight)
      // if (scrollTop + window.screen.height > scrollHeight) {
      //   this.windowH += 600
      //   this.unlimitedList.push(1, 2, 3, 4, 5, 6, 7, 8)
      // }
      var scrollTop = document.documentElement.scrollTop + document.body.scrollTop
      var offsetHeight = document.documentElement.offsetHeight
      // var buttomWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
      // console.log(buttomWindow)

      // if (buttomWindow) {
      //   this.unlimitedList.push(this.listItem, this.listItem + 1, this.listItem + 2)
      //   this.listItem += 3
      //   if (this.listItem >= 9) {
      //     this.listItem -= 8
      //   }
      // }
      if (scrollTop + window.innerHeight <= offsetHeight) {
        this.unlimitedList.push(this.listItem, this.listItem + 1, this.listItem + 2)
        this.listItem += 3
        if (this.listItem >= 9) {
          this.listItem -= 8
        }
      }
    },
    insertImg () {
      var inter = setInterval(function () {
        if (document.documentElement.scrollHeight > this.windowH) {
          clearInterval(inter)
        }
        console.log(this.listItem)
        this.unlimitedList.push(this.listItem)
        // console.log(this.unlimitedList)
        this.listItem++
        if (this.listItem === 9) {
          this.listItem = 1
        }
      }, 200)
    },
    scroll () {
      window.onscroll = () => {
        var scrollTop = document.documentElement.scrollTop + document.body.scrollTop
        var offsetHeight = document.documentElement.offsetHeight
        if (scrollTop + window.innerHeight <= offsetHeight && scrollTop + window.innerHeight >= offsetHeight - 50) {
          this.unlimitedList.push(this.listItem, this.listItem + 1, this.listItem + 2)
          this.listItem += 3
          if (this.listItem >= 9) {
            this.listItem -= 8
          }
        }
      }
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.addList())
    this.scroll()
  }
  // destroyed () {
  //   window.removeEventListener('scroll', this.addList)
  // }
}
</script>

<style scoped>
.unlimited_list {
  width: 100%;
  /* height: 800px; */
  margin-top: 50px;
  /* background-color: #d1e7fe; */
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list_title {
  width: 60%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}

.main_box {
  width: 80%;
  min-width: 1280px;
  /* height: 300px; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
