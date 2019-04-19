<template>
  <div class="header clearfix">
    <div class="header-left">
      <a href="#">
        <!-- <img src="../../../../" alt> -->
      </a>
    </div>

    <div class="header-middle">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/trading">二手市场</router-link>
        </li>
        <li>
          <a href="#">开发</a>
        </li>
        <li>
          <a href="#">校园社团</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
      </ul>
    </div>

    <div class="header-right">
      <div class="box">
        <input type="text" id="search" placeholder="宝贝、商家、店铺">
        <button type="button">搜索</button>
      </div>
      <ul>
        <li>
          <router-link to="/user">自己</router-link>
          <a id="ios" href="#">登录</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

window.onload = function() {
  var lis = document.querySelectorAll(".header > .header-middle ul li");
  var as = document.querySelectorAll(".header > .header-middle ul li a");
  var input = document.querySelector("#search");
  var index = 0;
  for (var i = 0; i < as.length; i++) {
    as[i].num = i;
    as[i].onclick = function() {
      index = this.num;
      for (var i = 0; i < as.length; i++) {
        as[i].parentNode.style.backgroundColor = " rgb(49, 47, 47)";
        as[i].style.fontWeight = "bold";
      }
      as[index].parentNode.style.backgroundColor = "black";
      as[index].style.fontWeight = "inherit";
    };
  }
  input.onclick = function(){
    input.style.width = 160 +'px';
  }
  document.onmousedown = function(){
    input.style.width = 120 +'px';
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 16000px;
}
.header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgb(49, 47, 47);
  /* border-bottom: 1px solid #dfe4ed; */
}
.header > .header-left {
  float: left;
  width: 320px;
}
.header > .header-left > a {
  display: block;
  width: 160px;
  height: 26px;
  margin: 17px 140px 17px 20px;
}
.header > .header-left > a > img {
  width: 100%;
  height: 100%;
}

.header > .header-middle ul li {
  height: 60px;
}
.header > .header-middle ul li,
.header > .header-right ul li {
  list-style: none;
  float: left;
  padding: 0 15px;
}
.header > .header-middle ul li:nth-child(odd) {
  width: 32px;
}
.header > .header-middle ul li:nth-child(even) {
  width: 60px;
}
.header > .header-middle ul li a,
.header > .header-right ul li a {
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding-left: 2px;
}
.header > .header-middle ul li a:hover,
.header > .header-right ul li a:hover {
  color: white;
  font-weight: inherit;
}
.header > .header-middle ul li a:active,
.header > .header-right ul li a:active {
  color: white;
  font-weight: inherit;
}
.header > .header-right {
  width: 30%;
  height: 60px;
  float: right;
}
.header > .header-right ul {
  float: right;
}
.header > .header-right .box {
  display: inline-block;
  margin: 15px 0px 15px 50px;
}
.header > .header-right .box #search {
  float: left;
  width: 120px;
  height: 30px;
  border: none;
  outline: none;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  padding-left: 5px;
  transition: 1s;
}
.header > .header-right .box button {
  display: inline-block;
  width: 40px;
  height: 30px;
  background-color: black;
  font: 1em "微软雅黑";
  color: white;
  border: none;
  cursor: pointer;
}
.clearfix {
  clear: both;
  overflow: hidden;
}
</style>
