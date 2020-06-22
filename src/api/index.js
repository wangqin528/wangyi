import ajax from './ajax'
 
export const reqCateLists=()=>ajax('/cateLists')
export const reqCateNavDatas=() => ajax('/cateNavDatas')