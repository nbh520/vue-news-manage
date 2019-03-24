<!--  -->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {}

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .app-main{
    min-height: calc(100vh - 84px);
    width: 100%;
    position: relative;
    overflow: hidden;
  }</style>
