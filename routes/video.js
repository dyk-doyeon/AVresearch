var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/video', function (req, res, next) {
  res.render('video', { title: 'Video Page' });
});

module.exports = router;
