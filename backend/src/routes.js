const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');    
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig); 

// rotas para o posts
routes.get('/posts', PostController.index);
routes.post('/posts',upload.single('image'), PostController.store);
// rotas para likes
routes.post('/posts/:id/like', LikeController.store);


//POST http://localhost:3333/post

module.exports = routes;