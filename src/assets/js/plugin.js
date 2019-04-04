import Layout from '../../components/layout'
import Left from '../../components/left'


const CCcomponents = {
    ALayout : Layout,
    AHeader : Layout.Header,
    CFooter : Layout.Footer,
    
    BLeft : Left,
    BLeftItem : Left.LeftItem
}

export default {
    install (Vue) {
        
        // 遍历 CComponects 注册全局组件
        Object.keys(CCcomponents).forEach((key) => {
            Vue.component(key, CCcomponents[key])
        })
    }
}
