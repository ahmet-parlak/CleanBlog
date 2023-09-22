const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PageController = require('./controllers/PageController');
const PostController = require('./controllers/PostController');

//App
const app = express();

//DB CONNECTION
mongoose
  .connect('mongodb+srv://ahmetparlak:b5IFSR2Xx8J1y2Bj@cluster0.jtacpdq.mongodb.net/clean-blog-db?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connection successful!'));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);

//ROUTES
app.get('/', PageController.indexPage);
app.get('/about', PageController.aboutPage);
app.get('/add', PageController.addPostPage);

app.post('/post', PostController.create);
app.get('/post/:id', PostController.show);
app.get('/post/:id/edit', PostController.edit);
app.put('/post/:id', PostController.update);
app.delete('/post/:id', PostController.delete);

app.get('*', PageController.notFoundPage);

const port = process.env.PORT ?? 5000;
app.listen(port, () => {
  console.log(`The server has started running on port ${port}..`);
});
