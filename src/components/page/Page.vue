<template>
    <div class="page">
            <ul>
                <li class="page_item" v-if="projects.pageNum != 1">
                    <router-link
                                :to="{path:'/project', query:{c:this.$route.query.c,l:this.$route.query.l,pageNum:projects.pageNum - 1}}"
                                >
                                上一页</router-link>
                </li>
                <li class="page_item"
                    v-for="(page, index) in projects.array "
                    v-if="page <= projects.totalPage"
                    :key="index"
                    v-bind:class="{ 'page_active': projects.pageNum == page}"
                    >
                        <a class="page_btn" v-on:click="page_btn(page)">{{ page}}</a>
                </li>
                <li class="page_item" v-if="projects.totalPage != projects.pageNum">
                    <router-link 
                                :to="{path:'/project', query:{c:this.$route.query.c,l:this.$route.query.l,pageNum:projects.pageNum + 1}}">
                                下一页</router-link>
                </li>
                <li class="page_item">
                    <span>共&nbsp;{{projects.totalPage}}&nbsp;页</span>
                </li>
            </ul>
        </div>
</template>

<script>
export default {

}
</script>

<style>
    .page {
        float: left;
        min-width: 900px;
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
