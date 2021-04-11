<template>
  <div class="search_box">
    <img src="@/assets/img/icon/search.svg" alt="搜索" class="search_icon">
    <input class="search_text" type="search" placeholder="搜索">
  </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style scoped>
div input{
  padding: 0px;
  margin: 0px;
}

/* .search{
  width: 100%;
  height: 100px;
  background-color: #d1e7fe;
  display: flex;
  align-content: center;
  padding-top: 100px;
  justify-content: center;
}

.search_main {
  height: 50px;
  width: 600px;
  background-color: #a1c9e4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  line-height: 50px;
}

.search_item_box {
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 25px;
}*/

.search_box {
  height: 50px;
  width: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  text-align: center;
}

.search_icon {
  height: 20px;
  width: 20px;
  background-color: #f0f0f0;
  padding: 15px;
}

.search_text {
  height: 50px;
  width: 390px;
  border: none;
  /* padding-left: 8px; */
  font-family: 'SourceHanSansCN';
  font-display: inherit;
  margin: 0px 20px;
  outline: none;
}

</style>
