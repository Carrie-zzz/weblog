<template>
    <div class="body">
        <div class="container"
             v-if="indexshow==0">
            <p>webblog{{indexshow}}</p>
            <p>欢迎进入登录页面</p>
            <button data-index='1'
                    @click="registered(1)">
                <a class="btn-lg">注册</a>
            </button>
            <button data-index='2'
                    @click="registered(2)">
                <a class="btn-lg">登录</a>
            </button>
        </div>
        <div class="container"
             v-if="indexshow==1">
            <p>会员注册</p>
            <div class="form-group">
                <input type="text"
                       placeholder="名称"
                       v-model="regForm.username">
            </div>
            <div class="form-group">
                <input type="text"
                       placeholder="邮箱"
                       v-model="regForm.email">
            </div>
            <div class="form-group">
                <input type="password"
                       placeholder="密码"
                       v-model="regForm.password">
            </div>
            <button class="regist"
                    @click="submitForm('regForm')">注册</button>
            <button class="regist"
                    data-index='0'
                    @click="registered(0)">返回</button>
        </div>
        <div class="container"
             v-if="indexshow==2">
            <p class="login">欢迎登录</p>
            <div class="form-group">
                <input type="text"
                       placeholder="邮箱">
            </div>
            <div class="form-group">
                <input type="password"
                       placeholder="密码">
            </div>
            <p>忘记密码？</p>
            <button class="logined">登录</button>
            <button class="logined"
                    data-index='0'
                    @click="registered(0)">返回</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      indexshow: 0,
      regForm: {
        username: '',
        email: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    registered: function (val) {
      this.indexshow = val
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
      })
    }
  }
}
</script>
<style scoped lang="scss">
input,
::after,
::before {
  box-sizing: border-box;
}
.body {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #ffdde1, #ee9ca7, #a7bfe8, #6190e8);
  background-size: 500% 500%;
  transition: background 3s ease;
  background-position: 50% 50%;
  .container {
    min-width: 300px;
    max-width: 450px;
    height: 220px;
    padding: 50px 15px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .logined {
      background-color: #a7bfe8;
      margin: 10px 0;
    }
    p.login {
      color: #a7bfe8 !important;
    }
    .regist {
      background-color: #ee9ca7;
      margin-bottom: 10px;
    }
    .form-group {
      margin: 0.5rem 0;
      input {
        display: block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        color: #ee9ca7;
        border-color: rgba(238, 156, 167, 0.25);
      }
      input:focus {
        box-shadow: 0 0 0 0.2rem rgba(238, 156, 167, 0.25);
      }
    }
    p:first-child {
      color: #ee9ca7;
      font-weight: bold;
      font-size: 1.8rem;
    }
    p:nth-child(2) {
      font-size: 1.1rem;
    }
    button {
      color: #fff !important;
      width: 10rem;
      height: 2em;
      transition: all 0.4s;
      border-radius: 20px;
      border: 2px solid transparent;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      vertical-align: middle;
      cursor: pointer;
      .btn-lg {
        color: #fff;
      }
    }
    button:hover {
      background: rgba(238, 156, 167, 0.25) !important;
      font-weight: bold;
    }
    button:nth-child(3) {
      background-color: #ee9ca7;
    }
    button:nth-child(4) {
      background-color: #a7bfe8;
    }
  }
}
</style>
