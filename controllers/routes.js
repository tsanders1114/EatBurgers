var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('./views/layouts/index');
});

module.exports = router;