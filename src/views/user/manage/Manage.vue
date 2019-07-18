<template>
<div>
  <div v-for="(project, index) in userProjects" :key="index" class="manage_container">
    <div class="manage_left">
      <img id="project_image" :src="project.picture">
    </div>
    <div class="manage_middle">
      <ul class="manage_project_detail">
        <li>标题</li>
        <li>绘画方式</li>
        <li>标签</li>
        <li>上传日期</li>
        <li>收藏数</li>
        <li>点赞数</li>
        <li>地理位置</li>
      </ul>
    </div>

    <div class="manage_right">
      <p>right</p>
    </div>
  </div>
</div>
</template>

<script>

import {mapState} from "vuex"
export default {
  methods:{
   
  },
  mounted() {
    this.$store.dispatch('getProject')
  },
  computed: {
    ...mapState(['userProjects'])
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
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
    margin: 0;
    padding: 3px;
    font-size: 16px;
    color: black;
  }
  /* ================ right ============== */
  .manage_right {
    float: left;
    width: 78px;
  }
   
</style>
