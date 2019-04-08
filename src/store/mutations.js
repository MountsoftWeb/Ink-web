// 直接更新 state 多个方法的对象

import {
    LOGIN,
    LOGOUT
} from './mutation-types'

export default {
    [LOGIN] (state, data) {
        // localStorage.token = token;
        state.isLogin = data;
    },
    [LOGOUT] (state, data) {
        state.isLogin = data
    }
}