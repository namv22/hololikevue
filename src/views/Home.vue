<template>
  <div class="home">
    <MainNavbar></MainNavbar>
    <br /><br /><br /><br />
    <div style="background-color: #fff; height: 100vh;">
      <img
        alt="Hololike logo"
        src="../assets/watermark small.png"
        class="rotating"
      />
      <MainView msg="Work in progress, please come back later!!!" />
    </div>
    <div>
      <!-- Simply add the component (NB! Add your page link as prop data-href="String" and your preferred link title as link-text="String") -->
    <vue-facebook-page data-href="https://www.facebook.com/Hololike" link-text="Tớ Mang Clip Hololive Về Dịch" />
    <md-tooltip md-direction="right">Click here to get news from Facebook</md-tooltip>
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
@keyframes rotating {
  from {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotating {
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 5s linear infinite;
  -moz-animation: rotating 5s linear infinite;
  -ms-animation: rotating 5s linear infinite;
  -o-animation: rotating 5s linear infinite;
  animation: rotating 5s linear infinite;
}
</style>
