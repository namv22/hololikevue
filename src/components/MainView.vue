<template>
  <div>
    <div
      id="posts"
      v-for="post in posts"
      v-bind:key="post.created"
      align="center"
      style="padding-right: 100px"
    >
      <b-card
        v-if="post.id % 2 !== 0"
        :img-src="'http://img.youtube.com/vi/'+post.yturl+'/mqdefault.jpg'"
        img-alt="Card image"
        img-left
        style="max-width: 800px;"
        border-variant="secondary"
        header-border-variant="secondary"
      >
        <b-card-text>
          <div class="md-title" align="left">{{ post.name }}</div>
        </b-card-text>
        <b-button v-b-toggle="post.created" variant="outline-info"
          >Xem</b-button
        >
      </b-card>
      <br />
      <b-card
        v-if="post.id % 2 === 0"
        :img-src="'http://img.youtube.com/vi/'+post.yturl+'/mqdefault.jpg'"
        img-alt="Card image"
        img-right
        style="max-width: 800px;"
        border-variant="secondary"
        header-border-variant="secondary"
      >
        <b-card-text>
          <div class="md-title" align="right">{{ post.name }}</div>
        </b-card-text>
        <b-button v-b-toggle="post.created" variant="outline-info"
          >Xem</b-button
        >
      </b-card>

      <b-collapse :id="post.created" class="mt-2">
        <b-card>
          <b-embed
            type="iframe"
            aspect="16by9"
            :src="'https://www.youtube.com/embed/' + post.yturl"
            allowfullscreen
          ></b-embed>
          <h2 class="card-text" align="left">{{ post.description }}</h2>
        </b-card>
      </b-collapse>
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
.md-dialog {
  max-height: 1400px;
  max-width: 800px;
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
