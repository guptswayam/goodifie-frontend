<template>
  <div id="app">
  <div v-if="show">
    <app-header></app-header>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  },
  components: {
    appHeader
  },
  async mounted(){
    try {
      await this.$store.dispatch("setUser");
      await this.$store.dispatch("setTotalCartItems");
      this.show=true;
    } catch (err) {
      this.show = true;
    }
  }
}
</script>

<style>

body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  position: relative;
}
</style>
