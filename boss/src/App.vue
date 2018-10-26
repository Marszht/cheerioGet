<template>
  <div id="app">
    <tab></tab>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
  components: {
    'tab': Tab
  }

}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
