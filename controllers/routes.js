var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });
  
  router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
      res.render("index", { burger_data: burgerData });
    });
  });

/*router.get('/', function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
    res.render('index',{burger_data});
        
    })
});

/*router.put('/burgers/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});*/

router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      // Send back response and let page reload from .then in Ajax
      res.sendStatus(200);
    });
  });

/*router.post('/burgers/create',function(req,res){
    burger.create(req.body.burger_name, function(result){
       if(err)throw err;
       cb(result); 
    })
});*/

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });

module.exports = router;