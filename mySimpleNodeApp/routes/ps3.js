var express = require('express');
var router = express.Router();

/* GET method for Home ps3 route. */
router.get('/', function(req, res, next) {
  res.render('ps3', { title: "PS3 Home ", string: "Go to routes /b or /c or /d"});
});

/* GET method. */
router.get('/b', function(req, res, next) {
  res.render('ps3', { title: "Part b: ", string: "Hey now"});
});

/* POST method. */
router.post('/c', function(req , res, next) {
  // res.send({string: "Hey man", length: 7});
  res.send(req.body)
});

router.get('/c', function(req, res, next) {
  const data = req.body;
  console.log(req.body);
  res.render('ps3', { title: "Part c: ", string: data.string});
});

/* GET method with URl param. */
router.get('/d/:name', function(req, res, next) {
  res.render('ps3', { title: "Part b: ", string: req.params.name});
});
router.get('/d', function(req, res, next) {
  res.render('ps3', { title: "Part b: ", string: ''});
});

module.exports = router;
