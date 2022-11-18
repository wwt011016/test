// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
}, function (error) {
    return Promise.reject(error)
})


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data.status === 1 && response.data.message === '身份认证失败') {
        location.href = 'http://localhost:3000/login.html'
    }
    return response
   
}, function (error) {
    return Promise.reject(error)
})