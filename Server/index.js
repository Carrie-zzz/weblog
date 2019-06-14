const express = require('express');
// const models=require('./db');
const app = express();
const model = require("./models/index");
app.get('/user/get',(req,res)=>{
    res.send("get访问成功");
});
app.post('/user/post',(req,res)=>{
    res.send("post访问成功");
});
app.post('/user/add',(req,res)=>{
	let user = new model.User({
		name:"zhuzhenzhen6",
		password:"123456"
	});
	user.save((err, product)=>{
		if(err) return res.send("*********add failed*********");
		res.send(`添加成功 : ${product.name}`);
	});

});
app.listen(5000, () => console.log("*************服务器启动成功*************"));