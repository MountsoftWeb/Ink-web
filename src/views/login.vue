<template>
    <!-- 登陆注册 -->
    <div class="loyout_login">
        <div class="layout_login_form">
            <h1>Mountsoft Ink</h1>
            <!-- 展示二维码 -->
            <div class="form_img">
                <img :src="wePicture">
            </div>
            <!-- 表单提交 -->
            <div class="form_login">
                <div class="form_input">
                        <input type="text" v-model.trim="loginData.username" name="username" placeholder="用户名">
                
                        <input type="password" v-model.trim="loginData.password" name="password" placeholder="密码">
                </div>
                <div class="form_button">
                        <input type="button" value="登录" v-on:click="submit">
                
                        <input type="button" value="退出" v-on:click="logout">
                </div>
            </div>
        </div>
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
            alert(localStorage.getItem('token'))

            this.$store.dispatch('logOut', '').then(() => {
            //  跳转到首页  
                this.$router.push('/');
            })
            alert(localStorage.getItem('token'))
            // alert(this.$store.state.token)
        },

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
    *{
        margin: 0;
        padding: 0;
    }
    .layout_login {
        width: 100%;
        height: 100%;
    }
    .layout_login_form {
        width: 60%;
        height: 50%;
        text-align: center;
        margin: 0 auto;
        position: absolute;
        left: 15%;
        top: 20%;
        /* margin-left: -150px; */
        /* margin-top:-100px; */
    }
    .layout_login_form h1{
        position: absolute;
        right: 16%;
        top: 20%;
    }
    .form_login {
        /* margin: 0 auto; */
        width: 30%;
        right: 10%;
        position: absolute;
        right: 10%;
        top: 30%;
    }
    /* 图片属性 */
    .form_img img{
        position: absolute;
        width: 200px;
        height: 300px;
        top: 20%;
        left: 30%;
    }
    /* .form_login input:nth-of-type(){ */
    /* 输入框属性 */
    .form_input input{
        outline: none;
        margin: 10px;
        width: 70%;
        height: 30px;
        border-radius: 10px;
    }
    /* button 属性 */
    .form_button input{
        outline: none;
        margin: 2px;
        width: 33%;
        height: 27px;
    }

    #saveImage{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
</style>
