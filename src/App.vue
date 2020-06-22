<template>
  <div id="app">
     <!-- <v-headerwrap></v-headerwrap> -->
     <!-- 一级路由显示在此 -->
    <router-view>
      <v-tabbar></v-tabbar>
    </router-view>
  </div>
  
</template>

<script type="text/ecmascript-6">
 
import tabbar from './components/tabbar/index'
//  import headerwrap from './components/headerwrap/index' 
  export default {
    name:'App',
    components: { 
      // 'v-headerwrap':headerwrap, 
      'v-tabbar': tabbar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #app
    width:100%
    height:100%
    background-color :#eee
 
</style>

