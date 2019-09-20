<template>
  <div id="hero" class="Hero" :style="{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}">
    <div class="content">
      <img class="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
      <h2>Season 2 now available</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
      <div class="button-wrapper">
        <HeroButton primary="{true}" text="Watch now" />
        <HeroButton primary="{false}" text="+ My list" />
      </div>
    </div>
    <div class="overlay"></div>
  </div>  
</template>
<script>
import HeroButton from "./HeroButton";
export default {
  components: { HeroButton }
};
</script>
