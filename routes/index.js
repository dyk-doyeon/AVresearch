var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'A/V Research' });
});

router.get('/audio', function (req, res, next) {
  res.render('audio', { title: 'Audio Page' });
});

router.get('/video', function (req, res, next) {
  res.render('video', { title: 'Video Page' });
});


module.exports = router;
