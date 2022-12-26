var express = require('express');
var router = express.Router();
var price
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Addcard webpage for leeyetcode
  ' });
});
router.post("/",function(req,res){
  console.log(req.body);

}

module.exports = router;
