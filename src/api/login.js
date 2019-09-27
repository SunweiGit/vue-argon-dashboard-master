import http from '@/utils/request.js';

const loginUrl = "/login";
const loginOutUrl = "/loginOut";

export function login(account, password) {
    return http({
        url: loginUrl,
        method: 'post',
        data: {
            account: account,
            password: password
        }
    })
}

export function loginOut() {
    return http({
        url: loginOutUrl,
        method: 'get'
    })
}
