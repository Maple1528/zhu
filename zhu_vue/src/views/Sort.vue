<template>
  <div>
    <div class="top">
      <div class="top_main">
        <div class="top_item item1">
          <div>{{ sortItem1 }}</div>
          <img src="@/assets/img/icon/fold.svg" alt="展开">
          <ul>
            <li v-for="(item, i) in sortBasis1" :key="i" @click="changeItem1(i)">{{ item }}</li>
          </ul>
        </div>
        <div class="top_item item2">
          <div>{{ sortItem2 }}</div>
          <img src="@/assets/img/icon/fold.svg" alt="展开">
          <ul>
            <li v-for="(item, i) in sortBasis2" :key="i" @click="changesort2(i)">{{ item }}</li>
          </ul>
        </div>
        <SearchBox></SearchBox>
      </div>
    </div>
    <div class="sort_result" v-if="show">
      <div class="sort_result_box">
        <div class="result_title">有关"{{ sortItem2 }}"的项目</div>
        <div class="result_box">
          <div class="list_item" v-for="(item, i) in sortResult" :key="i"><ProjItem :proj_id="item"></ProjItem></div>
        </div>
      </div>
    </div>
    <div class="sort_result_null" v-if="!show">
      <div class="result_null_title">暂无结果</div>
    </div>
    <UnlimitedList></UnlimitedList>
    <ToTop></ToTop>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import ProjItem from '@/components/ProjItem.vue'
import UnlimitedList from '@/components/UnlimitedList.vue'
import ToTop from '@/components/ToTop.vue'

import axios from 'axios'

export default {
  name: 'Sort',
  data () {
    return {
      show: false,
      sortItem1: '地区',
      sortItem2: '中国',
      sortBasis1: ['地区', '类型'],
      sortBasis2: ['中国', '美国', '瑞士'],
      locations: ['中国', '美国', '瑞士'],
      types: ['住宅', '展陈建筑', '文化中心', '教育建筑', '其他类型'],
      sortResult: []
    }
  },
  mounted () {
    this.init()
  },
  components: {
    SearchBox,
    ProjItem,
    UnlimitedList,
    ToTop
  },
  methods: {
    init () {
      var sortItem = this.$route.params.sortItem
      console.log(sortItem)
      if (sortItem === 'location') {
        this.sortItem1 = this.sortBasis1[0]
        this.sortBasis2 = this.locations
        this.sortItem2 = this.locations[0]
        this.selectLocation()
      } else if (sortItem === 'type') {
        this.sortItem1 = this.sortBasis1[1]
        this.sortBasis2 = this.types
        this.sortItem2 = this.types[0]
        this.selectType()
      }
      this.show = true
    },
    changeItem1 (i) {
      this.sortItem1 = this.sortBasis1[i]
      if (i === 0) {
        this.sortBasis2 = this.locations
        this.sortItem2 = this.locations[0]
        this.selectLocation()
      } else {
        this.sortBasis2 = this.types
        this.sortItem2 = this.types[0]
        this.selectType()
      }
    },
    changesort2 (i) {
      this.sortItem2 = this.sortBasis2[i]
      if (this.sortItem1 === '地区') {
        this.selectLocation()
      } else {
        this.selectType()
      }
    },
    selectLocation () {
      this.showItem = false
      axios.post('/api/selectLocation/' + this.sortItem2, { location: this.sortItem2 }).then(res => {
        this.sortResult = []
        setTimeout(() => {
          if (res.data.code === 1) {
            var result = res.data.result
            for (let index = 0; index < result.length; index++) {
              this.sortResult.push(result[index].id)
            }
            console.log(this.sortResult)
            this.showItem = true
          }
        }, 50)
        console.log(this.sortResult)
      }).catch(err => {
        console.log(err)
      })
    },
    selectType () {
      this.showItem = false
      axios.post('/api/selectType/' + this.sortItem2, { type: this.sortItem2 }).then(res => {
        this.sortResult = []
        setTimeout(() => {
          if (res.data.code === 1) {
            var result = res.data.result
            for (let index = 0; index < result.length; index++) {
              this.sortResult.push(result[index].id)
            }
            console.log(this.sortResult)
            this.showItem = true
          }
        }, 50)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 100px;
  background-color: #d1e7fe;
  display: flex;
  align-content: center;
  padding-top: 100px;
  justify-content: center;
}

.top_main {
  height: 50px;
  width: 670px;
  /* background-color: #a1c9e4; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  line-height: 50px;
}

.top_item {
  height: 50px;
  margin-right: 20px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}

.top_item:hover {
  cursor: pointer;
}

.item1 {
  width: 60px;
}

.item2 {
  width: 100px;
}

.top_item img {
  width: 10px;
  height: 50px;
  margin-left: 10px;
  transition: .3s ease;
}

.top_item:hover ul {
  opacity: 1;
  visibility: visible;
  top: 50px;
}

.top_item ul {
  width: 110%;
  list-style: none;
  position: absolute;
  top: 80px;
  background-color: #ffffff;
  box-shadow: 5px 5px 20px #0143934d;
  border-radius: 5px;
  padding: 6px 0px;
  transition: .3s ease;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 50;
}

.top_item ul li{
  height: 40px;
  line-height: 40px;

}

.top_item ul li:hover {
  background-color: #f0f0f0;
}

.sort_result {
  width: 100%;
  height: 350px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sort_result_box {
  width: 80%;
  /* width: 1280px; */
  display: flex;
  align-items: center;
  flex-direction: column;
}

.result_title {
  width: 75%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}

.result_box {
  width: 80%;
  min-width: 1260px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.list_item {
  transition: .5s ease;
}

.sort_result_null {
  width: 100%;
  height: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.result_null_title {
  width: 60%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}
</style>
