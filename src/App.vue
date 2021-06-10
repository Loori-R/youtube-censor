<template>
  <div id="app">
    <div>Hello</div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from '@/components/HomePage/HomePage';

export default {
  name: 'App',
  components: {
    HomePage
  }
};
</script>

<style lang="scss" scoped>
  @import "./sass/style";

  #app {
    @include global-font;
  }
</style>
