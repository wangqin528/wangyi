
<template>
  <div class="firstpage">
    <div class="header">
       <div class="logo">
          
            <img src="../../images/logo.webp" alt="">
          
        </div>
        <div class="search">
          <input type="search" class="iconfont icon-fenxiang" placeholder="搜索商品，共有55234件">
        </div>
        <button class="login">登录</button>
    </div>
    <div class="good">
        <div class="navwrap">
            <span>推荐</span>
            <span>居家生活</span>
            <span>服饰鞋包</span>
            <span>美食酒水</span>
            <div class="toggle iconfont icon-31xiala"></div>
        </div>
        <ul class="tagList">
            <li>轮播图</li>
        </ul>
        <ul>
            <li>网易自营品牌</li>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
        </ul>
        <div class="swiper-slide">
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
            <a href="">新品首发</a>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name:'firstpage',
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .firstpage    
      width: 100%
      .header 
           padding:16px 30px
           color :pink 
           display :flex
           overflow: hidden
           flex-direction :row
           flex-grow :nowrap
           align-items:center
           justify-content:center
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

            //   color ：#10011
      .navwrap
        display :flex
        flex-direction :row
        justify-content :space-around
        width: 100%
        background-color :pink
        font-size :28px
        color :#333333
        text-align :center

</style>
