/**
 * author: kfs
 * date：2018年04月29日 19:20
 * desc：后台管理系统API接口
 */
import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7001'
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
    return config
})

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
    const data = response.data

    // 根据返回的code值来做不同的处理（和后端约定）
    if(typeof data.code === 'undefined'){
        return response
    }
    switch (data.code) {
        case -1:
            return data
        case 0:
            return data
        default: return data
    }
}, (err) => { // 这里是返回状态码不为200时候的错误处理
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.msg = '请求错误'
                break

            case 401:
                err.msg = '未授权，请登录'
                break

            case 403:
                err.msg = '拒绝访问'
                break

            case 404:
                err.msg = `请求地址出错: ${err.response.config.url}`
                break

            case 408:
                err.msg = '请求超时'
                break

            case 500:
                err.msg = '服务器内部错误'
                break

            case 501:
                err.msg = '服务未实现'
                break

            case 502:
                err.msg = '网关错误'
                break

            case 503:
                err.msg = '服务不可用'
                break

            case 504:
                err.msg = '网关超时'
                break

            case 505:
                err.msg = 'HTTP版本不受支持'
                break

            default:
        }
    }

    return Promise.reject(err)
})



export default {

    //用户登录
    Login(params) {

      return axios.post('/api/login', params)
    },

    //用户添加
    AddUser(params) {

        return axios.post('/api/user/add', params)
    },
    //用户删除
    DelUser(params) {

        return axios.post('/api/add_user', params)
    },
    //用户信息更新
    UpdateUser(params) {

        return axios.post('/api/add_user', params)
    },
    //用户列表查询
    queryUsers(params) {

        return axios.post('/api/add_user', params)
    },
}

