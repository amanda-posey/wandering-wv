var express = require('express')
var db = require('../models')
var router = express.Router()

// POST route to create a new comment.
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

// GET route to display the edit form.
router.get('/:id', (req, res) => {
  //console.log('in id route')
  db.comment.findOne({
    where: { id: req.params.id }
  })
  .then((thisComment) => {
    //console.log(thisComment.dataValues)
    res.render('comments/edit', {
        c: thisComment.dataValues
      })
    })
    .catch((err) => {
      console.log(err)
      res.render('main/404')
    })
  });

  // PUT route for editing comments.
  router.put('/:id', (req, res) => {
      //console.log('in PUT route')
    db.comment.update(
      req.body,
      {
        where: { id: req.params.id },
        include: [db.place]
      }
    )
    .then((updatedRows) => {
      console.log('success', updatedRows)

      res.redirect('/places/' + req.body.placeId)
    })
    .catch((err) => {
      console.log(err)
      res.render('main/404')
    })
  })

  // DELETE
router.delete('/:id', (req, res) => {
  console.log(req.params);
  db.comment.destroy(
      {
        where: { id: req.params.id }
      }
  )
  .then(deletedComment => {
    console.log('Success: DELETE')

    res.redirect('back')
  })
  .catch((err) => {
    console.log('Error in DELETE /comments', err)
    res.send('An error occurred on the server; please check your logs.')
  })
})

module.exports = router