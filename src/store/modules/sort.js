import {reqCateLists,reqCateNavDatas} from '@/api'
 
const state={
    cateLists:[],//分类右边的数组
    categoryLList:[]//分类左边的数组
}
const mutations={
    RECEIVE_CATELISTS(state,categoryList){
        state.categoryList=categoryList
    },
    RECEIVE_CATENAVDATAS(state,categoryLList){
    
        state.categoryLList=categoryLList
    }
}
const actions = {
    /* 
    异步获取分类列表
    */

    async getCateLists ({commit}) {
        // 1. 调用接口请求函数发异步ajax请求
        const result = await reqCateLists()
        // 2. 得到成功的数据后, 提交给mutation去更新状态
        console.log(result[0].categoryList)
        // console.log(result[0].categoryList[0].name)
        
        // if (result.code===200) {
          const cateLists = result[0].categoryList
          console.log(cateLists)
          commit('RECEIVE_CATELISTS', cateLists)
        // }
      },
    async getCateNavDates ({commit}) {
        // 1. 调用接口请求函数发异步ajax请求
        const result = await reqCateNavDatas()
        // 2. 得到成功的数据后, 提交给mutation去更新状态
        console.log(result.categoryL1List)
        
        // if (result.code===200) {
          const categoryLList = result
          console.log(categoryLList)
          commit('RECEIVE_CATENAVDATAS', categoryLList)
        // }
      },
}
const getters = {
  
}

export default {
  state,
  mutations,
  actions,
  getters
}