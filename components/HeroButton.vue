<template>
  <a href="#" 
    class="Button" 
    :data-primary="primary">{{text}}</a>
</template>
<script>
export default {
  props: ["primary", "text"]
};
</script>
