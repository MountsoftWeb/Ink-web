<template>
    <div class="detail_container">
        <!-- 用户详细信息 -->
        <div class="detail_header">
            <div class="detail_data_left">

                <div class="detail_img">
                    <img id="picture" title="点击修改" :src="picture" @click="update"/>
                    <input id="updateFile" type="file" ref="new_image" @change="updatePicture"><br>
                    <!-- <span style="text-align: center;">点击修改</span> -->
                    <span>{{message}}</span>
                    <ul>
                        <li>用户名:{{user.username}}</li>
                        <li>性别:{{user.sex}}</li>
                    </ul>
                </div>

                <div class="detail_data_L">
                    <ul>
                        <li>学校:{{user.school}}</li>
                        <li>专业:{{user.major}}</li>
                        <li>手机号:{{user.phone}}</li>
                        <li>邮箱:{{user.email}}</li>
                        <li>个人简介:</li>
                    </ul>
                           
                </div>

                <!-- <div class="detail_data_right">
                   
                </div> -->
                
            </div>
            <div class="detail_data_right">
                <div class="detail_data_R">
                    <ul>
                        <li>发布数量</li>
                        <li>收藏数量</li>
                        <li>消息</li>
                        <li>成功交易</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 物品展示 -->
        <div v-for="object in items" class="detail_content">
            <div class="detail_content_main">               
                <ul>
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
            items: {
                a: {
                    id: 0,
                    message: "ds"
                },
                b: {
                    id: 1,
                    message: "ddsdsdd"
                }
            },
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
        this.axios({
            method: "get",
            url: "/hello/test/getPicture"
        }).then(response => {
            if(response.data.code == 200){
                this.picture = response.data.message
            }else{
                this.imgPath = response.data.message
            }
        })
    },
    computed: {
        ...mapState(['user'])
  }

}
</script>

<style>
    .detail_container {
        padding: 10px;
        background-color: #F5F6F7;
    }
    .detail_header { 
        height: 300px;
        background-color: #F5F6F7;
    }
    .detail_content {
        background-color: white;
        border: solid black;
        width: 1400px;
        margin: 10px auto;
        
        /* text-align: center; */
    }
    .detail_img {
        position: absolute;
        width: 110px;
        height: 125px;
        top: 7%;
        left: 6%;
        /* background-color: black; */
    }
    .detail_img {
        font-size: 12px;
    }
    .detail_img ul {
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
        /* opacity:0; */
    }
    .detail_data_left {
        position: absolute;
        top: 20px;
        width: 35%;
        height: 250px;
        left: 12%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .detail_data_left:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 15px rgb(219, 221, 223);
    }
    .detail_data_left .detail_data_L {
        padding-top: 5%;
        width: 30%;
        float: left;
        position: absolute;
        left: 45%;
        /* display: inline; */
    }
    .detail_data_L ul li {
        list-style-type: none;
        font-size: 16px;
        color: black;
    }
    .detail_data_right {
        position: absolute;
        top: 20px;
        width: 35%;
        height: 250px;
        right: 12%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .detail_data_right:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 15px rgb(219, 221, 223);
    }
    .detail_data_right .detail_data_R {
        padding-top: 5%;
        width: 30%;
        float: left;
        position: absolute;
        right: 60%;
        /* display: inline; */
    }
    .detail_data_R ul {
        list-style-type: none;
    }
    /* table {
        width: 50%;
        text-align: center;
        border-collapse: collapse; 
        border-spacing: 1;
        border-spacing: 0;
    }
    table td{
        word-break: break-all;
        word-wrap: break-word;
        border-right: 1px solid #939598; 
        border-bottom: 1px solid #939598;
        font: 500 20px Arial;
        font-family: Microsoft YaHei;
        color: black;
        height: 30px;
    } */

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
        height: 100px;
        /* position: absolute; */
        padding: 10px;
        
    }
    .detail_content_main ul {
        list-style-type: none;
        height: 100px;
        
    }
    .detail_content_main ul li {
        float: left;
        line-height: 50px;
        height: 100px;
        letter-spacing: normal;
        word-spacing: normal;
    }
    .detail_content_main ul li:nth-child(1){
        width: 100px;
    }
    .detail_content_main ul li:nth-child(2){
        width: 490px;
        padding-left: 20px;
        /* padding-left: 150px; */
    }
    .detail_content_main ul li:nth-child(3){
        width: 340px;
        /* padding-left: 550px; */
    }
    .detail_content_main ul li:nth-child(4){
        width: 120px;
        /* padding-left: 550px; */
    }
    .detail_content_main ul li:nth-child(5){
        width: 200px;
        /* padding-left: 200px; */
    }
    .detail_content_main ul li:nth-child(6){
        width: 100px;
        /* padding-left: 200px; */
    }
    .detail_content_main ul li img {
        /* margin-left: 50%; */
        width: 100px;
        height: 100px;
    }
</style>
