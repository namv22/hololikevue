<template>
  <div>
    <md-card
      id="posts"
      v-for="post in posts"
      v-bind:key="post.created"
    >
      <md-card-media> </md-card-media>

      <md-card-header>
        <div class="md-title" align="left">{{ post.name }}</div>
      </md-card-header>

      <md-card-actions md-alignment="space-between">
        <md-button @click="first = true">Xem</md-button>
      </md-card-actions>
      <md-dialog-alert
      :md-active.sync="first"
      md-content="Your post has been deleted!"
      md-confirm-text="Cool!" />
    </md-card>
    
  </div>
</template>

<script>
import db from "@/db";

export default {
  name: "MainView",
  name: "MediaCover",
  data() {
    return {
      first: false,
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
</style>
