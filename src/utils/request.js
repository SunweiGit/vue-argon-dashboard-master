import axios from 'axios';

const qs = require('qs');
const AuthorizationKey = 'Admin-Authorization'

export function getAuthorization() {
    console.log(localStorage.getItem(AuthorizationKey));
    return localStorage.getItem(AuthorizationKey);
}

// axios 配置
axios.defaults.timeout = 8000;
axios.defaults.baseURL = 'http://localhost:8000/api-service';
axios.interceptors.request.use(
    config => {

        const authorizationKey = getAuthorization();
        if (authorizationKey) { //判断token是否存在
            config.headers.Authorization = authorizationKey;
        }
        if (config.method == 'post') {
            config.data = qs.stringify({
                ...config.data,
                _t: Date.parse(new Date()) / 1000
            })
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errno === 999) {
            this.$router.push({path: '/dashboard'})
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export default axios;