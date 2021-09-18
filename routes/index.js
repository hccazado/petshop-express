var express = require('express');
var router = express.Router();
var servicosController = require("../controllers/servicosController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sobre', function(req, res){
  res.render('sobre');
})

router.get('/servicos', servicosController.index)

module.exports = router;
