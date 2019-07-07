<template>  
    <div>    
        <!-- 物品展示 -->
        <div v-for="object in items" class="project_content">
            <ul class="project_content_main">
                <li><img src="../carlos.jpg"></li>
                <!-- <li><img :src="{{object.picture}}"></li> -->
                <li>详情{{object.message}}</li>
                <li>类别{{object.id}}</li>
                <li>上传日期{{object.id}}</li>
                <li>所属用户{{object.message}}</li>
                <li>喜欢{{object.message}}</li>
                <li>收藏{{object.message}}</li>
                
                <li>
                    <input id="delete" type="button" @click="deleteId(object.id)" value="详细信息"></input>
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
            items: {
                a:1,
                b:2,
                z:1,
                x:2,
                c:1,
                v:2,
                n:1,
                m:2,
                q:2,
            },
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
        // this.axios({
        //     method: "get",
        //     url: "/hello/project/getProject",
        // }).then(response => {
        //     if (response.data.code == 200){
        //         // alert(response.data)
        //         this.items = response.data.data
        //     }else{

        //     }
        // })

    },
 

}
</script>

<style scoped>

    /* ==================== 收藏内容展示 =================== */
    .project_content {
        background-color: white;
        /* border: solid black; */
        width: 300px;
        height: 345px;
        float: left;
        /* padding: 10px; */
        padding: 10px;
    } 
    /* ===================== 发布收藏导航条 ================== */

    /* ==================== 发布收藏 ======================== */
    .project_content_main {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 2px;
        
    }
    .project_content_main li {
        float: left;
        /* line-height: 50px; */
        /* height: 100px; */
        letter-spacing: normal;
        word-spacing: normal;
    }
    .project_content_main li:nth-child(1){
        width: 296px;
        height: 260px;
    }
    .project_content_main li:nth-child(2){
        width: 100%;
        /* padding-left: 20px; */
        /* padding-left: 150px; */
    }
    .project_content_main li:nth-child(3){
        width: 150px;
        /* padding-left: 550px; */
    }
    .project_content_main li:nth-child(4){
        /* position: relative; */
        /* left: 100px; */
        width: 150px;
        /* width: 120px; */
        /* padding-left: 550px; */
    }
    .project_content_main li:nth-child(5){
        width: 100%;
        /* padding-left: 200px; */
    }
    .project_content_main li:nth-child(6){
        width: 50px;
        /* padding-left: 200px; */
    }
    .project_content_main li:nth-child(7){
        width: 50px;
        /* padding-left: 200px; */
    }
    .project_content_main li:nth-child(8){
        margin: auto 50px;
        width: 100px;
        /* padding-left: 200px; */
    }
    .project_content_main li img {    
        width: 296px; 
        height: 260px;
    }
</style>
