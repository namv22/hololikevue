<template>
  <div id="app">
    <md-toolbar md-elevation="0">
      <div class="md-toolbar-section-start">
        <router-link to="/">
          <h1 class="md-title font_title" style="">Hololike</h1>
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-list-item href="https://www.facebook.com/Hololike">
          <img alt="Hololike FB" src="../assets/facebook.png" />
        </md-list-item>

        <md-list-item href="https://www.youtube.com/channel/UCwq3aenbgJR1ZWLvBi2JvTA">
          <img alt="Hololike YT" src="../assets/youtube.png" />
        </md-list-item>
      </div>
    </md-toolbar>

    <div style="position: relative;">
      <parallax :fixed="true">
        <img src="@/assets/Korone chase Risu.jpg" height="720px"/>
        
      </parallax>
      <h1 class="font_name">Tớ Mang Clip Hololive Về Dịch</h1>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
  name: "RegularToolbar",
  components: {
    Parallax,
  },
  props: {
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
.font_title{
  font-family: "Roboto";
}
.font_name{
  font-size: 72px;
  font-family: "000 Chinacat [TeddyBear]";
  color: white;
}
.bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
</style>
