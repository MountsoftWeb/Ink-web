// 间接更新 state 对象 通过 mutation

import {
    LOGIN,
    LOGOUT
} from './mutation-types'
import axios from './../http'
import router from './../router'

export default {
    // 登录 isLogin : 1
  getLogin({commit, state}, loginData){
    let success=(response)=>{
        alert(response.data.msg);
    }
    axios({      
        method: "post",
        url: "/hello/login",
        // data: JSON.stringify(this.loginData),
        data: loginData,
        callback: success
    })
    .then
    (response => {
        console.log(response);
        if(response.data.code == 200){
            alert(response.data.message);
            commit(LOGIN, '1');
            
            // alert(store.state.isLogin)
            router.push({ path: '/' }) 
            
        }else{
            alert(response.data.message);
            // this.$router.push({ path: '/' }) 
        }
    })
    .catch(
        function(error) {
            alter(error);
        }.bind(this)
    ); 
  },
  // 退出 isLogin : 0
  logOut({commit}, data){
     
    // axios({
    //     method: 'post',
    //     url: '/hello/login',
    //     data: {
    //       username: '123',
    //       lastName: '123'
    //     }
    //   });
      commit(LOGOUT, '0')
    }
}