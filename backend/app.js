const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'qwer12345',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'qwer54321',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    },
  ];
  res.status(200).json({
    message: 'Post fletched succesfully!',
    posts: posts
  });
  next();
});



module.exports = app;

