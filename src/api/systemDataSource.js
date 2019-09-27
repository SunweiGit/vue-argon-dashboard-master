import http from '@/utils/request.js';

const loginUrl = "/system/dataSource/add";
const loginUrl = "/system/dataSource/update";


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
