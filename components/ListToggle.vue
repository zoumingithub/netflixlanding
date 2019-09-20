<template>
  <div @click="handleClick" :data-toggled="toggled" class="ListToggle">
    <div>
      <i class="fa fa-fw fa-plus"></i>
      <i class="fa fa-fw fa-check"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    handleClick() {
      this.toggled = !this.toggled;
    }
  }
};
</script>
