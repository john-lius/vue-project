import axios from 'axios'

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken
let baseURL = "http://192.168.5.64:8087/ais/"
let removePending = (config) => {
    for (let p in pending) {
        if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}

axios.interceptors.request.use(config => {
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, f: c });
    })
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    removePending(res.config);
    return res
}, err => {
    return Promise.resolve(err.res)
})

export default {
    login(url, data) {
      let user = undefined,
        roomId = undefined;
      let toastMessage = function (msg, type) {
        this.$toast({title: '系统提示', content: msg, type: type});
      }
      return axios({
        method: 'post',
        baseURL: baseURL,
        url: url,
        data: data,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'x-token': undefined,
          'beid': undefined,
          'username': undefined
        }
      }).then(function(rs) {
        if (!rs) {
          toastMessage('服务器连接异常', 'error');
        }
        return checkStatus(rs)
      }, function(err) {
        console.log(err);
        console.log("服务器连接异常");
      })
    },
    post(url, data) {
        let user = undefined,
            roomId = undefined;
        return axios({
            method: 'post',
            baseURL: baseURL,
            url,
            data: data,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'x-token': undefined,
                'beid': undefined,
                'username': undefined
            }
        }).then(res => {
            return checkStatus(res)
        }).then(res => {
            return checkCode(res)
        })
    },
    get(url, params) {
        return axios({
            method: 'get',
            baseURL: baseURL,
            url,
            params, // get 请求时带的参数
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => {
            return checkStatus(res)
        }).then(res => {
            return checkCode(res)
        })
    }
}

function checkStatus(res) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
        // 如果不需要除了data之外的数据，可以直接 return res.data
        return res.data
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        console.log(res.msg)
    }
    if (res.data && (!res.data.success)) {
        console.log(res.data.resultMsg)
    }
    return res
}
