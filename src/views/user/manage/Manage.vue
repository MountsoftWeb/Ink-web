<template>
<div class="manage">
  <div v-for="(project, index) in userProjects.list" :key="index" class="manage_container">
    <div class="manage_left">
      <img id="project_image" :src="project.picture">
    </div>
    <div class="manage_middle">
      <ul class="manage_project_detail">
        <li>
          <span>标题:{{project.name}}</span>
        </li>
        <li>
          <span>绘画方式:{{project.paintingwayId}}</span>
        </li>
        <li>
          <span>标签:{{project.labelId}}</span>
        </li>
        <li>
          <span>上传日期:{{project.upDate}}</span>
        </li>
        <li>
          <span>点赞数:{{project.apprecations}}</span>
        </li>
        <li>
          <span>地理位置</span>
        </li>
      </ul>
    </div>

    <div class="manage_right">
      <p>
        <input type="button" value="修改" >
      </p>
      <p>
        <input type="button" value="删除" @click="deleteProject(project.id)">
      </p>
    </div>
  </div>

  <div class="page">
            <ul>
                <li class="page_item" v-if="userProjects.pageNum != 1">
                    <router-link
                                :to="{path:'/user', query:{pageNum:userProjects.pageNum - 1}}"
                                >
                                上一页</router-link>
                </li>
                <li class="page_item"
                    v-for="(page, index) in userProjects.array "
                    v-if="page <= userProjects.totalPage"
                    :key="index"
                    v-bind:class="{ 'page_active': userProjects.pageNum == page}"
                    >
                        <a class="page_btn" v-on:click="page_btn(page)">{{ page}}</a>
                </li>
                <li class="page_item" v-if="userProjects.totalPage != userProjects.pageNum">
                    <router-link 
                                :to="{path:'/user', query:{pageNum:userProjects.pageNum + 1}}">
                                下一页</router-link>
                </li>
                <li class="page_item">
                    <span>共&nbsp;{{userProjects.totalPage}}&nbsp;页</span>
                </li>
            </ul>
        </div>
</div>
</template>

<script>

import {mapState} from "vuex"
export default {
   data () {
        return{
            items: {},
        }
    },
  methods:{
    // 删除对应作品
    deleteProject: function(id) {
      alert(id)
      this.axios({      
        method: "get",
        url: "/hello/test/user/deleteProject?projectId=" + id,
      }).then(response => {
        if(response.data.code == 201){
            alert("删除失败")
            this.message = '更新失败'
        }else{
            this.message = '更新成功'
            this.$router.go(0)
        }
    })
    },
  },
  mounted() {
    this.$store.dispatch('getProject', this.$route.query.pageNum)
  },
  computed: {
    ...mapState(['userProjects'])
  },
  watch: {
      '$route' (to, from) {
          this.$store.dispatch('getProject', this.$route.query.pageNum)
      }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .manage {
    min-height: 600px;
  }
  .manage_container {
    clear: both;
    overflow: auto;
    display: inline-block;
    width: 1000px;
    height: 206px;
    margin: 10px;
    /* border: 1px solid; */
  }
  /* ================ left ============== */
  .manage_left {
    float: left;
    width: 200px;
  }
  #project_image {
    width: 200px;
    height: 200px;
  }
  /* ================ middle ============== */
  .manage_middle {
    float: left;
    width: 700px;
    height: 200px;
    /* padding: 2px; */
  }
  .manage_project_detail {
    display: inline-block;
    list-style-type: none;
    margin-left: 30px;
    padding: 5px;
    font-size: 20px;
    color: black;
    width: 600px;
  }

  /* ================ right ============== */
  .manage_right {
    float: left;
    width: 78px;
  }
   
   .page {
        float: left;
        min-width: 900px;
        margin: 20px 0 20px 0;
        text-align: center;
    }
    .page ul {
        display: inline-block;
        list-style-type: none;
        list-style: none;
    }
    .page ul li {
        float: left;
        background: #fff;
    }
/*
        font-size: 14px;
        padding: 6px 10px;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    } */
    .page ul li a {
        text-decoration: none;
        color: #000;
    }
    .page_item {
        font-size: 14px;
        padding: 6px 10px;
        background: #fff;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    }
    .page_btn {
        cursor: pointer;
    }
    /* .page ul li:nth-child(1) {
        font-size: 14px;
        padding: 6px 10px;
        background: #fff;
        border: 1px solid #ccc;
        color: #888;
        margin: 0 3px;
        text-decoration: none;
        border-radius: 5px;
    } */
    .page_active {
        background: #333;
        border-color: #333;
        color: #fff;
        cursor: default;
    }
    .page_display {
        display: none;
    }
</style>
