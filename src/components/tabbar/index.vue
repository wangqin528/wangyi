<template>
  <div class="tabbarWrap">
      <div class="tab">
          <div class="item" >
           <router-link  to="/" exact> 
              <div class="iconfont icon-home"></div>
              <span class="txt">
                首页 
                </span> 
            </router-link>
          </div>
          <router-link  to="/sort">
             <div class="item" >
                <div class=" iconfont icon-liebiao2"></div>
                <span class="txt">分类</span>
              </div>
          </router-link>
         <router-link  to="/buy"> 
            <div class="item ">
              <div class="iconfont icon-31shoucang"></div>
              <span class="txt">值得买</span>
            </div>
         </router-link>
         
           <router-link  to="/shoppingcart">
             <div class="item " > 
                <div class="iconfont icon-cart"></div>
                <span class="txt">购物车</span>
              </div>
         </router-link>
        
           <router-link  to="/personal">
            <div class="item ">
              <div class="iconfont icon-mine"></div>
              <span class="txt">个人</span>
            </div>
         </router-link>
      
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'tabbar',
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabbarWrap
      position :fixed
      bottom :0
      width: 100%
      height:98px
      background-color :#fff
      .tab
         width :100%
         display :flex
         flex-direction :row
         align-items: center;
         justify-content: space-around;
         color :#666666
         height :72px
         margin-top:13px
         box-sizing :border-box
         .item
            width :70px
            height:71px
            text-align :center
            box-sizing :border-box
           .router-link-active
                color:#b4282d
                .icon path
                
                   fill: #1b2b2b
                   
            .txt 
              text-align :center
              font-size :24px
              white-space :nowrap
              display :block 
              margin:7px 0px 0px              
            .iconfont 
                width :72px 
                height :40px        
                font-size :40px
                text-align :center
                color :#666666
                
              
            
            


 
</style>
