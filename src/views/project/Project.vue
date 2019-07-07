<template>
    <b-layout-no-left>
        <div class="project_container">
            <div class="project_nav">
                <dl>
                    <dt>类型</dt>
                    <dd>
                        <div class="categories">
                            <p @click="project(1)">建筑</p>
                            <p @click="project(2)">插画</p>
                            <p><router-link  :to="{path:'/build', query:{id:1}}">a</router-link></p>
                            <p><router-link :to="{path:'/build', query:{id:19}}">b</router-link></p>
                        </div>
                    </dd>
                </dl>

                <dl>
                    <dt>方式</dt>
                    <dd>dsd</dd>
                    
                </dl>
            </div>
            <div class="node">
                <router-link to="/">首页</router-link>
            </div>
            <div class="project_content">
                <!-- <router-view></router-view> -->
                <project-list></project-list>
            </div>
        </div>
    </b-layout-no-left>
</template>

<script>
import { mapState } from "vuex";

export default {
    methods: {
        project: function(num) {
            alert(num)
            // 根据 project 分类进行读取信息
            this.$store.dispatch('getProjectId', 1)
        }
    },
    mounted() {
        this.$store.dispatch('getProjectId', 1)
    },
    // computed: {
    //     ...mapState(['project'])
    // }
}
</script>

<style scoped>
    .project_container {
        margin: 0 auto;
        width: 1300px;
        padding: 0;
        /* text-align: center; */
        /* top: 100px;
        position: relative; */


    }
    /* ============= 导航条 ============ */
    .project_nav {
        margin-top: 20px;
        /* margin: 0 auto; */
        padding: 11px;
        /* float: left; */
        display: inline-block;
        position: relative;
        /* left: 8%; */
        width: 1276px;
        border: 1px solid black;
        border-radius: 5px;
        clear: both;
    }
    .project_nav dl {
        display: block;
        padding-bottom: 2px;
        margin: 0;
        font-size: 12px;
        color: black;
        font-weight: bold;
        /* text-align: center; */
    }
    /* ============= node =============== */
    .node {
        padding: 2px 0 2px 0;
    }
    /* ============== category ========== */

    .project_nav dl dt {
        display: inline-block;
        float: left;
        width: 50px;
        overflow: hidden;
    }
    .project_nav dl dd {
        width: 1200px;
        height: 20px;
        /* float: left; */
        position: relative;
        /* display: inline-block; */
    }
    .project_nav dd p {
        /* width: 50px; */
        display: inline;
        padding: 0 5px 0 5px;
    }
    /* .project_nav_2 {
        display: block;
        padding-bottom: 2px;
        margin: 0;
    } */
    .project_content {
        /* clear: both; */
        display: inline-block;
        position: relative;
        padding: 10px;
        /* left: 8%; */
        width: 1280px;
    }
</style>
