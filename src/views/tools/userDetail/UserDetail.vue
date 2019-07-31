<template>
    <div class="user_deatil_contain">
        <div class="user_detail">
            <div class="user_detail_img">
                <img src="#">
            </div>
            <p>name</p>
            <p>
                <input type="button" value="关注">
            </p>

        </div>

        <div class="user_project">
            <div class="user_detail_header">
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
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
      return {
            activeClass: 0,
            itemList: [
                {
                    to: "userDetail/projectList",
                    text: "所有作品"
                },
                {
                    to: "#",
                    text: "他的关注"
                },
                {
                    to:"#",
                    text: "他的粉丝"
                },
            ]
      };
    },
    methods: {
        getItem:function(index){
            // alert(item)
            this.activeClass = index;
        }
    },
    // 页面加载执行
    mounted() {
        
        this.$store.dispatch('getUserDetailByUserId', this.$route.query.userId)
    },
    computed: {
        ...mapState(['userDetailByUserId'])
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .user_deatil_contain {
        margin-top: 50px;
    }
    .user_detail {
        float: left;
        min-width: 300px;
        min-height: 200px;
        padding: 10px 5px;
    }
    .user_project {
        float: left;
        min-width: 900px;
        min-height: 200px;
    }
    .user_detail_header {
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
    .user_detail_header a {
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
