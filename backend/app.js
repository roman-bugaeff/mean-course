const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'qwer12345',
      title: 'First server-side post!',
      content: 'This is coming from the sever'
    },
    {
      id: 'qwer54321',
      title: 'Second server-side post!',
      content: 'This is coming from the sever'
    },
  ]
  res.status(200).json({
    message:'Post fetched succesfully!',
    posts: posts
  });
});

module.exports = app;

