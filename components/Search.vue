<template>
  <form @submit.prevent="submit" id="search" class="Search">
    <input type="search" v-model="search" placeholder="Search for a title..." />
  </form>  
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    submit() {
      console.log("searching", this.search);
      this.$emit("search", this.search);
    }
  }
};
</script>
