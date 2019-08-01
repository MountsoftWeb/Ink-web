<template>
    <div class="detail_wrap">
        <div class="detail_img">
            <img :src="projectDetail.projectPicture">
        </div>
        <div class="detail_main">
            <div class="detail_user">
                <div class="user_info">
                    <img id="user_picture" :src="projectDetail.userPicture"   @click="userDetail(projectDetail.id)">
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
                    <input class="follow_btn" v-show="projectDetail.userFollowStatus != 1" type="button" value="关注" id="follow" @click="chooseFollow(projectDetail.id, projectDetail.userFollowStatus)">
                    <input class="follow_btn" v-show="projectDetail.userFollowStatus == 1" type="button" value="取消关注" id="follow" @click="chooseFollow(projectDetail.id, projectDetail.userFollowStatus)">
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
                <span>点赞: {{projectDetail.apprecations}} </span>
                    <input class="appreciate_btn" v-show="projectDetail.status != 1" type="button" value="点赞" id="appreciate" @click="chooseAppreciate(projectDetail.status)">
                    <input class="appreciate_btn" v-show="projectDetail.status == 1" type="button" value="取消点赞" id="appreciate" @click="chooseAppreciate(projectDetail.status)">
            </div>

            <div class="detail_comment">
                <p>评论</p>
                <div class="detail_comment_text">
                    <textarea name="comment" id="comment" class="comment_text" v-model.trim="content" placeholder="" style="width:800px; height:100px;padding: 10px; "></textarea>
                    <input type="button" value="发布" @click="sendComment()">

                </div>
            </div>
            <div class="detail_comment_list">
                <div    v-for="(comment, index) in commentList"
                        class="comment_content">
                    <div class="comment_list_picture">
                        <img :src="comment.picture">
                    </div>
                    <div class="comment_content_detail">
                        <span style="font-size: 15px; color: black;">{{comment.username}}</span>
                        <span style="font-size: 15px;">{{comment.commentTime}}</span>
                        <p>{{comment.content}}</p>
                    </div>
                </div>
            </div>


        </div>

        
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data() {
        return {
            content: ''
        }
    },
    methods: {
        chooseFollow: function(id, index) {
            if (index == null){
                // 发送点赞请求
                this.$store.dispatch('updateFollow', [id, 2])
            }else if (index == 0){
                // 发送取消点赞请求
                this.$store.dispatch('updateFollow', [id, 1])
            }else {
                // 发送点赞请求
                this.$store.dispatch('updateFollow', [id, 0])
            }
        },
        chooseAppreciate: function(index) {
            if (index == null){
                // 发送点赞请求
                this.$store.dispatch('updataAppreciate', [this.$route.query.projectId, 2])
            }else if (index == 0){
                // 发送取消点赞请求
                this.$store.dispatch('updataAppreciate', [this.$route.query.projectId, 1])
            }else {
                // 发送点赞请求
                this.$store.dispatch('updataAppreciate', [this.$route.query.projectId, 0])
            }
        },
        // 发送评论
        sendComment: function() {
            if (this.content.length != 0){
                var formData = new FormData()
                formData.append("content", this.content)
                formData.append("projectId", this.$route.query.projectId)
                this.axios({      
                        method: "post",
                        url: "/hello/test/comment/insertComment",
                        data: formData,
                        // callback: success
                    }).then(response => {
                        if(response.data.code != 404){
                            this.message = '评论成功'
                            // this.reload()
                            this.$router.go(0)
                        }else{
                            this.message = '评论失败'
                        }
                    })
            }
        },
        userDetail: function(index) {
            let routeData = this.$router.resolve({path:'/personal', query:{userId:index} })
             window.open(routeData.href, '_blank');
        }
    },
    mounted() {
        this.$store.dispatch('getCommentListByProjectId', this.$route.query.projectId)
        this.$store.dispatch('getProjectDetail', this.$route.query.projectId)
        this.$store.dispatch('getUserFollow', this.$route.query.projectId)
        
    },
    computed: {
        ...mapState(['projectDetail']),
        ...mapState(['commentList'])
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
        cursor: pointer;
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
        float: left;
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
    .detail_appreciate span {
        float: left;
    }
    .appreciate_btn {
        cursor: pointer;
        display: inline-block;
        font-weight: 800;
        text-align: center;
        margin-left: 100px;

        line-height: 34px;
        color: #fff;
        background: #ff3131;
        width: 100px;
        height: 34px;
        display: block;
        text-align: center;
        border-radius: 3px;

    }
    /* ============= 评论 ============ */
    .detail_comment {
        min-height: 100px;
        padding: 0 50px 20px 50px;
    }
    .detail_comment p {
        /* width: 1300px; */
        color: black;
        /* font-weight: 200; */
        border-bottom: 1px solid #e8e8e8;
    }
    .detail_comment_text {
        padding-top: 20px;
        width: 1000px;
    }
    input, textarea {
        font-size: 14px;
        resize: none;
    }
    .comment_text {
        margin-left: 100px;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        /* border-radius: .25rem; */
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .detail_comment_list {
        min-height: 100px;
        padding: 0 50px 20px 50px;
        /* position: relative; */
        /* float: left; */
        clear: both;
        overflow: auto;
        display: inline-block;
    }
    .comment_content {
        padding: 0 20px 10px 20px;
        margin: 5px;
        min-width: 1000px;
        clear: both;
        overflow: auto;
        display: inline-block;
    }
    .comment_list_picture {
        float: left;
        width: 60px;
        height: 100px;
        /* position: relative; */
    }
    .comment_list_picture img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .comment_content_detail {
        float: left;
        padding: 0 10px 5px 10px;
        min-width: 800px;
    }
</style>
