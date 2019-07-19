<template>
    <div class="detail_wrap">
        <div class="detail_img">
            <img :src="projectDetail.projectPicture">
        </div>
        <div class="detail_main">
            <div class="detail_user">
                <div class="user_info">
                    <img id="user_picture" :src="projectDetail.userPicture">
                    <div class="user_info_list">
                        <p>
                            <span>昵称：{{projectDetail.userName}}</span>
                        </p>

                        <p>
                            <span>职业：{{projectDetail.major}}</span>                            
                        </p>

                        <p>
                            <span>粉丝：{{projectDetail.fans}}</span>
                        </p>
                    </div>


                </div>

                <div class="project_detail">
                    <p>
                        <span>作品名称: {{projectDetail.name}}</span>
                    </p>
                    <p>
                        <span>上传时间: {{projectDetail.upDate}}</span>
                    </p>
                    <p>
                        <span>标签: </span>
                    </p>
                </div>
            </div>

            <div class="detail_appreciate">
                <span>点赞: {{projectDetail.apprecations}}</span>
            </div>

            <div class="detail_comment">
                <span>评论</span>
            </div>
        </div>

        
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {

    mounted() {
        // alert(this.$route.query.projectId)
        this.$store.dispatch('getProjectDetail', this.$route.query.projectId)
        
    },
    computed: {
        ...mapState(['projectDetail'])
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .detail_wrap {
        font-size: 20px;

    }
    .detail_img {
        background: #303030;
        padding: 20px 0 20px 0;
        width: 1300px;
        min-height: 600px;
        text-align: center;
    }
    /* ============= 详细信息 ============ */
    .detail_main {
        padding-top: 10px;
        min-height: 300px;
    }

    .detail_user {
        padding: 0 50px 20px 50px;
        min-height: 300px;
        
    }
    .user_info {
        height: 110px;
    }
    #user_picture {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        float: left;
    }
    .user_info_list {
        float: left;
        width: 600px;
        padding: 10px;
        color: black;
    }
    .user_info_list p {
        width: 200px;
        clear: both;
    }
    .project_detail p {
        padding: 10px 0 0 10px;
    }
    /* ============= 点赞 ============ */
    .detail_appreciate {
        /* width: 100%; */
        min-height: 50px;
        color: black;
        padding: 0 50px 20px 50px;
    }
    /* ============= 评论 ============ */
    .detail_comment {
        min-height: 100px;
        padding: 0 50px 20px 50px;
    }
</style>
