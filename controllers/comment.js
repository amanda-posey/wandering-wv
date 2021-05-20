var express = require('express')
var db = require('../models')
var router = express.Router()

router.post('/', (req, res) => {
  db.comment.create(req.body)
  .then((createdComment) => {
      //console.log(createdComment);
    res.redirect('/places/' + req.body.placeId)
  })
  .catch((err) => {
    console.log('Error in POST /comments', err)
    res.send('An error occurred on the server; please check your logs.')
  })
})

module.exports = router