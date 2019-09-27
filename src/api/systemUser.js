import http from '@/utils/request.js';

const addUrl = "/system/user/add";
const validateAccountUrl = "/system/user/validateAccount";
const deleteUrl = "/system/user/delete";
const updatePasswordUrl = "/system/user/updatePassword";
const viewUrl = "/system/user/view";
const updateUrl = "/system/user/update";

export function add(firstName, lastName, account, email, password) {
    return http({
        url: addUrl,
        method: 'post',
        data: {
            firstName: firstName,
            lastName: lastName,
            account: account,
            email: email,
            password: password
        }
    })
}

export function validateAccount(account) {
    return http({
        url: validateAccountUrl,
        method: 'post',
        data: {
            account: account
        }
    })
}

export function del(id) {
    return http({
        url: deleteUrl,
        method: 'post',
        data: {
            id: id
        }
    })
}


export function updatePassword(id, password, oldPassword) {
    return http({
        url: updatePasswordUrl,
        method: 'post',
        data: {
            id: id,
            password: password,
            oldPassword: oldPassword
        }
    })
}


export function view(id) {
    return http({
        url: viewUrl,
        method: 'get',
        data: {
            id: id
        }
    })
}


export function update(id) {
    return http({
        url: updateUrl,
        method: 'post',
        data: {
            id: id
        }
    })
}