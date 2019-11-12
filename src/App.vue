<template>
  <div class="app">
    <header>
      <app-navigation></app-navigation>
    </header>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home";
import Navigation from "./components/Navigation";

export default {
  components: {
    appHome: Home,
    appNavigation: Navigation
  },
  data() {
    return {};
  }
  // created() {
  //   this.$store.dispatch("initializeEmployees");
  // }
};
</script>

<style lang="scss">
.app {
  text-align: center;

  header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
</style>
