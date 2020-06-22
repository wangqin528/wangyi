<template>
    <div class="header">
      <h1>
          <a class="logo" to="/">
          
            <img src="../../images/logo.webp" alt="" to='/'>
          
          </a>
      </h1>
      
        <div class="search">
           <a to="./search">
              <input type="text" class="iconfont icon-fenxiang" placeholder="搜索商品，共有55234件"  >
           </a>
        </div>
        <button class="login">登录</button>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'headerwrap',
    methods:{
      
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     .header 
           padding:16px 30px
           display :flex
           overflow: hidden
           flex-direction :row
           flex-grow :nowrap
           align-items:center
           justify-content:center
           background-color :#fff
           .logo
              flex-grow :2
              height :40px
              margin-right :20px
             
              img
                 display :inline-block     
           .search
              flex-grow :3
            input
              width :442px
              height :56px
              border-radius:10px
              font-size :28px
              background-color :#ededed
              border :1px solid white
              color :#666
            button
              
              margin-left :16px
              border:1px solid red 
              border-radius:10px
              text-align :center
              line-height :40px
              background-color :white
              padding :0px 10px
              flex-grow :1
              float:left
              color :red
              font-size :24px

 
</style>
