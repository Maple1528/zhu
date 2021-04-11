<template>
  <div class="proj_row">
    <img class="proj_img" :src="src">
    <div class="proj_title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProjRow',
  props: ['src', 'title']
}
</script>

<style scoped>
.proj_row {
  height: 140px;
  width: 100%;
  margin: 18px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.proj_img {
  height: 140px;
  width: 140px;
  background-color: #d3bebe;
  margin: 0px 20px;
  object-fit: cover;
}

.proj_title {
  width: 200px;
  height: 50px;
  line-height: 25px;
  margin: 0px 20px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.proj_img:hover, .proj_title:hover {
  cursor: pointer;
}
</style>
