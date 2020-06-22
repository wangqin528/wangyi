import Mock from 'mockjs'
import cateLists from './cateLists.json'
import cateNavDatas from './cateNavDatas.json'
import index from './index.json'
import indexCateModule from './indexCateModule.json'
Mock.mock('/mock/cateLists',{code:200,data:cateLists})
Mock.mock('/mock/cateNavDatas ',{code:200,data:cateNavDatas})
Mock.mock('/mock/index',{code:200,data:index})
Mock.mock('/mock/indexCateModule',{code:200,data:indexCateModule})

console.log('mockServer执行了...')
