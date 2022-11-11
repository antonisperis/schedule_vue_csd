<template>
  <LeftSideTab tasks=[] />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LeftSideTab from "./components/leftSideTab/LeftSideTab.vue"

export default {
  name: 'App',
  components: {
    LeftSideTab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "../styles/cardStyles.css";
@import "../styles/scrollbar.css";
</style>
