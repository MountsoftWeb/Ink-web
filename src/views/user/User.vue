<template>
    <a-layout>
        <b-left>
            <div class="navside">
                <ul>
                    <li>
                        <router-link to="/user"><span>我的信息</span></router-link>
                    </li>
                    <li>
                        <router-link to="/user/manage"><span>发布物品</span></router-link>
                    </li>
                    <li>
                        <router-link to="/user/manage"><span>交易信息</span></router-link>
                    </li>
                </ul>
            </div>
        </b-left>
    </a-layout>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .id {
        font-size: 200px;
    }
    /* 消除 routter-link 样式 */
    a {
        text-decoration: none;
    }
    .router-link-active {
        text-decoration: none;
    }
   
    .left span {
        color: white;
        font-size: 30px;
    }
</style>
