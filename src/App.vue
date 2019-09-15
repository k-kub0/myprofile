<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/myheader.vue'
import myfooter from './components/myfooter.vue'
// import ColorPicker from './ComponentColorPicker.vue'

export default {
  components: {
    myheader,
    myfooter
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
