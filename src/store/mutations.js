// 直接更新 state 多个方法的对象

import {
    LOGIN,
    LOGOUT
} from './mutation-types'

export default {
    [LOGIN] (state, data) {
        state.token = data;
		localStorage.setItem('token',data);
    },
    [LOGOUT] (state, data) {
        state.token = data;
        localStorage.removeItem('token');
    }
}