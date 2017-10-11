const express = require('express');

var Router = express.Router();// main

var todoItems = [
  {id:0, desc:"test0"},
  {id:1, desc:"test1"},
  {id:2, desc:"test2"}
];//fake data base

Router.get('/', function(req,res) {
  res.render('index',{
    title: 'My app',
    items: todoItems
  });
});

Router.post('/add',function(req,res){
  var newItem = req.body.newItem;
  // console.log('New item');
  todoItems.push({
    id: todoItems.length +1,
    desc: newItem
  });
  res.redirect('/');
})

module.exports = Router;
