

const {query} = require('../utilities/db-helper.js')


exports.findByEmail = (email,callback)=>{
	const sql = 'SELECT * FROM `users` WHERE `email` = ?'
	query(sql, [email],(err,results)=>{
		if(err){
			return callback(err)
		}

		callback(null,results[0])

	})
}

exports.findByNickname = (nickName,callback)=>{
	const sql = 'SELECT * FROM `users` WHERE `nickname`=?'
	query(sql,[nickName],(err,results)=>{
		if(err){
				return callback(err)
		}

		callback(null,results[0])
	})
}

exports.save = (user,callback) => {
	user.createdAt = null
	const sql = 'INSERT INTO `users` SET ?'
	query(sql,user,(err,result)=>{
		if(err){
			return callback(err)
		}

		callback(null,result)
	})
}