<template>
    <!-- 登陆注册 -->
    <div class="">
        <div class="MyForm">
                <label for="username">用户名</label><input type="text" v-model.trim="loginData.username" name="username">
                <label for="password">密码</label><input type="password" v-model.trim="loginData.password" name="password">

                <input type="button" value="登录" v-on:click="submit">
                <input type="button" value="退出" v-on:click="logout">
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
            password: ''
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
            this.$store.dispatch('logOut')
            alert(this.$store.state.isLogin)
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
    .MyForm {
        width: 10%;
    }
</style>
