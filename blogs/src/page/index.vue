<template>
  <div class="home">
    <div class="title">
      <div class="home-a">首页</div>
      <div class="home-a">新手入门</div>
      <div class="login">
        <span>登陆</span>
        <span>注册</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped lang="scss">
  $color: #fff;
  .title{
    width: 100%;
    height: 80px;
    background-color: #444;
    color: $color;
    font-size: 20px;
    line-height: 80px;
    .home-a{
      float: left;
      margin-left: 50px;
    }
    .login{
      float: right;
      span{
        float: left;
        margin-right: 50px;
      }

    }
  }
</style>
