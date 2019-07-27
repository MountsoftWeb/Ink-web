<template>
<b-layout-no-left>
    <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="550px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img id="carousel_img" src="./carlos.jpg">
      </el-carousel-item>
    </el-carousel>
  </div>



    <div class="first">
        <div class="hot_project_contain">
            <span class="hot_project_title">热门作品</span>
            <div v-for="object in hotProjects" class="hot_project">
                <ul class="hot_project_main" @click="chooseProject(object.id)">
                    <li><img :src="object.picture"></li>
                    <!-- <li><img :src="{{object.picture}}"></li> -->
                    <li>详情{{object.message}}</li>
                    <li>上传日期{{object.id}}</li>
                    <li>喜欢{{object.message}}</li>
                </ul>    
            </div>
        </div>
        <div class="hot_user">
            <span class="hot_user_title">热门用户</span>
            <div v-for="user in hotUsers" class="hot_user_ul">
                <img :src="user.picture" id="user_picture">
            </div>
        </div>

     </div>
</b-layout-no-left>    
</template>

<script>
import { mapState } from "vuex"
export default {
    methods: {
        chooseProject: function(index) {
            let routeData = this.$router.resolve({path:'/tools/detail', query:{projectId:index} })
            window.open(routeData.href, '_blank');
        }
    },
    mounted() {
        this.$store.dispatch('getHotProject')
        this.$store.dispatch('getHotUser')
    },
    computed: {
        ...mapState(['hotProjects']),
        ...mapState(['hotUsers'])
    },
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .first {
        overflow: auto;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        /* top: 100px; */
        max-width: 1300px;
        /* margin: 0 10% 0 10%; */
    }
    /* =========== 轮播条 ============== */
    .el-carousel__item {
       text-align: center;
    }

    .el-carousel__item:nth-child(n) {
        background-color: #303030;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        /* background-color: #d3dce6; */
    }
    #carousel_img {
        padding: 20px 0 10px 0;
        width: 1300px;
        height: 500px;
    }
    /* =========== 热门作品 ============== */
    .hot_project_contain {
        display: inline-block;
        position: relative;
        padding: 10px;
        width: 1280px;
    }
    .hot_project_title {
        min-width: 1280px;
        font-size: 50px;
        float: left;
    }
    .hot_project {
        background-color: white;
        /* border: solid black; */
        width: 296px;
        height: 290px;
        float: left;
        /* padding: 10px; */
        margin: 12px;
    } 
    .hot_project_main {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 2px;
        
    }
    .hot_project_main:hover {
        cursor: pointer;
    }
    .hot_project_main li {
        float: left;
        /* line-height: 50px; */
        /* height: 100px; */
        letter-spacing: normal;
        word-spacing: normal;
    }
    .hot_project_main li:nth-child(1){
        width: 276px;
        height: 240px;
    }
    .hot_project_main li:nth-child(2){
        width: 100%;
    }
    .hot_project_main li:nth-child(3){
        width: 138px;
        /* padding-left: 550px; */
    }
    .hot_project_main li:nth-child(4){
        width: 138px;
    }
   
    .hot_project_main li img {    
        width: 276px; 
        height: 240px;
    }
   /* =========== 热门用户 ============== */
   .hot_user {
       padding: 30px 140px 20px 140px;
       min-height: 110px;
       display: inline-block;
        position: relative;
        /* padding: 10px; */
        width: 1000px;
   }
   .hot_user_title {
       min-width: 1000px;
        font-size: 50px;
        float: left;
   }
   #user_picture {
       width: 100px;
       height: 100px;
       float: left;
   }
</style>
