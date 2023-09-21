const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');

//App
const app = express();

//DB CONNECTION
mongoose
  .connect('mongodb://localhost:27017/cleanblog-test-db')
  .then(() => console.log('MongoDB connection successful!'));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
});
app.get('/post/:id', (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.render('post', { post }))
    .catch(() => res.render('404'));
});
app.get('/add-post', (req, res) => {
  res.render('add_post');
});
app.post('/add-post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('*', (req, res) => {
  res.render('404');
});

const port = 3000;
app.listen(port, () => {
  console.log(`The server has started running on port ${port}..`);
});
