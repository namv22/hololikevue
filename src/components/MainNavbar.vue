<template>
  <div id="app">
    <md-toolbar class="md-transparent" md-elevation="10">
      <div class="md-toolbar-section-start">
        <router-link to="/">
          <h1 class="md-title font_title" style="">Hololike</h1>
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-list-item href="https://www.facebook.com/Hololike">
          <img alt="Hololike FB" src="../assets/facebook.png" />
          <md-tooltip md-direction="bottom">Like us on Facebook</md-tooltip>
        </md-list-item>

        <md-list-item
          href="https://www.youtube.com/channel/UCwq3aenbgJR1ZWLvBi2JvTA"
        >
          <img alt="Hololike YT" src="../assets/youtube.png" />
          <md-tooltip md-direction="bottom"
            >Subscrive to us on Youtube</md-tooltip
          >
        </md-list-item>
      </div>
    </md-toolbar>
    <b-card
    overlay
    :img-src="images.cover"
    img-alt="Card Image"
    text-variant="white"
    img-width="1280px"
  >
    <b-card-text class="font_name" style="padding-top: 500px">
      Tớ Mang Clip Hololive Về Dịch
    </b-card-text>
  </b-card>
  </div>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      images: {
        cover: require("@/assets/KoroneRisu.jpg"),
      },
    };
  },
  components: {},
  props: {
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
.font_title {
  font-family: "Roboto";
}
.font_name {
  font-size: 72px;
  font-family: "000 Chinacat [TeddyBear]";
  color: #46c3f2;
  text-shadow: gray;
  border-radius: 75%;
  border-color: gray;
}
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
