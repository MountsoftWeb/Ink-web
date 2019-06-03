<template>
<b-layout-no-left>
    <div class="detail_container">
        <!-- 用户详细信息 -->
        <div class="detail_left">
            <div class="detail_data_left">
                
                <div class="detail_data_user">
                    <img id="picture" title="点击修改" :src="user.picture" @click="update"/>
                    <input id="updateFile" type="file" ref="new_image" @change="updatePicture"><br>
                    <!-- <span style="text-align: center;">点击修改</span> -->
                    <span>点击图片修改</span>
                    <p>用户名:{{user.username}}</p>
                    <p>邮箱:{{user.email}}</p>
                    <p>个人简介:</p>
                    <table class="user_table">
                        <tr>
                            <td>
                                关注
                            </td>
                            <td>
                                被关注
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>性别:{{user.sex}}</p>
                            </td>
                            <td>
                                <p>学校:{{user.school}}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>专业:{{user.major}}</p>
                            </td>
                            <td>
                                <p>手机号:{{user.phone}}</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="detail_right">
            <ul class="detail_right_header">
                <li class="project">
                    <router-link to="/user/manage">发布</router-link>
                </li>
                <li class="collections">
                    <router-link to="/user/colloctons">收藏</router-link>
                </li>
                <li class="apprecations">
                    <router-link to="/user">点赞</router-link>
                </li>
            </ul>
            <br>
            <!-- 物品展示 -->
            <router-view></router-view>
        </div>
        
    </div>
    </b-layout-no-left>
</template>

<script>
import { mapState } from "vuex"
export default {

    data () {
        return{
            items: {},
            text: 0,
            // message: '点击图片修改',
            imgPath: '/Users/carlos/Documents/素材/社交二维码/carlos.jpg',
            picture: ''
        }
    },
    methods: {
        // 更新头像
        updatePicture: function() {
           let self = this;
            if (self.$refs.new_image.files.length !== 0) {
                var formData = new FormData()
                formData.append('image_data', self.$refs.new_image.files[0])
                //单个文件进行上传
                this.axios({      
                    method: "post",
                    url: "/hello/test/updatePicture",
                    data: formData,
                    // callback: success
                }).then(response => {
                    console.log(response);
                    if(response.data.code == 25){
                        this.message = '更行成功'
                        // this.reload()
                        this.$router.go(0)
                    }else{
                        this.message = '更新失败'
                    }
                })
            }
        },
        // 点击 img 触发 input 
        update: function(){
            document.getElementById('updateFile').click()
        },
        
    },
    // 页面加载执行
    mounted() {
        this.$store.dispatch('getDetail')
        // this.axios({
        //     method: "get",
        //     url: "/hello/test/getPicture"
        //     }).then(response => {
        //         if(response.data.code == 200){
        //             this.picture = response.data.message
        //         }else{
        //             this.imgPath = response.data.message
        //         }
        //     })
        this.axios({
            method: "get",
            url: "/hello/trading/getCommodity",
        }).then(response => {
            if (response.data.code == 200){
                // alert(response.data)
                this.items = response.data.data
            }else{

            }
        })

    },
    computed: {
        ...mapState(['user'])
  }

}
</script>

<style scoped>
    .detail_container {
        overflow: auto;
        padding: 2%;
        background-color: #F5F6F7;
    }
    .detail_left { 
        float: left;
        position: relative;
        top: 65px;
        width: 20%;
        background-color: #F5F6F7;
        font-size: 16px;
        color: black;
        padding: 10px;
    } 
    .detail_data_left {
        padding: 10px;
        display:inline-block;
        width: 95%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .detail_data_left:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 15px rgb(219, 221, 223);
    } 
    .detail_data_user {
        font-size: 12px;
        text-align: center;
    }
    .detail_data_user ul {
        list-style-type: none;
        font-size: 16px;
        color: black;
    } 
    #picture {
        cursor: pointer;
        height: 100px;
        width: 100px;
        border-radius: 50px;
        position: relative;
        /* top: 10px; */
        /* left: 30%; */
    }
    #updateFile {
        display: none;
    }
    /* ================= 用户 table ==================== */
    .user_table {
        padding: 20px;
        text-align: center;
        width: 350px;
    }


    .detail_right {
        /* float: left; */
        display:inline-block;
        position: relative;
        width: 75%;
        margin: 1%;
        /* background-color: rgb(255, 255, 255); */
        /* border-radius: 10px; */
    }
    .detail_right:hover {
        /* border-color: rgb(177, 38, 38);
        box-shadow: 0 0 15px rgb(219, 221, 223); */
    }

    /* =================== 右方导航栏 =====================*/
    .detail_right  {
        /* float: left; */
    }
    .detail_right .detail_right_header{
        /* float: left; */
        /* text-align: center; */
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 10px;
        list-style-type: none;
        padding: 0 10px 0 10px;
        color: black;
        font-size: 16px;
    }
    .detail_right_header li {
        float: left;
    }
    .detail_right_header .project{
        width: 100px;
    }
    .detail_right_header .collections {
        width: 100px;
    }
    .detail_right_header .apprecations {
        width: 100px;
    }
    
</style>
