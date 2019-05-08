import Layout from '../../components/layout'
import Left from '../../components/left'


const CCcomponents = {
    ALayout : Layout,                   // 带左导航条页面
    AHeader : Layout.Header,            // 页面头部信息
    
    CFooter : Layout.Footer,            // 页面底部信息

    BLeft : Left,                       // 左导航条
    BLayoutNoLeft : Layout.LayoutNoLeft,// 不带左导航条页面
    BLeftItem : Left.LeftItem,    

}

export default {
    install (Vue) {
        
        // 遍历 CComponects 注册全局组件
        Object.keys(CCcomponents).forEach((key) => {
            Vue.component(key, CCcomponents[key])
        })
    }
}
