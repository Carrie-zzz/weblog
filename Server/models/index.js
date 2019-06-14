const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Test",{
	poolSize: 20,
	useCreateIndex: true,
	useNewUrlParser: true
},function (err) {
	if(err) {
		console.warn("**********【数据库连接失败】**********");
		process.exit(1);
	}
	console.log("**********【数据库连接成功】**********");
})

require("./user")

exports.User = mongoose.model("user");