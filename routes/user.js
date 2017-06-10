const express = require('express');
const router = express.Router();
const User = require('../db/model/user.js');

router.post('/',(req,res) => {
	var _user = req.body;
	var username = _user.username;
	var password = _user.password;
	User.findOne({name : username},(err,user) => {
		if(err)
		{
			console.log(err);
		} 
		if(!user)
		{
			console.log("no user");
			res.send({signinFail : true});
		}
		else
		{
			user.comparePassword(password, (err,isMatch) => {
				if(err)
				{
					console.log(err);
				}
				if(isMatch)
				{
					console.log("password is success");

					User.getAllAssetsValue((err,doc) => {
						User.getAllAllocation((err,result) => {
							User.getAllUsersInfo((err,data) => {
								res.send({
									changePage : {
										showSignin : false,
									    showHome : true
									},
									signinFail : false,
									userInfoData : user,
									alluserData : {
										allAssetsValue : doc,
										allAllocation : result,
										allUsersInfo : data
									}
								});
							})
						})
					})
				}
				else
				{
					console.log("password is fail");
					res.send({signinFail : true});
				}
			})
		}
	})
})

router.get('/logout',(req,res) => {
	res.send({
		changePage : {
			showSignin : true,
		    showHome : false
		},
		signinFail : false,
		userInfoData : {},
		alluserData : {}
	});
});

module.exports = router;