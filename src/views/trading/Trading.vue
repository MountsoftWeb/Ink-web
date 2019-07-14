<template>
    <a-layout>
        <b-left>
            <!-- 左导航条信息 -->
           <div class="left">
                <div>
                    <span id="menuSpan">数码产品</span>
                    <a href="#">数码产品</a>
                    <a href="#">数码产品</a>
                    <a href="#">数码产品</a>
                </div>
                <div class="collapsed">
                    <span id="menuSpan">生活用品</span>
                    <a href="#">生活用品</a>
                    <a href="#">生活用品</a>
                    <a href="#">生活用品</a>
                </div>
                <div class="collapsed">
                    <span id="menuSpan">服装衣物</span>
                    <a href="#">服装衣物</a>
                    <a href="#">服装衣物</a>
                    <a href="#">服装衣物</a>
                    <a href="#">服装衣物</a>
                </div>
                <div class="collapsed">
                    <span id="menuSpan">教学书籍</span>
                    <a href="#">教学书籍</a>
                    <a href="#">教学书籍</a>
                    <a href="#">教学书籍</a>
                    <a href="#">教学书籍</a>
                </div>
            </div>
        </b-left>
    </a-layout>
</template>

<script>
// window.onload = function(){
//         var spans = document.getElementById('#menuSpan');
//         for(var i=0; i<spans.length ; i++){
//             spans.onmouseenter = function(){
//             this.style.backgroundColor = 'black';
//         }
//         }
        
//     }
export default {
    
}
</script>


<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .layout .left {
        /* width: 10%; */
    }
    .left{
        position: fixed;
        /* width: 10%; */
        top: 60px;
        height: calc(100% - 60px);
        border-right: 1px solid #dfe4ed;
        overflow: auto;
        font-size: 14px;
        background-color: rgb(74, 74, 74)
    }
    .left .menuSpan{
        display: block;
        width: 100%;
        height: 30px;
        margin: 10px 0;
        color: white;
        text-align: center;
        font:20px 'STCaiyun'
    }
    .left a{
        margin: 10px 0;
        display: block;
        text-decoration: none;
        color: rgb(238, 211, 211);
    }

</style>
