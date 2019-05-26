<template>
    <div class="detail_container">
        <!-- 用户详细信息 -->
        <div class="detail_left">
            <div class="detail_data_left">

                <div class="detail_data_user">
                    <img id="picture" title="点击修改" :src="user.picture" @click="update"/>
                    <input id="updateFile" type="file" ref="new_image" @change="updatePicture"><br>
                    <!-- <span style="text-align: center;">点击修改</span> -->
                    <span>{{message}}</span>
                        <p> 用户名:{{user.username}}</p>
                        <p>性别:{{user.sex}}</p>
                        <p>学校:{{user.school}}</p>
                        <p>专业:{{user.major}}</p>
                        <p>手机号:{{user.phone}}</p>
                        <p>邮箱:{{user.email}}</p>
                        <p>个人简介:</p>
                </div>
            </div>
        </div>
        <div class="detail_right">
            <ul class="detail_right_header">
                <li class="project">
                    发布数量
                </li>
                <li class="collections">
                    收藏数量
                </li>
                <li class="apprecations">
                    点赞
                </li>
            </ul>
            <br>
            <!-- 物品展示 -->
            <div v-for="object in items" class="detail_content">
                <ul class="detail_content_main">
                    <li><img src="../carlos.jpg"></li>
                    <!-- <li><img :src="{{object.picture}}"></li> -->
                    <li>详情{{object.message}}</li>
                    <li>价格{{object.id}}</li>
                    <li>价格{{object.id}}</li>
                    <li>联系卖家{{object.message}}</li>
                    <li>
                        <input id="delete" type="button" @click="deleteId(object.id)" value="删除"></input>
                    </li>
                </ul>    
            
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {

    data () {
        return{
            items: {},
            text: 0,
            message: '点击图片修改',
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
        deleteId(a) {
            alert(a)
        }
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
        padding: 10px;
        width: 20%;
        background-color: #F5F6F7;
        font-size: 16px;
        color: black;
        
    } 
    .detail_data_left {
        display:inline-block;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .detail_data_left:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 15px rgb(219, 221, 223);
    } 
    .detail_data_user {
        font-size: 12px;
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
    }
    #updateFile {
        display: none;
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
    /* ==================== 收藏内容展示 =================== */
    .detail_content {
        background-color: white;
        /* border: solid black; */
        width: 300px;
        height: 300px;
        float: left;
        /* padding: 10px; */
        margin: 12px;
    } 
    /* ===================== 发布收藏导航条 ================== */
    .detail_content_header {
        height: 70px;
    }
    .detail_content_header ul {
        list-style-type: none;
        padding-left: 5%;
    }
    .detail_content_header ul li {
        float: left;
        font-size: 20px;
        color: black;
        padding-left: 10px;
    }
    /* ==================== 发布收藏 ======================== */
    .detail_content_main {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 2px;
        
    }
    .detail_content_main li {
        float: left;
        /* line-height: 50px; */
        /* height: 100px; */
        letter-spacing: normal;
        word-spacing: normal;
    }
    .detail_content_main li:nth-child(1){
        width: 296px;
        height: 260px;
    }
    .detail_content_main li:nth-child(2){
        width: 100%;
        /* padding-left: 20px; */
        /* padding-left: 150px; */
    }
    .detail_content_main li:nth-child(3){
        width: 50px;
        /* padding-left: 550px; */
    }
    .detail_content_main li:nth-child(4){
        width: 50px;
        /* width: 120px; */
        /* padding-left: 550px; */
    }
    .detail_content_main li:nth-child(5){
        width: 92px;
        /* padding-left: 200px; */
    }
    .detail_content_main li:nth-child(6){
        width: 100px;
        /* padding-left: 200px; */
    }
    .detail_content_main li img {    
        width: 296px; 
        height: 260px;
    }
</style>
