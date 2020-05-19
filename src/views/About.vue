<template>
<div>
    <h1>This is a website for Hololike fanpage</h1>
    <img alt="Hololike logo" src="../assets/watermark small.png" class="rotating">
    <span>
        This website was created by these following components:

        vue: ^2.6.11,
        vue-facebook-page: ^1.0.1,
        vue-material: ^1.0.0-beta-11,
        vue-parallaxy: ^1.1.1,
        vue-router: ^3.1.6,
        vue-youtube: ^1.4.0,
        vuefire: ^2.2.2,
        vuetify: ^2.2.11
        @fortawesome/fontawesome-svg-core: ^1.2.28,
        @fortawesome/free-solid-svg-icons: ^5.13.0,
        @fortawesome/vue-fontawesome: ^0.1.9,
        bootstrap: ^4.4.1,
        bootstrap-vue: ^2.11.0,
        firebase: ^7.14.0,

    </span>
</div>
</template>

<script>
export default {
    name: "About",
};
</script>

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
