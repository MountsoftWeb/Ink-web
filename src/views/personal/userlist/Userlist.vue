<template>
<div>
    <div class="follow_fans_container">
        <div v-for="(popple, index) in userlist" class="follow_fans">
            <img id="personal_picture" src="../carlos.jpg">
            <div class="personal_detail">
                <p class="personal_name">user_name</p>
                <p class="personal_project">
                    <span>作品: </span>
                    <span>粉丝: </span>
                </p>
                <p class="personal_alter">取消关注</p>
            </div>
        </div>
        
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            userlist: {
                a:1,
                w:2,
                e:1,
                r:2,
                t:1,
                y:2,
            }
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
        max-width: 1300px;
        min-height: 660px;
    }
    .follow_fans {
        float: left;
        width: 300px;
        height: 100px;
        margin: 0 5px 10px 5px;
    }
    #personal_picture {
        float: left;
        cursor: pointer;
        height: 100px;
        width: 100px;
        border-radius: 50px;
    }
    .personal_detail {
        width: 180px;
        float: left;
        padding-left: 20px;
        display: block;
    }
    .personal_name {
        font-size: 16px;
        color: black;
        padding: 2px 0 2px 0;
    }
    .personal_project {
        padding: 2px 0 2px 0;
    }
    .personal_alter {
        padding: 2px 0 2px 0;
    }
    
    
</style>
