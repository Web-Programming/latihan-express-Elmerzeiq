var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", function(req, res, next){
  res.render('about',{title: "About Us"});
});
router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;
  res.render('thankyou');
});
module.exports = router;

