// 基于 state 的 getter 计算对象


export default {
    isLoggedIn: state => state.isLogin,
    authStatus: state => state.status,
    getDetail: state => state.user,
    getProjectId: state => state.projects,
    getLabel: state => state.label,
    getCategories: state => state.categories
}