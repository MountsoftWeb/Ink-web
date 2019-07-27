<template>
<div class="upload_content">
  <div class="upload_header" @click="upload">
    <p>点击上传，或将文件拖拽到此处</p>
    <input id="upProject" type="file" ref="upload_file" >
     
  </div>
  
  <div class="upload_main">
    <p >
      <span>标题：</span>
        <input class="name_text" type="text" name="name" v-model.trim="name">
    </p>
    <p>
      <span class="describe_span">描述：</span>
      <textarea name="describe" id="describe" class="name_text" v-model.trim="state" placeholder="" style="width:450px; height:100px;padding: 10px; "></textarea>
    </p>
    <p >
      <span>绘画方式：</span>
              <span>手绘</span>&nbsp;<input type="radio" value="1" name="paintingwayId" v-model.trim="paintingwayId">
              <span>板绘</span>&nbsp;<input type="radio" value="2" name="paintingwayId" v-model.trim="paintingwayId">
              <span>墙绘</span>&nbsp;<input type="radio" value="3" name="paintingwayId" v-model.trim="paintingwayId">
    </p>
      <span>标签：</span>
        <input type="text" name="label" v-model.trim="label">
      <p>
      <input class="upload_btn" type="button" v-on:click='change_input' value="上传">
      </p>
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
        name: '',
        paintingwayId: 1,
        label: '',
        state: ''
    }
  },
  methods:{
    change_input: function() {
        let self = this;
        if (self.$refs.upload_file.files.length !== 0) {
            var formData = new FormData()
            formData.append('name', self.name)
            formData.append('label', self.label)
            formData.append('state', self.state)
            formData.append('paintingwayId', self.paintingwayId)
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
                  alert("上传失败")
                    this.message = '更新失败'

                }
            })
        }
    },
    upload: function() {
      document.getElementById('upProject').click()
    }
  }

}
</script>

<style scoped>
  .ds {
    overflow: auto;
    display: inline-block;
  }
  .upload_content {
    min-height: 600px;
  }
  .upload_header {
    position: relative;
    padding: 30px;
    border: 1px dashed #e2e2e2;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    color: #999;
  }
  #upProject {
    display: none!important;
  }
  .upload_main {
    margin: 0 80px 0 80px;
    padding: 30px 0 20px 0;
    
  }
  .upload_main span {
    font-size: 20px;
    color: black;
    font-weight: bolder;
  }
  input, textarea {
    font-size: 14px;
    resize: none;
  }
  .name_text {
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    /* border-radius: .25rem; */
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .describe_span {
    padding-top: 20px;
    display: block;

  }
  .upload_btn {
    width: 300px;
    height: 50px;
  }
</style>
