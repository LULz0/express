const express = require('express');
var Router = express.Router();

Router.get('/contact',function(req,res) {
  res.render('contact',{
    title: 'My App'
  });
});

module.exports = Router;
