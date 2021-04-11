<template>
  <div class="nav_item" @click="routerLink(link_path)">
    <span></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
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
.nav_item {
  height: 36px;
  width: 60px;
  line-height: 36px;
  transition: .5s ease;
  position: relative;
}

.nav_item:hover {
  cursor: pointer;
}

.nav_item span::before {
  content: '';
  width: 36px;
  height: 4px;
  background-color: #52b6f9;
  position: absolute;
  bottom: -5px;
  left: 12px;
  opacity: 0;
  transition: .3s ease;
  z-index: -1;
}

.nav_item:hover span::before {
  bottom: 1px;
  opacity: 1;
}
</style>
