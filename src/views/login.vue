<template>
    <div>
        <div class="login_header">

        </div>
        <div class="login_medium">
            <!-- 登陆注册 -->
            <div class="layout_login">
                <!-- <div class="layout_login_form"> -->
                    <h1>Mountsoft Ink</h1>

                    <!-- 表单提交 -->
                    <div class="form_login">

                        <div class="form_register_login">
                            <ul>
                                <li v-if="!showRegister" class="form_btn_register" @click="register">注册</li>
                                <li v-if="showRegister" class="form_btn_register on" @click="register">注册</li>
                                <li v-if="!showLogin" class="form_btn_login" @click="login">登录</li>
                                <li v-if="showLogin" class="form_btn_login on" @click="login">登录</li>
                            </ul>
                        </div>
                        <div class="message">
                            &nbsp;<span>{{message}}</span>
                        </div>
                        <!-- 注册 -->
                        <div class="form_input" v-if="showRegister">
                                <input type="text" v-model.trim="registerData.phone" name="phone" placeholder="用户名" @keyup="register_check">

                                <input type="password" v-model.trim="registerData.password" name="password" placeholder="密码" @keyup="register_check">
                                <div class="form_button">
                                    <input v-if="!register_isOk" :disabled="!register_isOk" type="button" value="注册" v-on:click="registerBtn">
                                    <input v-if="register_isOk" class="form_button_register active" :disabled="!register_isOk" type="button" value="注册" v-on:click="registerBtn">
                                </div>
                        </div>
                        <!-- 登录 -->
                        <div class="form_input" v-if="showLogin">
                            <input type="text" v-model.trim="loginData.phone" name="phone" placeholder="login" @keyup="login_check">

                            <input type="password" v-model.trim="loginData.password" name="password" placeholder="密码" @keyup="login_check">
                            <div class="form_button">
                                <input v-if="!login_isOk" :disabled="!login_isOk" type="button" value="登录" v-on:click="loginBtn">
                                <input v-if="login_isOk" class="form_button_login_login active" :disabled="!login_isOk" type="button" value="登录" v-on:click="loginBtn">
                            </div>
                        </div>

                        <div class="form_remember_forget">
                            <!-- <div class="remember_passowrd">
                                <input type="checkbox">
                                <label>记住密码</label>
                            </div> -->

                            <div class="forget_password">
                                <router-link to="#" class="forget_password_font">忘记密码</router-link>
                            </div>
                        </div>

                        <div class="from_footer">
                            <p>
                                <span>Copyright &copy; 2019 Mountsoft</span><br>
                                <span class="ICP">
                                    <!-- <a href="http://www.miitbeian.gov.cn"> -->
                                        <li>
                                            <!-- 津ICP备19003477号 -->
                                        </li>
                                    <!-- </a> -->
                                </span>
                            </p>
                        </div>
                    </div>


                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
            message: '',
            showLogin: true,
            showRegister: false,
            loginData: {
                phone: '',
                password: '',
                logintype: 'phone'
            },
            registerData: {
                phone: '',
                password: '',
                logintype: 'phone'
            },
            register_isOk: false,
            login_isOk: false,
            isPhone: false
        }
    },
    methods: {
        // 登录
        loginBtn: function () {
            this.$store.dispatch('getLogin',JSON.stringify(this.loginData))
        },
        // 注册
        registerBtn: function() {
            alert(this.registerData.phone)
            this.axios({
                method: "post",
                url: "/hello/register",
                data: this.registerData,
                // callback: success
            }).then(response => {
                // console.log(response);
                if(response.data.code == 200){
                    alert("成功，登录")
                    // window.reload()
                    this.$router.go(0)
                }else{
                    this.$router.push("/login")
                    this.$router.go(0)
                }
            })
        },
        register_check: function() {
            if (!(/^1[34578]\d{9}$/.test(this.registerData.phone))) {
                this.message = "输入正确手机号"
                this.register_isOk = false
            }else{
                this.axios({
                    method: "post",
                    url: "/hello/checkUser?username=" + this.registerData.phone,
                }).then(response => {
                    if(response.data.code == 200){
                        this.message = "手机号可使用"
                        this.isPhone = true
                    }else{
                        this.message = "更换手机号"
                        // this.register_isOk = false
                    }
                })
            }
            if (this.registerData.password.length > 2 && this.registerData.phone.trim().length > 1 && this.isPhone){
                this.register_isOk = true
            }else{
                // this.message = "填写正确手机号"
                this.register_isOk = false
            }
        },

        change: function(index){
    // console.log(index);
},

            // alert(localStorage.getItem('token'))

            // this.$store.dispatch('logOut', '').then(() => {
            // //  跳转到首页
            //     this.$router.push('/');
            // })
            // alert(localStorage.getItem('token'))
            // alert(this.$store.state.token)
        login_check: function() {
            if (!(/^1[34578]\d{9}$/.test(this.loginData.phone))) {
                console.log("电话号码格式错误")
                this.message = "输入正确手机号"
                // this.login_button = true
                // this.login_isOk = true
                this.login_isOk = false
            }else{
                this.message = ""
            }
            if (this.loginData.password.length > 5 && this.loginData.phone.trim().length != 0){
                // this.login_button = false
                this.message = ""
                this.login_isOk = true
            // alert(this.registerData.password.length)

            }else{
                // alert("no")
                this.message = "密码范围 0 ～ 10"
                // this.login_button = true
                this.login_isOk = false
            }
        },
        // 登录 注册 div 切换
        register() {
            this.showLogin = false
            this.showRegister = true
            this.message = ""
        },
        login() {
            this.showLogin = true
            this.showRegister = false
            this.message = ""
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

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    .login_header {
        margin: 50px;
    }
    .login_medium {
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        /* background: #fafafa; */
    }
    .layout_login {
        width: 100%;
        max-width: 420px;
        padding: 15px;
        margin: 0 auto;
        background: #fff;
        box-shadow: 10px 6px 6px rgba(0, 0, 0, .05);
        border-radius: 20px;
    }
    .layout_login h1 {
        text-align: center;
        padding: 30px 0 30px 0;
        font-weight: 900;
        color: black;
    }
    .layout_img img{
        float: left;
        width: 200px;
        height: 300px;
        top: 50px;
        left: 5%;
        position: relative;

    }
    .message span{
        color: red;
    }
    .form_login {
        position: relative;
        width: 100%;
        max-width: 400px;
        /* 透明度设置 0 ～ 1 */
        opacity: 0.85;
    }
    .form_register_login {
        /* width: 300px; */
        height: 35px;
    }
    .form_register_login ul li{
        list-style-type: none;
        float: left;
        cursor: pointer;
        /* color: black; */
        font-weight: 900;
        font-size: 18px;
        line-height: 2;
        /* border: solid; */
    }

    .form_btn_register {
        /* line-height: inherit;
        border-bottom: 2px solid transparent;
        color: black; */
        width: 50%;
        text-align: center;
        border-bottom: 1px solid #ececec;
    }
    .form_btn_register.on{
        width: 50%;
        text-align: center;
        color: black;
        border-bottom: 1px solid black;
    }
    .form_btn_login {
        width: 50%;
        text-align: center;
        border-bottom: 1px solid #ececec;
    }
    .form_btn_login.on {
        width: 50%;
        text-align: center;
        color: black;
        border-bottom: 1px solid black;
    }
    /* .form_login input:nth-of-type(){ */
    /* 输入框属性 */
    .form_input input{
        outline: none;
        /* padding: 10px; */
        margin: 5px 0 5px 0;
        width: 100%;
        height: 46px;
        border-radius: 10px;
        padding-left: 9px;
    }

    /* button 属性 */
    .form_button input{
        outline: none;
        margin: 2px;
        /* width: 98%; */
        height: 50px;
        font-weight: 900;
        /* background-color: rgba(66,189,86,.5); */
        color: white;
        cursor: pointer;
        background-color: gray;
    }
    .form_button_register.active {
        background-color: #41ac52;
    }
    .form_button_login_login.active {
        background-color: #41ac52;
    }
    /* 记住密码 */
    .remember_passowrd {
        position: absolute;
        margin-top: 5px;
        left: 10px;
    }
    .remember_passowrd label {
        color: black;
    }
    /* 忘记密码 */
    .forget_password {
        position: relative;
        margin-top: 5px;
        text-align: right;
        /* right: 10px; */
    }
    .forget_password_font {
        color: black;
    }
    /* 底部信息 */
    .from_footer {
        position: relative;
        /* bottom: 0; */
        /* left: 50px; */

    }
    .from_footer p {
        color: black;
        font-weight: 900;
        text-align: center;
    }
    .ICP li {
        list-style-type: none;
        color: black;
    }
    .ICP a {
         text-decoration: none
    }
    #saveImage{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }

    .gray {
        color: gray;
    }
</style>
