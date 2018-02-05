const express = require('express')

const bodyParser = require('body-parser')
const router = require('./router.js')
const session = require('express-session')
const app = express()




// 开放静态资源
app.use('/node_modules',express.static('./node_modules/'))
app.use('/public',express.static('./public/'))

app.use(bodyParser.urlencoded({extended:true}))

app.engine('html',require('express-art-template'))

app.use(session({
	secret : 'taozi',
	resave : false,
	saveUninitialized : true
}))
// 挂在路由容器到app是路由生效
app.use(router)
app.listen(3000, () => console.log("App listening on port 3000"))