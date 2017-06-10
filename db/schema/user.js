const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const UserSchema = new mongoose.Schema({
	name : {
		unique : true,
		type : String
	},
	password : String,
	accountId : String,
	email : String,
	avatar : String,
	assetsvalue : [],
	positions : [],
	allocation : [],
	meta : {
		craetedateAt : {
			type : Date,
			default : Date.now()
		},
		updateAt : {
			type : Date,
			default : Date.now()
		}
	}
});

UserSchema.pre('save',function(next){
	var user = this;					 
	if(this.isNew)
	{
		this.meta.craetedateAt = this.meta.updateAt = Date.now();
	}
	else
	{
		this.meta.updateAt = Date.now();
	}

	bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt) => {
		if(err)
		{
			return next(err);
		}
		bcrypt.hash(user.password,salt,(err,hash) => {
			if(err)
			{
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

UserSchema.statics = {
	getAllAllocation(cb){
		this.aggregate([
		    { $unwind: "$allocation" },
		    { $group: { _id: "$allocation.name", value: { $sum : "$allocation.value" } } },
		    { $sort: { value: -1}}
		]).exec(cb)
	},
	getAllAssetsValue(cb){
		this.aggregate([
		    { $unwind: "$assetsvalue" },
		    { $group: { _id: "$assetsvalue.date", value: { $sum : "$assetsvalue.value" } } },
		    { $sort: { _id: 1}}
		]).exec(cb)
	},
	getAllUsersInfo(cb){
		this.find({},{name: 1,accountId: 1,email: 1,assetsvalue: 1})
			.exec(cb)
	}
}

UserSchema.methods = {
	comparePassword(_password,cb){
		bcrypt.compare(_password,this.password, (err,isMatch) => {
			if(err)
			{
				return cb(err);
			}
			return cb(null,isMatch);
		});
	}
}

module.exports = UserSchema;