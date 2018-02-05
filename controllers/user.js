const user = require('../models/user')

const md5 = require('blueimp-md5')

exports.showSignin = (request,response) => {
	response.render('signin.html')
}

exports.signin = (request,response)=>{
	
	const body = request.body

	user.findByEmail(body.email,function(err,result){
		if(err){
			return response.status(500).json({
				error:'err.message'
			})
		}

		// 如果邮箱不存在
		if(!result){
			return response.status(200).response.json({
				code : 1,
				message : 'email not exists'
			})
		}
		
		if(md5(body.password) !== result.password){
			return response.status(200).json({
				code : 2,
				message : 'password invalid'
			})
		}

		// 登录通过后将产寻到的用户信息存储到session中
		request.session.user = result

		response.status(200).json({
			code : 0,
			message : 'success'
		})

	})
}

exports.signup = (request,response)=>{
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


		user.findByNickname(body.nickname,(err,result)=>{
			if(err){
				return response.status(500).json({
					error:err.message
				})
			}

			if(result){
				return response.status(200).json({
					code:2,
					message:'nickname exists'
				})
			}

			body.password = md5(body.password)

			user.save(body,(err,result)=>{
				if(err){
					return response.status(500).json({
						error:err.message
					})
				}
				
				const userId = result.insertId
				// 注册成功后将数据存到session中
				request.session.user = {
					...body,
					userId : userId
				}

				response.status(200).json({
					code:0,
					message:'success'
				})
			})
		})

	})
	
}

exports.showSignup = (request,response)=>{
	response.render('signup.html')
}

exports.signout = (request,response)=>{
	delete request.session.user
	response.redirect('/showSignin')
}
