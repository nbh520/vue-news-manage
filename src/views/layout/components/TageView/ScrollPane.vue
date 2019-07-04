<template>
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>
<script>
// const tagAndTagSpacing = 4
export default {
  name: 'ScrollPance',
  data() {
    return {
      left: 0
    }
  },
  computed: {
  },
  methods: {
    handleScroll(e) {
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
</style>
