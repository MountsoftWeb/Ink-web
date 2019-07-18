<template>
<div>
  <div class="upload">
    <p>点击上传，或将文件拖拽到此处</p>
    <input id="upProject" type="file" ref="upload_file" >
     <input type="button" v-on:click='change_input' value="上传">
  </div>
    <!-- <input type="text" v-model.trim="projectData.name" name="name" placeholder="name">
    <input type="text" v-model.trim="projectData.label" name="label" placeholder="label">
                         -->
    <!-- <input type="radio" > -->
   
</div>


</template>

<script>
    /** 
    * 从 file 域获取 本地图片 url 
    */ 
    function getFileUrl(obj) { 
      let url; 
      url = window.URL.createObjectURL(obj.files.item(0)); 
      alert(url)
      return url; 
    }

export default {
  data (){
    return {
        name: '测试',
        patitingway: 1,
    }
  },
  methods:{
    change_input: function() {
        let self = this;
        if (self.$refs.upload_file.files.length !== 0) {
            var formData = new FormData()
            formData.append('name', self.name)
            formData.append('label', self.patitingway)
            formData.append('image_data', self.$refs.upload_file.files[0])

            //单个文件进行上传
            this.axios({      
                method: "post",
                url: "/hello/test/user/uploadFile",
                data: formData

                // callback: success
            }).then(response => {
                if(response.data.code != 404){
                    this.message = '更新成功'
                    // this.reload()
                    this.$router.go(0)
                }else{
                    this.message = '更新失败'
                }
            })
        }
    }
  }

}
</script>

<style scoped>
   .ds {
      
      overflow: auto;
      display: inline-block;
   }
   .upload {
      position: relative;
      padding: 30px;
      border: 1px dashed #e2e2e2;
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      color: #999;
   }
   .upProject {
     display: none!important;
   }
</style>
