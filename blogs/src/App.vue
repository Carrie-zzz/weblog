<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App',
  mounted () {
    this.$http.get('/api/user/get').then(data => {
      console.log(data)
    })
    this.$http.post('/api/user/post').then(data => {
      console.log(data)
    })
  }
}
</script>
<style>
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
