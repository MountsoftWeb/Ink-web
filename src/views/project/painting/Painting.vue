<template>  
    <div>    
        <!-- 物品展示 -->
        <div v-for="object in items" class="painting_content">
            <ul class="painting_content_main">
                <li><img src="../carlos.jpg"></li>
                <!-- <li><img :src="{{object.picture}}"></li> -->
                <li>详情{{object.message}}</li>
                <li>类别{{object.id}}</li>
                <li>上传日期{{object.id}}</li>
                <li>喜欢{{object.message}}</li>
                <li>收藏{{object.message}}</li>
                <li>所属用户{{object.message}}</li>
                <li>
                    <input id="delete" type="button" @click="deleteId(object.id)" value="删除"></input>
                </li>
            </ul>    
            
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
            // message: '点击图片修改',
            imgPath: '/Users/carlos/Documents/素材/社交二维码/carlos.jpg',
            picture: ''
        }
    },
    methods: {
        // 删除
        deleteId(a) {
            alert(a)
        }
        
    },
    // 页面加载执行
    mounted() {
        // this.$store.dispatch('getDetail')
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
            url: "/hello/project/getProject",
        }).then(response => {
            if (response.data.code == 200){
                // alert(response.data)
                this.items = response.data.data
            }else{

            }
        })

    },
 

}
</script>

<style scoped>

    /* ==================== 收藏内容展示 =================== */
    .painting_content {
        background-color: white;
        /* border: solid black; */
        width: 300px;
        height: 345px;
        float: left;
        /* padding: 10px; */
        margin: 12px;
    } 
    /* ===================== 发布收藏导航条 ================== */
    .painting_content_header {
        height: 70px;
    }
    .painting_content_header ul {
        list-style-type: none;
        padding-left: 5%;
    }
    .painting_content_header ul li {
        float: left;
        font-size: 20px;
        color: black;
        padding-left: 10px;
    }
    /* ==================== 发布收藏 ======================== */
    .painting_content_main {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 2px;
        
    }
    .painting_content_main li {
        float: left;
        /* line-height: 50px; */
        /* height: 100px; */
        letter-spacing: normal;
        word-spacing: normal;
    }
    .painting_content_main li:nth-child(1){
        width: 296px;
        height: 260px;
    }
    .painting_content_main li:nth-child(2){
        width: 100%;
        /* padding-left: 20px; */
        /* padding-left: 150px; */
    }
    .painting_content_main li:nth-child(3){
        width: 150px;
        /* padding-left: 550px; */
    }
    .painting_content_main li:nth-child(4){
        /* position: relative; */
        /* left: 100px; */
        width: 150px;
        /* width: 120px; */
        /* padding-left: 550px; */
    }
    .painting_content_main li:nth-child(5){
        width: 150px;
        /* padding-left: 200px; */
    }
    .painting_content_main li:nth-child(6){
        width: 150px;
        /* padding-left: 200px; */
    }
    .painting_content_main li:nth-child(7){
        width: 200px;
        /* padding-left: 200px; */
    }
    .painting_content_main li:nth-child(8){
        width: 100px;
        /* padding-left: 200px; */
    }
    .painting_content_main li img {    
        width: 296px; 
        height: 260px;
    }
</style>
