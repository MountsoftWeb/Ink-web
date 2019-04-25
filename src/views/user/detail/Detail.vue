<template>
    <div class="detail_container">
        <!-- 用户详细信息 -->
        <div class="detail_header">
            <div class="detail_img">
                <img id="picture" title="点击修改" src="../carlos.jpg" @click="update"/>
                <input id="updateFile" type="file" ref="new_image" @change="updatePicture"><br>
                <!-- <span style="text-align: center;">点击修改</span> -->
                <span>{{message}}</span>
            </div>

            <div class="detail_data">
                <div class="detail_data_left">
                    <table >
                        <tr>
                            <td>用户名</td>
                            <td>{{user.username}}</td>
                        </tr>
                        <tr>
                            <td>性别</td>
                            <td>
                                 {{user.sex}}
                            </td>

                        </tr>
                        
                        <tr>
                            <td>学校</td>
                            <td>
                                {{user.school}}
                            </td>
                        </tr>
                        <tr>
                            <td>专业</td>
                            <td>
                                <span>{{user.major}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>发布数量</td>
                            <td>

                            </td>

                        </tr>
                </table>
                </div>

                <div class="detail_data_right">
                    <table>
                        <tr>
                            <td>手机号</td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>邮箱</td>
                            <td>
                                
                            </td>

                        </tr>
                    </table>
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
            imgPath: '/Users/carlos/Documents/素材/社交二维码/carlos.jpg'
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
        position: relative;
        width: 150px;
        height: 170px;
        top: 7%;
        left: 10%;
        /* background-color: black; */
    }
    #picture {
        cursor: pointer;
        height: 150px;
        width: 150px;
        border-radius: 50px;  
    }
    #updateFile {
        display: none;
        /* opacity:0; */
    }
    .detail_data {
        position: absolute;
        top: 20px;
        width: 50%;
        height: 250px;
        left: 25%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .detail_data:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 15px rgb(219, 221, 223);
    }
    .detail_data .detail_data_left {
        padding-top: 5%;

        width: 50%;
        float: left;
        /* display: inline; */
    }
    .detail_data .detail_data_right {
        padding-top: 5%;
        width: 50%;
        float: left;
    }
    table {
        width: 50%;
        text-align: center;
        border-collapse: collapse; 
        border-spacing: 1;
        border-spacing: 0;
    }
    table td{
        word-break: break-all;
        word-wrap: break-word;
        /* border-right: 1px solid #939598; 
        border-bottom: 1px solid #939598; */
        font: 500 20px Arial;
        font-family: Microsoft YaHei;
        color: black;
        height: 30px;
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
