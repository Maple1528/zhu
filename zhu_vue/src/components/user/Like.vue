<template>
  <div class="user_like">
    <div class="item_box">
      <ProjItem :proj_id="1"></ProjItem>
      <ProjItem :proj_id="1"></ProjItem>
      <ProjItem :proj_id="1"></ProjItem>
    </div>
  </div>
</template>

<script>
import ProjItem from '@/components/ProjItem.vue'

export default {
  name: 'Like',
  components: {
    ProjItem
  }
}
</script>

<style scoped>
.user_like {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* overflow: scroll; */
}

.item_box {
  height: 100%;
  width: 880px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
