<template>
    <div class="body">
        <div class="container">
            <p>webblog</p>
            <p>欢迎进入登录页面</p>
            <button><a class="btn-lg">注册</a></button>
            <button><a class="btn-lg">登录</a></button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style scoped lang="scss">
 .body{
     width:100vw;
     height:100vh;
     background:linear-gradient(to right,#ffdde1, #ee9ca7,#a7bfe8,#6190e8);
     background-size: 500% 500%;
     transition: background 3s ease;
     background-position: 50% 50%;
     .container{
         min-width:300px;
         max-width: 450px;
         height:180px;
        padding:50px 15px;
        background: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position:absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%,-50%);
        p:first-child{
         color: #ee9ca7;
         font-weight: bold;
         font-size: 1.8rem;
        }
        p:nth-child(2){
            font-size: 1.1rem;
        }
        button{
            color: #fff !important;
            width: 10rem;
            height:2em;
            transition: all .4s;
            border-radius: 20px;
            border: 2px solid transparent;
            padding: .5rem 1rem;
            font-size: 1.25rem;
            vertical-align: center;
        }
        button:nth-child(3){
            background-color: #ee9ca7;
        }
        button:nth-child(4){
            background-color: #a7bfe8;
        }

     }
     
 }
</style>

