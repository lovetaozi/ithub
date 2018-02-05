
exports.showIndex = (request,response)=>{
	response.render('index.html',{user:request.session.user})
}