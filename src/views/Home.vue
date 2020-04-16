<template>
  <div class="home">
    <MainNavbar></MainNavbar>
    <div class="container-fluid md-elevation-22">
      <MainView></MainView>
    </div>
    <div>
      <!-- Simply add the component (NB! Add your page link as prop data-href="String" and your preferred link title as link-text="String") -->
      <vue-facebook-page
        data-href="https://www.facebook.com/Hololike"
        link-text="Tớ Mang Clip Hololive Về Dịch"
      />
      <md-tooltip md-direction="right"
        >Click here to get news from Facebook</md-tooltip
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainView from "@/components/MainView.vue";
import MainNavbar from "@/components/MainNavbar";

export default {
  name: "Home",
  components: {
    MainView,
    MainNavbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  background-color: white;
  padding: 15px;
  width: 1800px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  overflow: hidden;
  clear: both;
  background-clip: border-box;
}
</style>
