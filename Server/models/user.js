const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
	name:String,
	password:String
},{
	collection:"user"
})

mongoose.model("user",UserSchema)