<template>
    <div class="layout">
        <!-- 头部导航 -->
        <a-header></a-header>

        <!-- 左侧菜单 -->
        <!-- <b-left></b-left> -->
        <slot></slot>

        <!-- 展示路由 -->
        <div class="content">
            <router-view></router-view>

            <!-- 底部信息 -->
            <c-footer></c-footer>
        
        </div>

        
        
    </div>
   
</template>

<script>

    export default{
        metaInfo: {
            title: "ds",
            meta: [
                
                { name: 'viewport', content: 'width=1300, user-scalable=yes, target-densitydpi=device-dpi' }
            ]
        },
        // mounted() {
        //     this.axios({
        //         method: "get",
        //         url: "/hello/test"
        //         })
        //         .then(
        //                 function(response) {
        //                 this.interestList = response.data.data;
        //                 }.bind(this)
        //         )
        //         .catch(
        //                 function(error) {
        //                         alter(error);
        //                 }.bind(this)
        //                 );
        //         }
        }
    
</script>

<style >
    .content {
        top: 60px;
        height: calc(100% - 60px);
   
        /* padding: 8px; */
        position: absolute;
        overflow: auto;
        width: 100%;
        
    }
    .layout .content{
        margin-left: 200px;
        width: calc(100% - 200px);
    }
  
</style>
