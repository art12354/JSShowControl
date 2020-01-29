var express = require('express');
var router = express.Router();

/* GET home page. */
router.param('tab', function (req, res, next, id) {
  next();
});
router.get('/:tab?', function(req, res, next) {
  var tab = req.params.tab;
  if (tab === undefined) {
    tab = 'basics';
  }
  res.render('index', {
    title: 'Express',
    cueData: 'list of cues',
    infoData: 'info about current cue',
    infoTab: tab,
    basicsData: 'Data on Basic options of cue',
    timeLoopsData: 'Data on Time and Loops options of cue',
    deviceLevelsData: 'Data on Device and Levels options of cue',
    trimData: 'Data on Trim options of cue',
    audioEffectsData: 'Data on Audio Effects options of cue'
  });
});

module.exports = router;
