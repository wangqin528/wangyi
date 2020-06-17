<template>
  <div id="app">
    <v-firstpage></v-firstpage>
    <v-tabbar></v-tabbar>
  </div>
  
</template>

<script type="text/ecmascript-6">
import firstpage from './pages/firstpage'
import tabbar from './components/tabbar/index'
  export default {
    name:'App',
    components: {
      'v-firstpage': firstpage,
      'v-tabbar': tabbar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

 
</style>

