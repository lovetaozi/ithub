const express = require('express')
// 创建路由容器
const router = express.Router()

const indexController = require('./controllers/index.js')
const userController = require('./controllers/user.js')
const topicController = require('./controllers/topic.js')
const commentController = require('./controllers/comment.js')
// 配置路由表


// 首页部分路由
router
	.get('/',indexController.showIndex)


// 用户部分路由
router
	.get('/signin', userController.showSignin)	//渲染请求登录页面

	.post('/signin',userController.signin)		//处理登录请求

	.get('/signup',userController.showSignup)	//渲染注册页面

	.post('/signup', userController.signup) 	//处理用户注册

	.get('/signout', userController.signout)	//退出登录



// 话题相关路由
router
	.get('/topic/create', topicController.showCreate)	//渲染发布话题页面

	.post('/topic/create',topicController.create)		//处理话题发布

	.get('/topic/:topicId',topicController.showDetail)  //渲染话题详情页

	.get('/topic/:topicID/edit',topicController.showEdit)	//渲染话题编辑页面

	.post('/topic/:topicID/edit',topicController.edit)		//处理编辑话题

	.get('/topic/:topicID/delete',topicController.delete)		//删除话题



module.exports = router