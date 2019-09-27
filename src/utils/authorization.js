
const AuthorizationKey = 'Admin-Authorization'

export function setAuthorization(authorization) {
    localStorage.setItem(AuthorizationKey, authorization);
    console.log(localStorage.getItem(AuthorizationKey))
    return localStorage.setItem(AuthorizationKey, authorization)
}

export function getAuthorization() {
    return localStorage.getItem(AuthorizationKey)
}

export function removeAuthorization() {
    return localStorage.removeItem(AuthorizationKey)
}
