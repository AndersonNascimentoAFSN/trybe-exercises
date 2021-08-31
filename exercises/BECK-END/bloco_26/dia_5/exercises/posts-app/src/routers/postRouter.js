const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, title: 'Game Of Thrones' }
];

router.get('/', (_req, res) => {
  res.status(200).json({ posts });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const filteredPost = posts.find((post) => post.id === parseInt(id));

  if(!filteredPost) {
    return next({ statusCode: 404, message: 'post not found' });
  }
  // if(!filteredPost) return res.status(404).json({ message: "post not found" });
  res.status(200).json(filteredPost);
});

module.exports = router;
