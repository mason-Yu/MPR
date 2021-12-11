import request from '@/util/request.js'


// 1.获取图片验证码
export const getImgCode = () => {
    return request({
        url: '/api/image/code',
        method: 'get',
        // 图片验证码 response类型设置成blob，图片才能显示出来
        responseType: "blob"
    })
}


// 2.获取手机验证码
export const getPhoneCode = (query) => {
    return request({
        url: '/api/user/messageCode',
        method: 'post',
        data: query
    })
}

// 3. 获取用户任务列表
export const getUserTask = (query) => {
    return request({
        url: '/api/task/select',
        method: 'get',
        params: query
    })
}
// 4. 搜索任务接口
export const queryTask = (query1, query2) => {
    return request({
        url: '/api/task/query',
        method: 'post',
        data: query1,
        params: query2
    })
}

export const articleList = (query) => {
    return request({
        url: '/api/article/list',
        method: 'get',
        params: query
    })
}