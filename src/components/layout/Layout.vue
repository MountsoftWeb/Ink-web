<template>
    <div class="layout">
        <!-- 头部导航 -->
        <a-header></a-header>

        <!-- 左侧菜单 -->
        <b-left></b-left>

        <!-- 展示路由 -->
        <div class="content">
            <router-view></router-view>
        </div>

        <!-- 底部信息 -->
        <!-- <c-footer></c-footer> -->
    </div>
   
</template>

<script>

</script>

<style>
    .content {
        top: 60px;
        height: calc(100% - 60px);
   
        padding: 10px;
        position: absolute;
        overflow: auto;
        
    }
    .layout .content{
        margin-left: 180px;
        width: calc(99% - 180px);
    }
</style>
