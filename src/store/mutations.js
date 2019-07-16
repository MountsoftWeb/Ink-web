// 直接更新 state 多个方法的对象

import {
    LOGIN,
    LOGOUT,
    GETDETAIL,
    GETPROJECTID,
    GETLABEL,
    GETCATEGORIES
} from './mutation-types'

export default {
    [LOGIN] (state, data) {
        state.token = data;
		localStorage.setItem('token',data);
    },
    [LOGOUT] (state, data) {
        state.token = data;
        localStorage.removeItem('token');
    },
    [GETDETAIL] (state, data) {
        state.user = data;
        // alert(data.username)
    },
    [GETPROJECTID] (state, data) {
        state.projects = data;
        // console.log(data)
    },
    [GETLABEL] (state, data) {
        state.label = data
    },
    [GETCATEGORIES] (state, data) {
        state.categories = data
    }
}