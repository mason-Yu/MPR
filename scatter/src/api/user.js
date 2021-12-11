import request from '@/util/request.js' //引入我们封装好的request
//定义一个函数 getLogin
export function getLogin(obj) {
    return request({  //利用我们封装好的request发送请求
        url: '/api/login',//请求地址 已经去除前面request中baseUrl相同的内容
        method: 'post',//请求方法
        data: obj//向后端传递数据
    })
}

export function getUser(obj) {
    return request({
        url: '/generator/workuser/list',
        method: 'get',
        params: obj
    })
}