var express = require('express')
var db = require('../models')
var router = express.Router()

router.get('/', (req, res) => {
    db.county.findAll()
    .then((response) => {
        let array = []
        response.forEach(result => {
            array.push(result)
            console.log('Here is array')
            console.log(array[0].dataValues);
          })
          res.render('index', {county:array})
  }).catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
})

module.exports = router