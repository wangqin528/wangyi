<template>
  <div class="buy">
    <div class=header>
      <div class="icon "></div>
      <div class="txt">值得买</div>
      <div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
    </div>
    <div class="contentWrap">
      <div class="nav">
        <div class="bg">
          <img src="../../images/zhibg.png" alt="">
          <img src="" alt="">
          <div class="txt">严选好物 用心生活</div>
        </div>
          
        <div class="swiperwrap">
          <div class="swiperf">
            <img src="">
            <div class="maintxt">选妹购物车</div>
            <div class="desctxt">每月好物</div>
            <img src="">
            <div class="maintxt">选妹购物车</div>
            <div class="desctxt">每月好物</div>
            <div class="point"></div>
          </div>
        </div>
      </div>
    
      <div class="actorwrap">
         <div class="actor">
           <img src="../../images/actor.jpg" alt="">
           <div class="lookdesc">paopaoxiu</div>
           <div class="looktime">
             <img src="" alt="">
             <span>好物打赏</span>
             <div class="lookk">
               <div class="icon"> 10K</div>
             </div>
           </div>
         </div>
      
        
      </div>
    <tabbar></tabbar>
    </div>
    
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'buy',
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .buy
    width:100%
    background-color :#eee
    .header
      width:750px
      height:100px
      display:flex
      flex-direction :row
      justify-content :space-around
      text-align :center
      line-height :100px
      .icon
        width:46px
        height:100px
      .txt
         line-height :100px
         font-size :36px
    .contentWrap
      height:1333px
      width :750px
      margin :0 auto
      .nav
        width:100%
        height:685px
        position :relative
        .bg
          width :750px 
          height :628px
          img
            height:528pxpx
            width :750px
          .txt
            color :white
            font-size :30px
            position :absolute
            top:90px
        .swiperwrap
          width :710px
          margin-left :20px
          height :540px
          position :absolute
          bottom:0
          background-color :#fff
          border-radius :20px
          opacity :.9
      .actorwrap
        width:690px
        height :auto
        background-color :#eee
        margin:30px 20px 0px 20px
        .actor
          width:350px
          height:396px
          background-color :#fff
          border-radius :20px
          img 
            border-top-right-radius :20px
            border-top-left-radius :20px
          .lookdesc
            width:311px
            height:80px
            padding :18px 16px 0px 
          .looktime
            margin:34px 16px 24px
            width:311px
            height:48px 
            line-height :48px       
            font-size:24px
            display :flex
            flex-direction :row
            justify-content :space-around      
        
</style>
