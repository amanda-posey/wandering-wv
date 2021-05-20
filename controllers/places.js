let express = require('express')
let db = require('../models')
let router = express.Router()

/* SHAMELESSLY SWIPED FROM BLOGPULSE */

// POST /places - create a new post
router.post('/', (req, res) => {
  db.place.create({
    title: req.body.title,
    content: req.body.content,
    countyName: req.body.countyName,
    categoryName: req.body.categoryName,
    image: req.body.imageUpload
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// GET /places/new - display form for creating new articles
router.get('/new', (req, res) => {
  db.county.findAll()
  .then((counties) => {
    res.render('places/new', { counties: counties })
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// GET /places/:id - display a specific post and its author
router.get('/:id', (req, res) => {
  console.log('in id route')
  db.place.findOne({
    where: { id: req.params.id },
    include: [db.comment]
  })
  .then((thisPlace) => {
    console.log('then statement')
    // console.log(thisPlace) When I was adding comments, I forgot what my data looked like and had to console.log it again.
    if (!thisPlace) throw Error()
    console.log(thisPlace.dataValues.title)
    res.render('places/show', { data:thisPlace })
  })
  .catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
})

module.exports = router