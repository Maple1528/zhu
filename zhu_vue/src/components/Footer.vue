<template>
  <div class="footer">
    <div>关注我们</div>
    <div>联系方式：<span>11123456789</span></div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  width: 70%;
  height: 150px;
  padding: 0px 15%;
  background-color: #2d3541;
  color: #c0c0c0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
}

.footer span {
  font-family: Montserrat;
}
</style>
