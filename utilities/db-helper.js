const mysql = require('mysql')
const {dbConfig} = require('../config')
const pool = mysql.createPool(dbConfig)

exports.query = (...args) => {
	const callback = args.pop()

	pool.getConnection((err,connection) => {
		if(err){
			return callback(err)
		}

		connection.query(...args,(err,result)=>{

			// 把链接释放回连接池
			connection.release()

			if(err){

				return callback(err)
			}

			callback(null,result)
		})
	})
}