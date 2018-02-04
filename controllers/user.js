exports.showSignin = (request,response) => {
	response.render('signin.html')
}

exports.signin = (request,response)=>{
	response.end('signin')
}

exports.showSignup = (request,response)=>{
	response.render('signup.html')
}

exports.signup = (request,response)=>{
	response.end('signup')
}

exports.signout = (request,response)=>{
	response.end('signout')
}
