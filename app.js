const express = require('express')
const app = express()
const router = require('./router.js')


// 挂在路由容器到app是路由生效
app.use(router)

app.listen(3000, () => console.log("App listening on port 3000"))