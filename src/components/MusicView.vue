<template>
<div>
    <ul>
        <li id="posts" v-for="post in posts" v-bind:key="post.name">
            <b-card no-body style="max-width: 20rem;" class="md-elevation-12" v-if="post.tag === 'music'">
                <b-card-body>
                    <md-card-media>
                        <img :src="
                'http://img.youtube.com/vi/' + post.yturl + '/hqdefault.jpg'
              " />
                    </md-card-media>
                    <b-card-title>{{ post.name }}</b-card-title>
                    <b-card-text></b-card-text>
                </b-card-body>
                <b-card-body>
                    <b-button v-b-modal.modal-xl="'music'" @click="sendInfo(post)" variant="outline-secondary">Xem</b-button>
                </b-card-body>
            </b-card>
        </li>
    </ul>
    <b-modal size="xl" :id="'music'" :title="selectedPost.name">
        <b-embed type="iframe" aspect="16by9" :src="'https://www.youtube.com/embed/' + selectedPost.yturl" allowfullscreen></b-embed>
    </b-modal>
</div>
</template>

<script>
import db from "@/db";

export default {
    name: "MusicView",
    name: "MediaCover",
    data() {
        return {
            showDialog: false,
            posts: [],
            selectedPost: '',
            playerVars: {
                autoplay: 0,
            },
            showModal: false,
        };
    },
    methods: {
        playing() {},
        modalId(i) {
            return "music";
        },
        sendInfo(post) {
            this.selectedPost = post;
        },
    },
    props: {
        msg: String,
    },
    created() {
        db.collection("holoposts")
            .orderBy("date")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.posts.push(doc.data());
                });
            });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.b-card {
    margin: 4px;
    display: inline-block;
}

.md-card-content {
    white-space: pre-wrap;
}

.Accordion {
    background: #fff;
    box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.25);
    overflow: hidden;
}

.iframe {
    width: 100%;
    max-width: 650px;
    /* Also helpful. Optional. */
}
</style>
