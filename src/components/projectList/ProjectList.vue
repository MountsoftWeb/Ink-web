<template>  
    <div>    
        <!-- 物品展示 -->
        <h1>project</h1>
        <div v-for="(project, index) in projects.list" :key="index" class="project_content" @click="chooseProject(project.id)">
            <ul class="project_content_main">
                <li><img :src="project.picture"></li>
                <!-- <li><img :src="{{object.picture}}"></li> -->
                <li>
                    <span>详情:&nbsp;{{project.name}}</span>
                </li>
                <li>喜欢{{project.apprecations}}</li>

                <li>上传日期:&nbsp;{{project.upDate}}</li>
                <li>所属用户:&nbsp;{{project.userName}}</li>

                <!-- <li>
                    <input id="delete" type="button" @click="deleteId(object.id)" value="详细信息"></input>
                </li> -->
            </ul>    
        </div>
        <div class="page">
            <ul>
                <li class="page_item" v-if="projects.pageNum != 1">
                    <router-link
                                :to="{path:'/project', query:{c:this.$route.query.c,l:this.$route.query.l,pageNum:projects.pageNum - 1}}"
                                >
                                上一页</router-link>
                </li>
                <li class="page_item"
                    v-for="(page, index) in projects.array "
                    v-if="page <= projects.totalPage"
                    :key="index"
                    v-bind:class="{ 'page_active': projects.pageNum == page}"
                    >
                        <a class="page_btn" v-on:click="page_btn(page)">{{ page}}</a>
                </li>
                <li class="page_item" v-if="projects.totalPage != projects.pageNum">
                    <router-link 
                                :to="{path:'/project', query:{c:this.$route.query.c,l:this.$route.query.l,pageNum:projects.pageNum + 1}}">
                                下一页</router-link>
                </li>
                <li class="page_item">
                    <span>共&nbsp;{{projects.totalPage}}&nbsp;页</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data() {
        return {
            id: 0,
            pages: []
        }
    },
    methods: {
        show: function() {
            this.$store.dispatch('getProjectId', [this.$route.query.c, this.$route.query.l, this.$route.query.pageNum])
        },
        // 打开对应作品详情页
        chooseProject: function(index) {
            let routeData = this.$router.resolve({path:'/tools/detail', query:{projectId:index} })
             window.open(routeData.href, '_blank');
        },
        page_btn: function(page){
            this.$store.dispatch('getProjectId', [this.$route.query.c, this.$route.query.l, page])
        }
    },
    created() {
    },
    mounted() {
        
        this.$store.dispatch('getProjectId', [this.$route.query.c, this.$route.query.l, this.$route.query.pageNum])
        
    },
    watch: {
        '$route' (to, from) {
            // 刷新参数放到这里里面去触发就可以刷新相同界面了
            this.show()
        }
    },
    computed: {
        ...mapState(['projects']),
        ...mapState(['page']),
        // pageIndex: function (){
        //     let i = projects.start
        //     while (i < projects.end){
        //         pages.push(i)
        //         i++
        //     }
        //     return pages
        // }
    }
    

}
</script>

<style scoped>

    /* ==================== 收藏内容展示 =================== */
    .project_content {
        background-color: white;
        /* border: solid black; */
        width: 300px;
        height: 345px;
        float: left;
        /* padding: 10px; */
        margin: 10px;
        cursor: pointer;
        /* overflow: auto; */
    } 
    .project_content:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 10px rgb(219, 221, 223);
    } 

    /* ==================== 发布收藏 ======================== */
    .project_content_main {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 2px;
        
    }
    .project_content_main li {
        float: left;
        /* line-height: 50px; */
        /* height: 100px; */
        letter-spacing: normal;
        word-spacing: normal;
        padding: 3px 0 3px 0;
    }
    .project_content_main li:nth-child(1){
        width: 296px;
        height: 260px;
    }
    .project_content_main li:nth-child(2){
        width: 100%;
        text-align: center;

        /* padding-left: 20px; */
        /* padding-left: 150px; */
    }
    .project_content_main li:nth-child(3){
        width: 100px;
        padding-left: 50px;
        border-bottom: solid 1px;
        /* padding-left: 550px; */
    }
    .project_content_main li:nth-child(4){
        /* position: relative; */
        /* left: 100px; */
        width: 150px;
        /* padding-right: 50px; */
        border-bottom: solid 1px;
        /* width: 120px; */
        /* padding-left: 550px; */
    }
    .project_content_main li:nth-child(5){
        width: 100%;
        /* padding-left: 200px; */
    }
    .project_content_main li:nth-child(6){
        width: 50px;
        /* padding-left: 200px; */
    }
    .project_content_main li:nth-child(7){
        width: 50px;
        /* padding-left: 200px; */
    }
    .project_content_main li:nth-child(8){
        margin: auto 50px;
        width: 100px;
        /* padding-left: 200px; */
    }
    .project_content_main li img {    
        width: 296px; 
        height: 260px;
    }

    /* ==================== 分页信息 ======================== */
    .page {
        float: left;
        min-width: 1280px;
        margin: 20px 0 20px 0;
        text-align: center;
    }
    .page ul {
        display: inline-block;
        list-style-type: none;
        list-style: none;
    }
    .page ul li {
        float: left;
        background: #fff;
    }
/*
        font-size: 14px;
        padding: 6px 10px;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    } */
    .page ul li a {
        text-decoration: none;
        color: #000;
    }
    .page_item {
        font-size: 14px;
        padding: 6px 10px;
        background: #fff;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    }
    .page_btn {
        cursor: pointer;
    }
    /* .page ul li:nth-child(1) {
        font-size: 14px;
        padding: 6px 10px;
        background: #fff;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    } */
    .page_active {
        background: #333;
        border-color: #333;
        color: #fff;
        cursor: default;
    }
    .page_display {
        display: none;
    }
</style>
