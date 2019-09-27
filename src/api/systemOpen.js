import http from '@/utils/request.js';

const languageTypeUrl = "/system/open/languageType";
const uploadUrl = "/system/open/upload";
const downloadUrl = "/system/open/download";


export function languageType() {
    return http({
        url: languageTypeUrl,
        method: 'get'
    })
}

export function upload(file) {
    return http({
        url: uploadUrl,
        method: 'get',
        data: {
            file: file
        }
    })
}

export function download(path) {
    return http({
        url: downloadUrl,
        method: 'get',
        data: {
            path: path
        }
    })
}

