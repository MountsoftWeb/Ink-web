<template>
    <!-- 无左导航条布局 -->
    <div class="layout_no_left">
        <!-- 头部导航 -->
        <a-header></a-header>

        <!-- 展示路由 -->
        <div class="content_no_left">
            <router-view></router-view>
            <!-- 底部信息 -->
            <div class="content_no_left_footer">
                <c-footer></c-footer>
            </div>
        </div>

         
        
    </div>
   
</template>

<script>

    // export default{
    //     mounted() {
    //         this.axios({
    //             method: "get",
    //             url: "/hello/test"
    //             })
    //             .then(
    //                     function(response) {
    //                     this.interestList = response.data.data;
    //                     }.bind(this)
    //             )
    //             .catch(
    //                     function(error) {
    //                             alter(error);
    //                     }.bind(this)
    //                     );
    //             }
    //     }
    
</script>

<style scoped>
    .content_no_left {
        top: 60px;
        height: calc(100% - 60px);
        width: 100%;
        position: absolute;
        overflow: auto;
        
    }
    
    .content_no_left_footer {
        width: 100%;
        /* position: absolute; */
        /* bottom: 0; */
    }
  
</style>
