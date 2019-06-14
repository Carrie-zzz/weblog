<template>
  <div id="app">
    <img src="./assets/logo.png"> 我的页面
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.$http.get('/api/user/get').then(data => {
        console.log(data)
      })
      this.$http.post('/api/user/post').then(data => {
        console.log(data)
      })
    }
  }
</script>
<style lang='scss'>
  $color:red;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $color;
    margin-top: 60px;
  }
</style>