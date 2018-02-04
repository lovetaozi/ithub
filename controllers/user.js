const user = require('../models/user.js')
const md5 = require('blueimp-md5')

exports.showSignin = (request,response) => {
	response.render('signin.html')
}

exports.signin = (request,response)=>{
	response.end('signin')
}

exports.showSignup = (request,response)=>{
	const body = request.body
	user.findByEmail(body.email,(err,result)=>{
		if(err){
			return response.status(500).json({
				error : err.message
			})
		}

		if(result){
			return response.status(200).json({
				code:1,
				message:'email exists'
			})
		}
	})


	user.findByNickname(body.nickname,(err,result)=>{
		if(err){
			return response.status(500).json({
				error:err.message
			})
		}

		if(result){
			return response.status(200).json({
				code:2
				message:'nickname exists'
			})
		}
	})

	body.password = md5(body.password)

	user.save(body,(err,result)=>{
		if(err){
			return response.status(500).json({
				error:err.message
			})
		}

		response.status(200).json({
			code:0,
			message:'success'
		})
	})
}

exports.signup = (request,response)=>{
	response.end('signup')
}

exports.signout = (request,response)=>{
	response.end('signout')
}
