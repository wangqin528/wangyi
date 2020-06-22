<template>
  <div class="sort">
    <!-- <v-search></v-search> -->
    <div class="left">
      <ul class="m-cateNavVert"> 
          <li class="item active" v-for="(item,index) in categoryLList" :key=index ><a href="" > {{categoryLList[index].name}}</a>
            <div class="right" >
              <div class="imgsort">
                <img src="../../images/sortup.webp" alt="">
              </div>
              <div class="rightdown" >
                  <ul class="list">
                    
                      <li  v-for="(item,index) in cateLists" :key="index">
                        <img :src="cateLists[index].bannerUrl" alt=""> 
                        <div class="name">{{cateLists[index].name}} </div>
                      </li>
                      
                    
                    
                    
                  </ul>
              </div>
            </div>
        </li>
      </ul>
      <tabbar></tabbar>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState,mapGetters} from 'vuex'
import {reqCateNavDatas} from '@/api'
import {reqcateLists} from '@/api'
import tabbar from '../../components/tabbar'
import search from '../search/index'
  export default {
    name:'sort',
     
    components:{
      
    },  
    async beforeMount(){
      
       
    },
    async mounted(){
      await this.$store.dispatch('getCateLists')
      await this.$store.dispatch('getCateNavDates')
       
      // const result= await reqCateNavDatas()
      // console.log(result)
      // const resulta=await reqCateLists()
    },
    computed:{
     
      ...mapState({
        categoryLList:state=>state.sort.categoryLList.categoryL1List,
        cateLists:state=>state.sort.categoryList
      }),
    
    },
   
    methods:{
   
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .sort
    width :100%
    height:100%
    overflow :hidden
    .left
      width:162px
      height:100%
      border-right:1px solid #999
      border-top:1px solid #999
      float :left
      .m-cateNavVert
        width:162px
        height :950px
        padding:40px 0
        
        display :flex
        flex-direction :column
        align-items :top
        justify-content :space-around
        float :left
        box-sizing :border-box 
        .active 
          font-size :28px
          color :#ab2b2b
          border-left:6px solid #ab2b2b
          box-sizing :border-box     
        .item
          width:162px
          height :50px
          text-align :center
          line-height :50px
          .right
            // width :527px
            height :1097px 
            border-top:1px solid #999
            padding :30px 30px 21px 30px 
            float :left
            position :absolute
            left:163px
            top:0
            .imgsort 
              width :100%
              height :192px
              img 
                width :100%
                height :100%
            .rightdown
              width :528px
              height :648px
              margin-top:40px
            .list
              // width :528px
              height:auto 
              float :left
              li
                width :139px
                height:216px 
                float :left
                margin-right :34px
                
                img
                  width:100%
                  transform:scale(1.3)
                .name
                  width: 144px
                  height:72px
                  text-align :center
                  color :#333
                  font-size :24px
                  line-height :24px
                  font-weight:100
                  font-family:"宋体"
</style>
