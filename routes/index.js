var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    CueData: 'list of cues',
    InfoData: 'info about current cue'
  });
});

module.exports = router;
