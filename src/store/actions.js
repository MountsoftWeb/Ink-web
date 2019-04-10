// 间接更新 state 对象 通过 mutation

import {
    LOGIN,
    LOGOUT
} from './mutation-types'
import axios from '../axios/http'
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
        data: loginData,
        callback: success
    })
    .then
    (response => {
        console.log(response);
        if(response.data.code == 200){          // 登录成功，将 isLogin 赋值为 1
            alert(response.data.message);
            // alert(response.data.body.token);
            // alert(response.data.data);
            commit(LOGIN, '1');
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
  logOut({commit}, data){       // 退出用户，将 isLogin 赋值为 0
      commit(LOGOUT, '0')
    }
}