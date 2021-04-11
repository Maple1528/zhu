<template>
  <div class="next"  @click="routerLink(link_path)">
    <div class="next_text">
      <slot></slot>
      <img src="@/assets/img/icon/arrow_black.svg">
    </div>
    <div class="next_box"></div>
  </div>
</template>

<script>
export default {
  name: 'Next',
  props: ['link_path'],
  methods: {
    routerLink (linkPath) {
      this.$router.push({
        path: `/${linkPath}`
      })
    }
  }
}
</script>

<style scoped>
  .next {
    width: 120px;
    height: 30px;
    position: absolute;
    bottom: 80px;
    left: 60vw;
    /* background-color: #4d88af; */
    display: flex;
    line-height: 30px;
  }

  .next :hover {
    cursor: pointer;
    /* height: 6px; */
  }

  .next_text {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
  }

  .next_text img {
    width: 25px;
  }

  .next_box {
    width: 80px;
    height: 30px;
    margin-left: 40px;
    background-color: #52b6f9;
    position: absolute;
    right: 10px;
    bottom: -4px;
    transition: .3s ease;
  }

  .next:hover .next_box {
    height: 6px
  }

</style>
