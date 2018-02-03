const express = require('express')
// 创建路由容器
const router = express.Router()

// 配置路由表

// 首页路由
router.get('/',(request,response)=>{
	response.end('index')
})

// 请求登录页
router.get('/signin', (request,response) => {
	response.end('signin')
})

// 处理登录请求
router.post('/signin',(request,response)=>{
	response.end('check signin')
})

// 请求注册页面
router.get('/signup',(request,response)=>{
	response.end('signup')
})

// 处理注册请求
router.post('/signup', (request,response)=>{
	response.end('check signup')
})

// 处理退出请求
router.get('/signout', (request,response)=>{
	response.end('signout')
})

// 渲染发布话题页面
router.get('/topic/create', (request,response)=>{
	response.end('topic create')
})

// 处理发布请求
router.post('/topic/create',(request,response)=>{
	response.end('topic create check')
})

// 渲染话题详情
router.get('/topic/:topicID',(request,response)=>{
	response.end('topic topicID')
})

// 渲染编辑话题页面
router.get('/topic/:topicID/edit',(request,response)=>{
	response.end('topic edit show')
})

// 处理编辑话题请求
router.post('/topic/:topicID/edit',(request,response)=>{
	response.end('topic edit post')
})

// 处理删除话题
router.get('/topic/:topicID/delete',(request,response)=>{
	response.end('topic delete')
})

module.exports = router