<template>
  <div>
    <div class="top">
      <div class="top_main">
        <div class="top_item">资讯</div>
        <SearchBox></SearchBox>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'News',
  components: {
    SearchBox
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
</style>
