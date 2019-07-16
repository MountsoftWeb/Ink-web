<template>  
    <div>    
        <!-- 物品展示 -->
        <h1>project</h1>
        <div v-for="(project, index) in projects" :key="index" class="project_content">
            <ul class="project_content_main">
                <li><img :src="project.picture"></li>
                <!-- <li><img :src="{{object.picture}}"></li> -->
                <li>详情{{project.id}}</li>
                <li>类别{{project.id}}</li>
                <li>上传日期{{project.id}}</li>
                <li>所属用户{{project.id}}</li>
                <li>喜欢{{project.id}}</li>
                <li>收藏{{project.id}}</li>
                
                <li>
                    <input id="delete" type="button" @click="deleteId(object.id)" value="详细信息"></input>
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
            // projects: {
            //     a: {
            //         name : "12",
            //         id : 12
            //     },
            //     b: {
            //         name : "13",
            //         id : 13
            //     },
            // },
            id: 0
        }
    },
    methods: {
        show: function() {
            console.log(this.$route.query.id)
            this.$store.dispatch('getProjectId', this.$route.query.id)
            // this.items = this.id
            // this.items = this.$route.query.id
            // alert(this.id)
            // this.axios({
            //     method: "get",
            //     url: "/hello/project/getProject",
            // }).then(response => {
            //     if (response.data.code == 200){
            //         // alert(response.data)
            //         // this.items = response.data.data
            //         this.items = this.id
            //     }else{
            //     }
            // })
        }
    },
    created() {
    },
    mounted() {
        // this.id = this.$route.query.id
        // this.items = this.$route.query.id
        // this.show()
        // this.$store.dispatch('project')
        this.$store.dispatch('getProjectId', this.$route.query.id)
    },
    watch: {
        '$route' (to, from) {
            // 刷新参数放到这里里面去触发就可以刷新相同界面了
            this.show()
        }
    },
    computed: {
        ...mapState(['projects'])
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
        /* overflow: auto; */
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
    }
    .project_content_main li:nth-child(1){
        width: 296px;
        height: 260px;
    }
    .project_content_main li:nth-child(2){
        width: 100%;
        /* padding-left: 20px; */
        /* padding-left: 150px; */
    }
    .project_content_main li:nth-child(3){
        width: 150px;
        /* padding-left: 550px; */
    }
    .project_content_main li:nth-child(4){
        /* position: relative; */
        /* left: 100px; */
        width: 150px;
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
</style>
