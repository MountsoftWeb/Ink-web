<template>  
    <div>    
        <!-- 物品展示 -->
        <div v-for="object in items.list" class="detail_content">
            <ul class="detail_content_main">
                <li><img :src="object.picture"></li>
                <!-- <li><img :src="{{object.picture}}"></li> -->
                <li>详情{{object.name}}</li>
                <li>上传日期{{object.upDate}}</li>
                <li>喜欢{{object.apprecations}}</li>
                <li>所属用户{{object.userName}}</li>
            </ul>    
        </div>
        <div class="page">
            <ul>
                <li class="page_item" v-if="items.pageNum != 1">
                    <router-link
                                :to="{path:'/personal', query:{pageNum:items.pageNum - 1}}"
                                >
                                上一页</router-link>
                </li>
                <li class="page_item"
                    v-for="(page, index) in items.array "
                    v-if="page <= items.totalPage"
                    :key="index"
                    v-bind:class="{ 'page_active': items.pageNum == page}"
                    >
                        <a class="page_btn" v-on:click="page_btn(page)">{{ page}}</a>
                </li>
                <li class="page_item" v-if="items.totalPage != items.pageNum">
                    <router-link 
                                :to="{path:'/personal', query:{pageNum:items.pageNum + 1}}">
                                下一页</router-link>
                </li>
                <li class="page_item">
                    <span>共&nbsp;{{items.totalPage}}&nbsp;页</span>
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
            picture: '',
            userId: ''
        }
    },
    methods: {
        // 删除
        deleteId(a) {
            alert(a)
        },
        aaa: function() {
            this.axios({
            method: "get",
            url: "/hello/test/personal/getPersonalPageNum?userId=" + this.userId + "&pageNum=" + this.$route.query.pageNum,
        }).then(response => {
            if (response.data.code == 200){
                console.log(response.data.data)
                this.items = response.data.data
            }else{

            }
        })
        }
        
    },
    // 页面加载执行
    mounted() {
        if (this.$route.query.userId != "undefined"){
            this.userId = this.$route.query.userId
        } 
        this.axios({
            method: "get",
            url: "/hello/test/personal/getUserDetailByUserId?userId=" + this.$route.query.userId + "&pageNum=" + this.$route.query.pageNum,
        }).then(response => {
            if (response.data.code == 200){
                // console.log(response.data.data)
                this.items = response.data.data
            }else{

            }
        })
    },
    watch: {
        '$route' (to, from) {
            if (this.$route.query.item == 0){
                this.aaa()
            }
        }
    }
 

}
</script>

<style scoped>

    /* ==================== 收藏内容展示 =================== */
    .detail_content {
        background-color: white;
        /* border: solid black; */
        width: 300px;
        height: 345px;
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
        width: 150px;
        /* padding-left: 550px; */
    }
    .detail_content_main li:nth-child(4){
        /* position: relative; */
        /* left: 100px; */
        width: 150px;
        /* width: 120px; */
        /* padding-left: 550px; */
    }
    .detail_content_main li:nth-child(5){
        width: 150px;
        /* padding-left: 200px; */
    }
    .detail_content_main li:nth-child(6){
        width: 150px;
        /* padding-left: 200px; */
    }
    .detail_content_main li:nth-child(7){
        width: 200px;
        /* padding-left: 200px; */
    }
    .detail_content_main li:nth-child(8){
        width: 100px;
        /* padding-left: 200px; */
    }
    .detail_content_main li img {    
        width: 296px; 
        height: 260px;
    }

    .page {
        float: left;
        min-width: 1300px;
        margin: 20px 0 20px 0;
        text-align: center;
    }
    .page ul {
        display: inline-block;
        list-style-type: none;
        list-style: none;
    }
    .page ul li {
        float: left;
        background: #fff;
    }
/*
        font-size: 14px;
        padding: 6px 10px;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    } */
    .page ul li a {
        text-decoration: none;
        color: #000;
    }
    .page_item {
        font-size: 14px;
        padding: 6px 10px;
        background: #fff;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    }
    .page_btn {
        cursor: pointer;
    }
    /* .page ul li:nth-child(1) {
        font-size: 14px;
        padding: 6px 10px;
        background: #fff;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    } */
    .page_active {
        background: #333;
        border-color: #333;
        color: #fff;
        cursor: default;
    }
    .page_display {
        display: none;
    }
</style>
