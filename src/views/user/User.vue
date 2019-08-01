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
                    <div class="user_table">
                        <p>
                            <span >关注</span>
                            <span>粉丝</span>
                        </p>
                        <p>职位:{{user.major}}</p>
                        <p>联系方式:{{user.phone}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_right">
            <div class="detail_right_header">
                <!-- <div :class="activeClass == index ? 'active':''" v-for="(item,index) in itemList" :key="index" @click="getItem(index)">
                    <router-link :to="item.to">{{item.text}}</router-link>
                </div> -->
                <router-link v-for="(item,index) in itemList" 
                    :key="item.value" 
                    :to="{path:item.to,query:{item:index}}"
                    :class="{'active':activeClass == index}"
                    @click.native="getItem(index)" 
                    > 
                    {{item.text}} 
                </router-link> 

            </div>
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
            picture: '',
            activeClass: 0, // 0为默认选择第一个，-1为不选择
            itemList: [
                {
                    to: "/user/manage",
                    text: "作品管理"
                },
                {
                    to: "/user/upload",
                    text: "上传作品"
                },
                {
                    to:"/user/userlist?item=" + this.$route.query.item,
                    text: "我的关注"
                },
                {
                    to: "/user/userlist?item=" + this.$route.query.item,
                    text: "我的粉丝"
                },
                {
                    to: "/user/manage",
                    text: "点赞"
                },
                {
                    to: "/user/alter",
                    text: "资料修改"
                },
                
            ]
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
                    if(response.data.code != 404){
                        this.message = '更新成功'
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
        getItem:function(index){
            // alert(item)
            this.activeClass = index;
        }
    },
    // 页面加载执行
    mounted() {
        if(this.$route.query.item){
            // alert(this.$route.query.item)
            this.activeClass = this.$route.query.item;
        }else{
            this.activeClass = 0;
        }
        this.$store.dispatch('getDetail')
    },
    computed: {
        ...mapState(['user'])
    },
    watch: {
        '$route' (to, from) {
            // 2 获取关注 3 获取粉丝
            // this.$route.query.item
        }
    }

}
</script>

<style scoped>
    .detail_container {
        overflow: auto;
        margin: 0 auto;
        background-color: #F5F6F7;
        max-width: 1300px;
        clear: both;
        margin-top: 30px;
    }
    .detail_left { 
        clear: left;
        float: left;
        /* position: relative; */
        top: 65px;
        width: 20%;
        background-color: #F5F6F7;
        font-size: 16px;
        color: black;
        margin: 5px;

            /* border-right: 1px solid #e8e8e8; */

    } 
    .detail_data_left {
        padding-top: 10px;
        display:inline-block;
        /* width: 95%; */
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .detail_data_left:hover {
        border-color: rgb(177, 38, 38);
        box-shadow: 0 0 5px rgb(219, 221, 223);
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
        text-align: left;
        width: 220px;
    }
    .user_table p {
        padding-left: 10px;
    }

    .detail_right {
        /* float: left; */
        display:inline-block;
        position: relative;
        width: 1020px;
        margin: 5px;
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
        /* display: inline-block; */
        margin-top: 10px;
        margin-bottom: 10px;
        list-style-type: none;
        padding: 0 10px 0 10px;
        color: black;
        font-size: 16px;

        height: 54px;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
    }
    .detail_right_header a {
        /* float: left;
        letter-spacing: normal;
        word-spacing: normal;
        border: 1px solid; */
    
        margin: 0 15px;
        height: 54px;
        line-height: 54px;
        color: #6f6f6f;

        text-decoration-line: none;
    }
    .active {
        color: #222;
        border-bottom: 1px #2b2b2b solid;

    }
    
</style>
