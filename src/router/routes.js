import recommend from '../pages/firstpage/recommend'
import sort from '@/pages/sort'
import buy from '@/pages/buy'
import shoppingcart from '@/pages/shoppingcart'
import personal from '@/pages/personal'
 


export default [
    {
        name:'recommoned',
        path:'/',
        component:recommend
    },
    {
        name:'sort',
        path:'/sort',
        component:sort,
        

    },
    {
        name:'buy',
        path:'/buy',
        component:buy
    },
    {
        name:'shoppingcart',
        path:'/shoppingcart',
        component:shoppingcart,
        // beforeEnter (to, from , next) {
        //     const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
        //     const {skuId, skuNum} = to.query
        //     if (skuId && skuNum && skuInfo) {
        //       next() // 放行
        //     } else {
        //       // 什么都不做, 那就是呆在地 ===> 可能导致没有一个路由显示
      
        //       // console.log(from.path)
        //       next(from.path)
        //     }
        //   }
        
        
    },
    
    {
        name:'personal',
        path:'/personal',
        component:personal
    },

]