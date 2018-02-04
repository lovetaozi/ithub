const express = require('express')
const app = express()
const router = require('./router.js')


// 挂在路由容器到app是路由生效
app.use(router)

// 开放静态资源
app.use('/node_modules',express.static('./node_modules/'))
app.use('/public',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.listen(3000, () => console.log("App listening on port 3000"))