<template>
  <div ref="titlecategory" class="TitleList" :data-loaded="isMounted">
    <div class="Title">
      <h1>{{title}}</h1>
      <div class="titles-wrapper">
        <Item v-for="t in titleList" :key="t.id"
          :title="t.name"
          :score="t.score"
          :overview="t.overview"
          :backdrop="t.backdrop" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Item from "./Item";

export default {
  props: ["title", "titles", "url"],
  components: { Item },
  data() {
    return {
      data: [],
      isMounted: false
    };
  },
  computed: {
    titleList() {
      const list = [];
      for (let i = 0; i < this.data.length && i < 5; i++) {
        const title = this.data[i];
        list.push({
          backdrop: "http://image.tmdb.org/t/p/original" + title.backdrop_path,
          name: title.name || title.original_title,
          score: title.vote_average,
          overview: title.overview,
          id: title.id
        });
      }
      return list;
    }
  },
  created() {
    const requestUrl =
      `https://api.themoviedb.org/3/${this.url}&api_key=` + this.$apiKey;
    axios
      .get(requestUrl)
      .then(({ data }) => {
        this.data = data.results;
        this.isMounted = true;
      })
      .catch(err => console.error(this.url, err));
  }
};
</script>
