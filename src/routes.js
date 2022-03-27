const express = require('express');
const routes = express.Router();

const persistUser = require('./dao/CreateUser');
const login = require('./dao/LoginUser');
const update = require('./dao/UpdateUser');
const inactive = require('./dao/InactiveUser');
const createPost = require('./dao/CreatePost');
const setLikePost = require('./dao/LikePost');
const deletePost = require('./dao/DeletePost');
const comment = require('./dao/Comment.js');
const {createComment, deleteComment} = require('./dao/Comment')


// const path = require('path');
// const multer = require('multer');

// routes.use(express.static(path.join(__dirname, './public')));

// var Storage = multer.diskStorage({
//     destination : './public/uploads/',
//     filename : (req,file,cb) => {
//         cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname))
//     }
// })

// var Upload = multer({
//     storage : Storage
// }).single('file')


// User API's

routes.post('/createUser', (_,response)=>{
    persistUser(_,response)
    .catch(err => {})
})

routes.post('/loginUser', (_,response)=>{
    login(_,response)
    .catch(err => {})
})

routes.post('/updateUser',(_,response)=>{
    update(_,response)
    .catch(err => {})
})

routes.get('/inactiveUser',(_,response)=>{
    inactive(_,response)
    .catch(err => {})
})

// Post API's 

routes.post('/createPost',(_,response)=>{
    createPost(_,response)
    .catch(err => {})
})

routes.post('/likePost',(_,response)=>{
    setLikePost(_,response)
})

// routes.get('sharePost',(_,response)=>{
//     // single 
//     // multiple 
//     response.end('create user api')
// })

routes.post('/deletePost',(_,response)=>{
    deletePost(_,response)
})

routes.post('/createComment',(_,response)=>{
    createComment(_,response)
    .catch(error=>{})
})

routes.post('/deleteComment',(_,response)=>{
    deleteComment(_,response)
})

// Friend API's 

routes.get('addFriend',(_,response)=>{
    response.end('create user api')
})

routes.get('removeFriend',(_,response)=>{
    response.end('create user api')
})

// Feed API's 

routes.get('createFeed',(_,response)=>{
    response.end('create user api')
})

module.exports = routes;