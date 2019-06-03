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
                            <p><router-link :to="{path:'/build', query:{id:2}}">b</router-link></p>
                        </div>
                    </dd>
                </dl>

                <dl>
                    <dt>方式</dt>
                    <dd>dsd</dd>
                    
                </dl>
            </div>
            <!-- <div class="project_content"> -->
                <router-view></router-view>
            <!-- </div> -->
        </div>
    </b-layout-no-left>
</template>

<script>
export default {
    methods: {
        project: function(num) {
            alert(num)
        }
    }
}
</script>

<style scoped>
    .project_container {
        margin: 0;
        padding: 1%;
    }
    /* ============= 导航条 ============ */
    .project_nav {
        padding: 6px;
        /* float: left; */
        display: inline-block;
        position: relative;
        left: 8%;
        width: 80%;
        border: solid black;
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
    /* ============== category ========== */

    .project_nav dl dt {
        display: inline-block;
        float: left;
        width: 50px;
        overflow: hidden;
    }
    .project_nav dl dd {
        width: 1350px;
        height: 20px;
        /* float: left; */
        position: relative;
        display: inline-block;
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
        padding: 2px;
        left: 8%;
        width: 80%;
    }
</style>
