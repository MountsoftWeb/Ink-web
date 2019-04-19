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
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>性别</td>
                            <td>1</td>

                        </tr>
                        
                        <tr>
                            <td>学校</td>
                            <td>****</td>
                        </tr>
                        <tr>
                            <td>专业</td>
                            <td>****</td>
                        </tr>
                        <tr>
                            <td>发布数量</td>
                            <td>1</td>

                        </tr>
                </table>
                </div>

                <div class="detail_data_right">
                    <table>
                        <tr>
                            <td>手机号</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>邮箱</td>
                            <td>1</td>

                        </tr>
                    </table>
                </div>
                
            </div>
        </div>
        <!-- 物品展示 -->
        <div class="detail_content">
            <div class="detail_content_main">               
                <ul>
                    <li><img src="../carlos.jpg"></li>
                    <li>详情</li>
                    <li>价格</li>
                    <li>联系卖家</li>
                    <li><a href="#">删除</a></li>
                </ul>    
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return{
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
    },
    // 页面加载执行
    mounted() {
        this.axios({
            method: "get",
            url: "/hello/test/getPicture"
        }).then(response => {
            if(response.data.code == 200){
                this.imgPath = response.data.message
            }else{

            }
        })
    }
}
</script>

<style>
    .detail_header { 
        height: 300px;
    }
    .detail_content {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
    .detail_img {
        position: absolute;
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
        width: 70%;
        height: 300px;
        right: 10%;
        /* background-color: black; */
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
    }
    .detail_content_main ul li {
        float: left;
        line-height: 50px;
        height: 100px;
        letter-spacing: normal;
        word-spacing: normal;
    }
    .detail_content_main ul li:nth-child(2){
        padding-left: 150px;
    }
    .detail_content_main ul li:nth-child(3){
        padding-left: 550px;
    }
    .detail_content_main ul li:nth-child(4){
        padding-left: 200px;
    }
    .detail_content_main ul li:nth-child(5){
        padding-left: 200px;
    }
    .detail_content_main ul li img {
        margin-left: 50%;
        width: 100px;
        height: 100px;
    }
</style>
