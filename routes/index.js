var express = require('express');
var router = express.Router();


router.get('/test', function(req,res,next){
  res.json({name: 'bob'});
});


//Wildcard route that serves your index.html in public no matter what
router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
