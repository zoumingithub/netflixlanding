<template>
  <div class="Item" :style="{backgroundImage: `url(${backdrop})`}">
    <div class="overlay">
      <div class="title">{{title}}</div>
      <div class="rating">{{score}} / 10</div>
      <div class="plot">{{overview}}</div>
      <ListToggle />
    </div>
  </div>
</template>
<script>
import ListToggle from "./ListToggle";

export default {
  props: ["backdrop", "title", "score", "overview"],
  components: { ListToggle }
};
</script>
