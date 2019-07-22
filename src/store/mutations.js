// 直接更新 state 多个方法的对象

import {
    LOGIN,
    LOGOUT,
    GETDETAIL,
    GETPROJECTID,
    GETPROJECT,
    GETLABEL,
    GETCATEGORIES,
    GETPROJECTDETAIL,
    GETPAGE,
    GETFOLLOWS,
    GETFANS
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
    [GETPROJECT] (state, data) {
        state.userProjects = data;
    },
    [GETLABEL] (state, data) {
        state.label = data
    },
    [GETCATEGORIES] (state, data) {
        state.categories = data
    },
    [GETPROJECTDETAIL] (state, data) {
        state.projectDetail = data
    },

    //  分页
    [GETPAGE] (state, data) {
        state.page = data;
    },

    [GETFOLLOWS] (state, data) {
        state.follows = data;
    },
    [GETFANS] (state, data) {
        state.fans = data
    }
}