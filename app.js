const express = require('express');
const ejs = require('ejs');
const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/add-post', (req, res) => {
  res.render('add_post');
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
