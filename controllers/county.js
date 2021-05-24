var express = require('express')
var db = require('../models')
var router = express.Router()

router.get('/:countyName', (req, res) => {
  console.log('in county route')
  db.place.findAll({
    where: { countyName: req.params.countyName }
  })
  .then((response) => {
    let array = [];
    //console.log(response);
    response.forEach(result => {
      array.push(result)
      //console.log('Here is array')
      console.log(array[0].dataValues);
    })
    res.render('county/show', {data:array, name:req.params.countyName})
  }).catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
});

module.exports = router