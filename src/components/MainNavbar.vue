<template>
  <div>
    <parallax>
    <img src="@/assets/Korone chase Risu.jpg" alt="very cool bg">
    
    <md-toolbar 
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :color-on-scroll="colorOnScroll">
    <router-link to="/">
      <h3 class="md-title">Hololike</h3>
    </router-link>
    </md-toolbar>
  </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'RegularToolbar',
  components: {
      Parallax
    },
  props: {
    colorOnScroll: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
</style>
