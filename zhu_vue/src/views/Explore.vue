<template>
  <div class="search">
    <div class="top">
      <div class="top_main">
        <div class="top_item">项目</div>
        <SearchBox></SearchBox>
      </div>
    </div>
    <div class="search_container">
      <div class="container_title title">推荐项目</div>
      <div class="container_box">
        <ProjItem :proj_id="1"></ProjItem>
        <ProjItem :proj_id="2"></ProjItem>
        <ProjItem :proj_id="6"></ProjItem>
      </div>
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

export default {
  name: 'Explore',
  data () {
    return {
      listItem: 1,
      unlimitedList: [1, 2, 3, 4, 5, 6, 7, 8],
      windowH: window.screen.height + 600
    }
  },
  computed: {
  },
  mounted () {
  },
  components: {
    SearchBox,
    ProjItem,
    UnlimitedList,
    ToTop
  },
  methods: {
  }
}
</script>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}

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
  width: 600px;
  /* background-color: #a1c9e4; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  line-height: 50px;
}

.top_item {
  height: 50px;
  margin-right: 20px;
  line-height: 50px;
}

.search_container {
  width: 100%;
  height: 350px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  width: 60%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
}

.container_box {
  width: 80%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  /* background-color: #a7d2ff; */
}

</style>
