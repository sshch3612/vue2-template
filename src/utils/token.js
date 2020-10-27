export const getToken = () => {
    return window.localStorage.getItem("token");
}

export const setToken = (val) => {
    window.localStorage.setItem("token", val);
    return;
}

export const removeToken = () => {
    window.localStorage.removeItem("token");
    return;
}