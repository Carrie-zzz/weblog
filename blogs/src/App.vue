<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  // mounted () {
  //   this.$http.get('/api/user/get').then(data => {
  //     console.log(data)
  //   })
  //   this.$http.post('/api/user/post').then(data => {
  //     console.log(data)
  //   })
  // }
}
</script>
<style lang='scss'>
  $color:yellow;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
