<template>
    <div class="backgound">
        
        <!-- 登陆注册 -->
        <div class="loyout_login">
            <!-- <div class="layout_login_form"> -->
                <h1>Mountsoft Ink</h1>
               
                <!-- 表单提交 -->
                <div class="form_login">

                    <div class="form_register_login">
                        <ul>
                            <li class="form_btn_register" @click="register">注册</li>
                            <li class="form_btn_login" @click="login">登录</li>
                        </ul>
                    </div>
                    <div class="message">
                        &nbsp;<span>{{message}}</span>
                    </div>
                    <!-- 注册 -->
                    <div class="form_input" v-if="showRegister">
                            <input type="text" v-model.trim="registerData.username" name="username" placeholder="用户名" @blur="register_check_user">
                    
                            <input type="password" v-model.trim="registerData.password" name="password" placeholder="密码" @focus="register_check_password">
                            <div class="form_button">
                                <input :disabled="register_Button" type="button" value="注册" v-on:click="registerBtn">
                            </div>
                    </div>
                    <!-- 登录 -->
                    <div class="form_input" v-if="showLogin">
                        <input type="text" v-model.trim="loginData.username" name="username" placeholder="login" @blur="login_check_user">
                    
                        <input type="password" v-model.trim="loginData.password" name="password" placeholder="密码" @focus="login_check_password">
                        <div class="form_button">
                            <input :disabled="login_button" type="button" value="登录" v-on:click="loginBtn">
                        </div>
                    </div>

                    <div class="form_remember_forget">
                        <div class="remember_passowrd">
                            <input type="checkbox">
                            <label>记住密码</label>
                        </div>

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
                                        津ICP备19003477号
                                    </li>
                                <!-- </a> -->
                            </span>
                        </p>
                    </div>
                </div>

                
            <!-- </div> -->
        </div>
    </div>
    
</template>

<script>
  export default {
    // name: 'HelloWorld',
    
    data () {
      return {
            message: '',
            register_Button: true,
            login_button: false,
            showLogin: true,
            showRegister: false,
            loginData: {
                username: '',
                password: '',
                logintype: 'phone'
            },
            registerData: {
                username: '',
                password: '',
                logintype: 'phone'
            }
        }
    },
    methods: {
        // 登录
        loginBtn: function () {
            this.$store.dispatch('getLogin',JSON.stringify(this.loginData))
        },
        // 注册
        registerBtn: function() {
            alert(this.registerData.username)
            this.axios({      
                method: "post",
                url: "/hello/register",
                data: this.registerData,
                // callback: success
            }).then(response => {
                console.log(response);
                if(response.data.code == 200){
                    alert("成功，登录")
                    this.$router.push("/login")
                    // this.reload()
                }else{
                    this.$router.push("/login")
                    this.$router.go(0)
                }
            })
        },
        register_check_user: function() {
            if (!(/^1[34578]\d{9}$/.test(this.registerData.username))) {
                console.log("电话号码格式错误")
                this.message = "输入正确手机号"
                this.register_Button = true
            }else{
                // this.register_Button = true
                this.axios({
                    method: "post",
                    url: "/hello/checkUser",
                    data: this.registerData,
                }).then(response => {
                    console.log(response)
                    if(response.data.code == 200){
                        this.message = "手机号可使用"
                    }else{
                        this.message = "更换手机号"
                        
                    }
                })
            }
        },
        register_check_password: function() {          
            if (this.registerData.password.length < 10 && this.registerData.username.trim().length != 0){
                this.register_Button = false
            // alert(this.registerData.password.length)

            }else{
                // alert("no")
                this.message = "填写正确手机号"
                this.register_Button = true
            }
        },
            // alert(localStorage.getItem('token'))

            // this.$store.dispatch('logOut', '').then(() => {
            // //  跳转到首页  
            //     this.$router.push('/');
            // })
            // alert(localStorage.getItem('token'))
            // alert(this.$store.state.token)
        login_check_user: function() {
            if (!(/^1[34578]\d{9}$/.test(this.loginData.username))) {
                console.log("电话号码格式错误")
                this.message = "输入正确手机号"
                this.login_button = true
            }else{
                this.message = ""
            }
        },
        login_check_password: function() {
            // alert(this.loginData.password.length)
             if (this.loginData.password.length < 10 && this.loginData.username.trim().length != 0){
                this.login_button = false
                this.message = ""
            // alert(this.registerData.password.length)

            }else{
                // alert("no")
                this.message = "密码范围 0 ～ 10"
                this.login_button = true
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
    .backgound {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('../assets/img/revolver.jpg');
        background-size: 100% 100%;
        background-repeat:no-repeat;

    }
    .loyout_login {
        /* filter:alpha(Opacity=500); */
        /* -moz-opacity: 0.5; */
        /* background-color: white;        */
        /* color: black; */
        /* font: ; */
        background: rgba(255, 255, 255, 0.2);


        height: 450px;
        width: 470px;
        margin: 124px auto 0;
        margin-top: 260px;
        margin-right: 100px;
        margin-bottom: 0px;
        margin-left: auto;
        /* border: solid; */
        box-shadow: 2px 4px 6px #000;
        border-radius: 20px;


    }
    .loyout_login h1 {
        text-align: center;
        padding-top: 30px;
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
        float: right;
        position: relative;
        top: 50px;
        right: 15%;
        padding: 10px;
        width: 300px;
        height: 300px;
        /* 透明度设置 0 ～ 1 */
        opacity: 0.85;   

        
    }
    .form_register_login {
        width: 300px;
        height: 35px;
    }
    .form_register_login ul li{
        list-style-type: none;
        float: left;
        cursor: pointer;
        
        color: black;
        font-weight: 900;  
        font-size: 17px;
        /* border: solid; */
    }
    
    .form_btn_register {
        /* line-height: inherit;
        border-bottom: 2px solid transparent;
        color: black; */
        width: 150px;
        text-align: center;
    }
    .form_btn_login {
        width: 150px;
        text-align: center;
    }
    /* .form_login input:nth-of-type(){ */
    /* 输入框属性 */
    .form_input input{
        outline: none;
        /* padding: 10px; */
        margin: 5px 0 5px 0;
        width: 95%;
        height: 30px;
        border-radius: 10px;
        padding-left: 9px;
    }
    
    /* button 属性 */
    .form_button input{
        outline: none;
        margin: 2px;
        width: 98%;
        height: 27px;
        font-weight: 900;
        /* background-color: rgba(66,189,86,.5); */
        color: white;
        cursor: pointer;
        background-color: #41ac52;
    }
    /* 记住密码 */
    .remember_passowrd {
        position: absolute;
        margin-top: 5px;
        left: 10px;
    }
    .remember_passowrd label {
        color: white;
    }
    /* 忘记密码 */
    .forget_password {
        position: absolute;
        margin-top: 5px;
        right: 10px;
    }
    .forget_password_font {
        color: white;
    }
    /* 底部信息 */
    .from_footer {
        position: absolute;
        bottom: 0;
        left: 50px;

    }
    .from_footer p {
        color: white;
        font-weight: 900;
        text-align: center;
    }
    .ICP li {
        list-style-type: none;
        color: white;
    }
    .ICP a {
         text-decoration: none
    }
    #saveImage{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
</style>
