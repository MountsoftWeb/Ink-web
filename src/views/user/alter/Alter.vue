<template>
    <div class="alter_detail">
        <p>
            昵称：<input type="text" v-model.trim="username">
        </p>
         <p>
            <span class="profile_span">个人简介：</span>
            <textarea name="profile" id="profile" class="profile_text" v-model.trim="profile" placeholder="" style="width:450px; height:100px;padding: 10px; "></textarea>
        </p>
        
         <p>
            邮箱：<input type="text" v-model.trim="email" >
        </p>
         <p>
            职位：<input type="text"  v-model.trim="major" >
        </p>
        <p>
            <input type="button" value="提交" @click="submit_detail()">
        </p>
    </div>
</template>

<script>
export default {
    methods:{
        submit_detail: function() {
            var formData = new FormData()
            formData.append("username", this.username)
            formData.append("profile", this.profile)
            formData.append("email", this.email)
            formData.append("major", this.major)
            this.axios({      
                method: "post",
                url: "/hello/test/user/updateDetail",
                data: formData
                // callback: success
            }).then(response => {
                if(response.data.code != 404){
                    this.message = '更新成功'
                    // this.reload()
                    this.$router.go(0)
                }else{
                  alert("上传失败")
                    this.message = '更新失败'

                }
            })
        }
    },
}
</script>

<style scoped>
    .alter_detail {
        min-height: 600px;
        padding: 30px;
    }
    .profile_span {
        padding-top: 20px;
        display: block;
    }
    input, textarea {
        font-size: 14px;
        resize: none;
    }
</style>
