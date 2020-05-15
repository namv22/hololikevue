<template>
<div class="home">
    <MainNavbar></MainNavbar>
    <b-card overlay :img-src="images.cover" img-alt="Card Image" text-variant="white" img-width="1000px">
    </b-card>
    <div class="container-fluid md-elevation-22">
        <b-tabs content-class="mt-3" fill>
            <b-tab title="Game" active>
                <GameView></GameView>
            </b-tab>
            <b-tab title="Music">
                <MusicView></MusicView>
            </b-tab>
            <b-tab title="Meme">
                <MemeView></MemeView>
            </b-tab>
            <b-tab title="About">
                <About></About>
            </b-tab>
        </b-tabs>
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
import GameView from "@/components/GameView.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import About from "@/views/About.vue";
import MemeView from "@/components/MemeView.vue"
import MusicView from "@/components/MusicView.vue"

export default {
    name: "Home",
    data() {
        return {
            images: {
                cover: require("@/assets/KoroneRisu.jpg"),
            },
        };
    },
    components: {
        GameView,
        MainNavbar,
        MemeView,
        About,
        MusicView,
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

.md-toolbar+.md-toolbar {
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
    border-radius: 150%;
    border-color: #086C91;
}

.bottom-gradient {
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 72px);
}

.repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
            rgba(255, 0, 0, 0.25),
            rgba(255, 0, 0, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 5px,
            rgba(0, 0, 255, 0.25) 10px);
}
</style>
