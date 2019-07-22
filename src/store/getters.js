// 基于 state 的 getter 计算对象


export default {
    isLoggedIn: state => state.isLogin,
    authStatus: state => state.status,
    getDetail: state => state.user,
    getProjectId: state => state.projects,
    getLabel: state => state.label,
    getCategories: state => state.categories,
    getProject: state => state.userProjects, // 用户所有作品
    getProjectDetail: state => state.projectDetail,

    getPage: state => state.page,

    getFollows: state => state.follows,
    getFans: state => state.fans
}