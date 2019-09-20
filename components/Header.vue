<template>
  <header class="Header">
    <Logo />
    <Navigation />
    <Search @search="handleSearch"/>
    <UserProfile />
  </header>
</template>
<script>
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import UserProfile from "./UserProfile";

export default {
  components: {
    Logo,
    Navigation,
    Search,
    UserProfile
  },
  props: ["handleSearch"]
};
</script>
