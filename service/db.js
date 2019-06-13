//引入mongoose依赖
const mongoose = require("mongoose");
/**
 * 连接mongodb数据库
 *  参数1：mongodb数据库启动的地址
 * 参数2：回调函数，用于判断是否连接成功
 */
mongoose.connect("mongodb://localhost/Test", err => {
    if (err) console.log("**********【数据库连接失败】**********");
    else console.log("**********【数据库连接成功】**********");
});
//要导出的模型Model
const Models = {};
module.exports = Models;