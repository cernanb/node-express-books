var express = require('express');

var bookRouter = express.Router();

var router = function(nav) {

  var books = [
    {
      title: 'Title 1',
      genre: 'Genre 1',
      author: 'Author 1',
      read: false
    },
    {
      title: 'Title 2',
      genre: 'Genre 2',
      author: 'Author 2',
      read: true
    },
    {
      title: 'Title 3',
      genre: 'Genre 3',
      author: 'Author 3',
      read: false
    },
    {
      title: 'Title 4',
      genre: 'Genre 4',
      author: 'Author 4',
      read: true
    },
  ];

  bookRouter.route('/')
    .get(function(req, res) {
      res.render('bookListView', {
        title: 'Books',
        nav: nav,
        books: books
      });
    });

  bookRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      res.render('bookView', {
        title: 'Books',
        nav: nav,
        book: books[id]
      });
    });

  return bookRouter;

};

module.exports = router;