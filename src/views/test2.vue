<template>
    <div class="">

    <h4>原始图：</h4>
        <div class="ads" >
            <img id="picture" title="点击修改" :src="imgPath" @click="update"/>
            <input id="updateFile" type="file" ref="new_image" @change="updatePicture">
            <span>点击修改</span>
            <span>{{message}}</span>
        </div>
    </div>
    
</template>

<script>
  export default {
    // name: 'HelloWorld',
    // message: '头像',
    data () {
        return{
            message: '头像',
            imgPath: ''
        }
    },
    methods: {
        // 更新头像
        updatePicture: function() {
           let self = this;
            if (self.$refs.new_image.files.length !== 0) {
                var formData = new FormData()
                formData.append('image_data', self.$refs.new_image.files[0])
                //单个文件进行上传
                this.axios({      
                    method: "post",
                    url: "/hello/test/updatePicture",
                    data: formData,
                    // callback: success
                }).then(response => {
                    console.log(response);
                    if(response.data.code == 25){
                        this.message = '更行成功'
                        // this.reload()
                        this.$router.go(0)
                    }else{
                        this.message = '更新失败'
                    }
                })
            }
        },
        // 点击 img 触发 input 
        update: function(){
            document.getElementById('updateFile').click()
        },
    },
    // 页面加载执行
    mounted() {
        this.axios({
            method: "get",
            url: "/hello/test/getPicture"
        }).then(response => {
            if(response.data.code == 200){
                const avator = response.data.message
                // alert(avator)
                this.imgPath = avator
            }else{

            }
        })
    }
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
    #saveImage{
        width: 100px;
        height: 100px;
        cursor: pointer;
    }

    #picture {
        cursor: pointer;

        height: 90px;
        width: 90px;
        border-radius: 50px;
        
          
        
    }
    /* #picture:hover picture::after{
        content: "提示自己";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    } */


    #updateFile {
        display: none;
        /* opacity:0; */
    }
</style>
