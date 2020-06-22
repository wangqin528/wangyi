
<template>
  <div class="firstpage">
    <v-headerwrap></v-headerwrap>
   
      
      <!-- v-for="(name,index) in indexCateModule" :key="index" -->
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options">
        </ly-tab>
        <div class="toggle iconfont icon-31xiala"></div>
      
      <div class="good">
        <swiper ref="mySwiper" :options="swiperOptions" style="height:370px">
            <swiper-slide><img src="../../../images/lunbo-1.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-2.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-3.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-4.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-51.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-6.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-7.webp" alt="" style="width:100%"></swiper-slide>
            <swiper-slide><img src="../../../images/lunbo-8.webp" alt="" style="width:100%"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <ul class="sign">
            <li>网易自营品牌</li>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
        </ul>
        <div class="swiper-slid">
            <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
            <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
           <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
           <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
           <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
            <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
             <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
           <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
          <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
           <div class="swiperitem">
              <a href="">
                <img src="../../../images/xinpin.png" alt="">
              <div class="txt"><span>新品首发</span></div>
            </a>
            </div>
            
        </div>
        <div class="hot">
          <div class="up" >
            <img src="../../../images/bg-1.gif" alt="" >
          </div>
          <div class="down">
            <div class="downup">
              <img src="../../../images/dacu.webp" alt=""   >
            </div>
            <div class="downsmall">
              <img src="../../../images/kouzhao.webp" alt="">
              <img src="../../../images/xiaolongxia.webp" alt="">
              <img src="../../../images/zhuanxiang.webp" alt="">
            </div>
          </div>
        </div>
        <div class="freshman" >
          <div class="moduletitle">
            <div class="leftl"></div>
            <span class="txt">新人专享礼</span>
            <div class="rightr"></div>
          </div>
          <div class="left">
              <div class="name">新人专享礼包</div>
              <img src="../../../images/xianshihongbao.png" alt="">
          </div>
          <div class="right">
            <div class="rightup">
               <div class="title">福利社</div>
               <div class="subtitle">今日特价</div>
               <img src="../../../images/tshirt.webp" alt="">
            </div>
             <div class="rightdown">
               <div class="title">新人拼团</div> 
               <div class="tag">1元起包邮</div>
               <img src="../../../images/weishengzhi.webp" alt="">
              </div>
          </div>
        </div>
        <footer>
          <div class="footwrap">
            <div class="middle">
              <div class="footleft">下载APP</div>
              <div class="footright">电脑版</div>
            </div>
           
            <p>网易公司版权所有&nbsp;©&nbsp;1997-2020</p>
            <p>食品经营许可证：&nbsp;JY13301080111719</p>
          </div>
         </footer>
    </div>
    
    <tabbar></tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
import headerwrap from '../../../components/headerwrap'
import tabbar from '../../../components/tabbar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapState} from 'vuex'  
  export default {
    name:'firstpage',
    
     data() {
      return {
        selectedId: 0,
        items: [
          {label: '推荐'},
          {label: '居家生活'},
          {label: '服饰鞋包'},
          {label: '美食酒水'},
          {label: '个护清洁'},
          {label: '母婴亲子'},
          {label: '运动旅行'},
          {label: '数码家电'},
          {label: '严选全球'},
          {label: ''}
        ],
        options: {
          activeColor: '#dd1a21'
          // 可在这里指定labelKey为你数据里文字对应的字段
        },
      
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
           
          loop : true,
          autoplay:{
            delay:5000
          }
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      },   
      ...mapState({
        list:'list'
        })
    },
     mounted() {
      console.log('Current Swiper instance object', this.swiper)
    },
    components: {
      'v-headerwrap':headerwrap,
      Swiper,
      SwiperSlide
    },
    methods:{
      
    },
    directives: {
      swiper: directive
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .firstpage    
        width: 100%
        margin:0 auto  
        .toggle 
          position :fixed
          top:90px
          right:-20px
          width:140px
          height :60px
          margin :0px 15px
          text-align :center
          line-height :60px
          background-color :#fff
          z-index :8
        .iconfont
          font-size :30px
        .good
            width:750px
            margin: 0 auto
            .swiper-wrapper
              width:750px
              position:absolute
              top:-5%
              img
                width:100%
          .swiper-pagination-bullets
            position:absolute
            top:320px
            .swiper-pagination-bullet  
              width:40px
            .swiper-pagination-bullet-active 
              background-color :#fff
          .sign
            display :flex
            flex-direction :row
            justify-content :space-around
            width :690px
            padding :0 30px
            height:72px
            font-size:24px
            color :#333
            line-height :72px
          
          .swiper-slid
            width :750px
            height:340px
            padding-bottom :30px
            
            .swiperitem
                display: block;
                width:13%;
                height:auto;
                float: left;
                margin: 10px 20px 9px; 
                a
                  margin-bottom: .12rem;
                  img 
                    width: 110px;
                    height:110px;
                    display :inline-block 
                    vertical-align :middle  
                  .txt 
                    margin-top:10px
                    width :110px
                    height :36px
                    text-align :center
                    line-height :36px
                    

          .hot 
            width :750px
            height:588px  
            .up
              width :100%
              height :240px
              background-color :#333
              img 
                width: 100%
                height :100%
            .down
              width :100%
              height :348px
              background-color :#b10011
              margin :0 auto
              .downup
                width :710px
                height :80px
                margin :0 auto
                img 
                  width :100%
                  margin-top :20px
              .downsmall
                margin-left :20px
              
                img
                  width :31%
                  height :220px  
                  margin-right :10px
                  margin-top :30px
          .freshman
            width:750px
            height :528px 
            padding :20px 30px    
            .moduletitle
              height :90px
              line-height :90px
              text-align :center
              .txt
                font-size :32px
            .left
              width :49%
              height:434px
              float: left
              margin-right :4px
              background-color :#f9e9cf
              .name
                width:343px
                font-size :32px
                padding :30px 0 0 30px
              img 
                margin:30px 0 0 30px
                vertical-align :middle
            .right
              width:343px
              height:438px
              overflow :hidden
              .title
                font-size:32px
              
              .rightup
                width :313px
                height :195px
                padding :20px 0 0 30px
                position :relative
                img 
                  position:absolute
                  right :0
                  bottom :0
              .rightdown
                width :313px
                height :195px
                padding :20px 0 0 30px
                position relative
                img 
                  width:200px
                  position :absolute
                  right :0
                  bottom :0
          footer 
            width:710px
            height:243px
            padding :54px 20px 28px 
            background-color :#333   
            text-align :center
            vertical-align :middle  
            .footwrap
              margin-bottom:98px
              .middle
                display :flex
                justify-content :center
                margin-bottom:36px
                .footleft
                  width: 170px
                  height:60px
                  line-height :60px
                  text-align :center
                  color :white
                  border :1px solid #999
                  border-radius: 4px;
                  margin-right:50px
                .footright
                  width: 170px
                  height :60px
                  line-height :60px
                  text-align :center
                  color :white
                  border :1px solid #999
                  border-radius: 4px;
              p
                color :#999

               


</style>
