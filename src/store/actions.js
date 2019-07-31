// 间接更新 state 对象 通过 mutation

import {
    LOGIN,
    LOGOUT,
    GETDETAIL,
    GETPROJECTID,
    GETPROJECT,
    GETLABEL,
    GETCATEGORIES,
    GETPROJECTDETAIL,
    GETFOLLOWS,
    GETFANS,
    GETHOTPROJECT,
    GETHOTUSER,
    GETCOMMENTLISTBYPROJECTID,
} from './mutation-types'
import axios from '../axios/http'
import router from './../router'

export default {
    // 登录 isLogin : 1
    getLogin({commit, state}, loginData){
        let success=(response)=>{
            // alert(response.data.msg);
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
                alert(response.data.token);
                // alert(response.data.token);
                // alert(response.data.data);
                commit(LOGIN, response.data.token);
                // alert(localStorage.getItem('token'))

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
      commit(LOGOUT, data)
    },
    // 获取用户详细信息
    getDetail({commit, data}){
        axios({
            method: "post",
            // url: "/hello/test/getPicture"
            url: "/hello/test/getDetail"
        }).then(response => {
            if(response.data.code == 200){
                commit(GETDETAIL, response.data.data);
            }else{

            }
        })
    },
    // 按照 项目 id 获取
    getProjectId({commit, data}, id){
        // id[category, label, pageNum]
        axios({
            method: "get",
            url: "/hello/project/getAllProject?c=" + id[0] + "&l=" + id[1] + "&pageNum=" + id[2]
        // + "&l=" + l,
         
            // data: id,
        }).then(response => {
            if(response.data.code == 200){
                // console.log(id[1])
                // alert(id[0])
                // commit(GETPAGE, response.data.data)

                commit(GETPROJECTID, response.data.data)
            }else{

            }
        })
    },
    // 获取用户所有作品
    getProject({commit, data}, pageNum){
        axios({
            method: "get",
            url: "/hello/test/project/getProject?pageNum=" + pageNum,
         
            // data: id,
        }).then(response => {
            if(response.data.code == 200){
                // console.log(response.data.data)
                commit(GETPROJECT, response.data.data)
            }else{

            }
        })
    },
    // 获取分类信息
    getCategories({commit, data}) {
        axios({
            method: "get",
            url: "/hello/category/getCategories"
        }).then(response => {
            commit(GETCATEGORIES, response.data.data)
        })
    },
    // 获取标签信息
    getLabel({commit, data}) {
        axios({
            method: "get",
            url: "/hello/label/getLabel"
        }).then(response => {
            // if (response.data.code == 200){
                commit(GETLABEL, response.data.data)
            // }
        })
    },
    // 获取作品相关信息 projectId
    getProjectDetail({commit, data}, projectId) {
        axios({
            method: "get",
            url: "/hello/test/project/getProjectDetail?projectId=" + projectId
        }).then(response => {
            commit(GETPROJECTDETAIL, response.data.data)
        })
    },

    // 获取关注
    getFollows({commit, data}, userId) {
        axios({
            method: "get",
            url: "/hello/user/getFollows?userId=" + userId
        }).then(response => {
            commit(GETFOLLOWS, response.data.data)
        })
    },
    // 获取粉丝
    getFans({commit, data}, userId){
        axios({
            method: "get",
            url: "/hello/user/getFans?userId=" + userId
        }).then(response => {
            commit(GETFANS, response.data.data)
        })
    },
    updateFollow({commit, data}, status) {
        axios({
            method: "get",
            url: "/hello/test/user/updateFollow?userId=" + status[0] + "&userFollowStatus=" + status[1], 
        }).then(response => {
            if (response.data.code != "404"){
                router.go(0)
            }else {
                alert("失败");
            }
            
        })
    },
    // 获取热们作品 热门用户
    getHotProject({commit, data}) {
        axios({
            method: "get",
            url: "/hello/project/getHotProject"
        }).then(response => {
            commit(GETHOTPROJECT, response.data.data)
        })
    },
    getHotUser({commit, data}) {
        axios({
            method: "get",
            url: "/hello/user/getHotUser"
        }).then(response => {
            commit(GETHOTUSER, response.data.data)
        })
    },
    // 点赞判断
    updataAppreciate({commit, data}, status) {
        axios({
            method: "get",
            url: "/hello/test/project/updataAppreciate?projectId=" + status[0] + "&status=" + status[1], 
        }).then(response => {
            router.go(0)
        })
    },
    // 按照作品 ID 获取相关评论
    getCommentListByProjectId({commit, data}, projectId) {
        axios({
            method: "get",
            url: "/hello/test/comment/getCommentList?projectId=" + projectId
        }).then(response => {
            commit(GETCOMMENTLISTBYPROJECTID, response.data.data)
        })
    },

    // 按照用户 ID 获取相关信息
    getUserDetailByUserId({commit, data}, userId) {
        axios({
            method: "get",
            url: "/hello/test/userDetail/getUserDetailByUserId?userId=" + userId
        }).then(response => {
            commit(GETUSERDETAILBYUSERID, response.data.data)
        })
    }

}