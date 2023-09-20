const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  detail: String,
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const Photo = mongoose.model('Post', PostSchema);

module.exports = Photo;
