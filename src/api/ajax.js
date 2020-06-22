import axios from 'axios'

const ajax=axios.create({
    baseURL:'/3001',
    timeout:20000
})
ajax.interceptors.request.use((config) => {

  
    // 必须返回config
    return config
  })
  ajax.interceptors.response.use(
    response => {
      // 隐藏进度条
   
      /* 3. 成功返回的数据不再是response, 而直接是响应体数据response.data */
      // return response
      return response.data 
    },
  
    error => {
     
  
      /* 4. 统一处理请求错误, 具体请求也可以选择处理或不处理 */
      alert('请求出错: ' + error.message||'未知错误')
  
      // return new Promise(() => {})  // 中断promise链 ==> 具体请求就不能再处理了  
      return Promise.reject(error) // 返回失败的promise ==> 具体请求可以处理
    }
  )
  
  
export default ajax