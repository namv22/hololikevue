<template>
  <div>
    <div
      id="posts"
      v-for="post in posts"
      v-bind:key="post.created"
      align="center"
    >
      <md-card class="md-elevation-12" v-if="post.tag === 'game'">
        <md-card-area>
          <md-card-media></md-card-media>

          <md-card-header>
            <div class="md-title">{{ post.name }}</div>
          </md-card-header>

          <md-card-content align="left"> </md-card-content>
        </md-card-area>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <md-card-expand-trigger>
              <md-button>Xem</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content align="left">
              <b-embed
                type="iframe"
                aspect="16by9"
                :src="'https://www.youtube.com/embed/' + post.yturl"
                allowfullscreen
              ></b-embed>
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
    </div>
  </div>
</template>

<script>
import db from "@/db";

export default {
  name: "MainView",
  name: "MediaCover",
  data() {
    return {
      showDialog: false,
      posts: [],
      playerVars: {
        autoplay: 0,
      },
    };
  },
  methods: {
    playing() {},
  },
  props: {
    msg: String,
  },
  created() {
    db.collection("holoposts")
      .orderBy("created")
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
<style scoped lang="scss">
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
.md-card {
  width: 720px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
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
  max-width: 650px; /* Also helpful. Optional. */
}
</style>
