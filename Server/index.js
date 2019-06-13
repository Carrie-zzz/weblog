const express = require('express');
const models=require('./db');
const app = express();
app.get('/user/get',(req,res)=>{
    res.send("get访问成功");
});
app.post('/user/post',(req,res)=>{
    res.send("post访问成功");
})
app.listen(5000, () => console.log("*************服务器启动成功*************"));