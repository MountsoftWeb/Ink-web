// 状态对象


export default {
    user: {},
    // isLogin: 0,     // 判断是否登录 0 ： 未登录 1 ： 已登陆
    // token: localStorage.getItem('token') || '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    projects: [],
    label: [],
    categories: [],
    userProjects: [],
    projectDetail: [],

    page: {},

    follows: {},
    fans: {},

    hotProjects: {},
    hotUsers: {},

    commentList: {},

    userDetailByUserId: {}
}
