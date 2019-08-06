<template>
<div>
    <div class="follow_fans_container">
        <div v-for="(people, index) in userlist" class="follow_fans">
            <img id="user_picture" :src="people.userPicture" @click="choose(people.userId)">
            <div class="user_detail">
                <p class="user_name">{{people.username}}</p>
                <p class="user_project">
                    <span>作品: {{people.projects}}</span>
                    <span>粉丝: {{people.fans}}</span>
                    <span>关注: {{people.follows}}</span>
                </p>
                <p  class="user_alter">
                     <input v-show="type == 2" class="follow_btn" type="button" value="取消关注" id="follow" @click="chooseFollow(people.userId, 0)">
                </p>
            </div>
        </div>
        
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            userlist: [],
            type: ''
        }
    },
    methods: {
        chooseFollow: function(id, index) {
            this.$store.dispatch('updateFollow', [id, 0])
        },
        getFollowsFans: function(){
            this.axios({
            method: "get",
            url: "/hello/test/user/getFollows?userId=" + this.$route.query.userId + "&pageNum=" + this.$route.query.pageNum + "&type=" + this.$route.query.item,
            }).then(response => {
            // if (response.data.code == "200"){
                // console.log(response.data.data)
                this.userlist = response.data.data.list
                this.type = response.data.message
                this.$route.go(0)

            // }else{

            // }
        })
        }
    },
    mounted() {
        this.getFollowsFans()
    },
     watch: {
        '$route' (to, from) {
            this.getFollowsFans()
        }
     }
    
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .follow_fans_container {
        width: 1000px;
        min-height: 660px;
    }
    .follow_fans {
        float: left;
        width: 300px;
        height: 100px;
        margin: 0 5px 10px 5px;
    }
    #user_picture {
        float: left;
        cursor: pointer;
        height: 100px;
        width: 100px;
        border-radius: 50px;
    }
    .user_detail {
        width: 180px;
        float: left;
        padding-left: 20px;
        display: block;
    }
    .user_name {
        font-size: 16px;
        color: black;
        padding: 2px 0 2px 0;
    }
    .user_project {
        padding: 2px 0 2px 0;
    }
    .user_alter {
        padding: 2px 0 2px 0;
    }
    
    
</style>
