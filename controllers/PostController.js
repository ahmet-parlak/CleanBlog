const Post = require('../models/Post');

exports.show = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.render('post', { post }))
    .catch(() => res.render('404'));
};

exports.create = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.edit = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.render('edit', { post }))
    .catch(() => res.render('404'));
};

exports.update = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect(`/post/${req.params.id}`))
    .catch(() => res.render('404'));
};

exports.delete = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.redirect(`/`))
    .catch(() => res.render('404'));
};
