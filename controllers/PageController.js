const Post = require('../models/Post');

exports.indexPage = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
};

exports.aboutPage = (req, res) => {
  res.render('about');
};

exports.addPostPage = (req, res) => {
  res.render('add_post');
};

exports.notFoundPage = (req, res) => {
  res.render('404');
};
