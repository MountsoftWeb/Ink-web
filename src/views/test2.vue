<template>
    <!-- 登陆注册 -->
    <div class="">
        <div class="aa">
                <label for="username">用户名</label><input type="text" v-model.trim="loginData.username" name="username">
                <label for="password">密码</label><input type="password" v-model.trim="loginData.password" name="password">

                <input type="button" value="登录" v-on:click="submit">
                <input type="button" value="退出" v-on:click="logout">
        </div>

        <h3>添加新图：</h3>
    <input type="file" id="saveImage" ref="new_image">
    <input type="button" v-on:click="addImage" value="添加">

    <h4>原始图：</h4>
        <img id="getImage" src="/hello/newPIC.jpeg" style="with:100px;height:100px"/>
        <input type="button" value="获取" v-on:click="getImage">
    </div>
    
</template>

<script>
  export default {
    // name: 'HelloWorld',
    data () {
      return {
        // msg: 'Welcome to Ink!',
        loginData: {
            username: '',
            password: '',
            logintype: 'phone'
        }
      }
    },
    methods: {
        // 登录
        submit: function () {
            this.$store.dispatch('getLogin',JSON.stringify(this.loginData))
        },
        // 退出
        logout: function() {
            // this.$store.commit('LOGIN', '0');
            this.$store.dispatch('logOut').then(() => {
            //  跳转到首页  
                this.$router.push('/');
            })
            alert(this.$store.state.isLogin)
        },

        addImage: function() {
           let self = this;
            if (self.$refs.new_image.files.length !== 0) {
                var formData = new FormData()
                formData.append('image_data', self.$refs.new_image.files[0]);
                //单个文件进行上传
                this.axios({      
                    method: "post",
                    url: "/hello/addImage",
                    data: formData,
                    // callback: success
                }).then(response => {
        
                })
            }
        },
        getInage: function() {

        }
    },
    // mounted() {
    //     /*页面初始化调用方法*/
    //     // this.getTable({
    //     // pageInfo: this.pageInfo
    //     // });
    //     this.axios({
    //         method: "get",
    //         url: "/hello/test"
    //     })
    //     .then(
    //         function(response) {
    //             this.interestList = response.data.data;
    //         }.bind(this)
    //     )
    //     .catch(
    //         function(error) {
    //             alter(error);
    //         }.bind(this)
    //     );
    // }
}
</script>

<style>
    #saveImage{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
</style>
