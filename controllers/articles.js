let express = require('express')
let db = require('../models')
let router = express.Router()

/* SHAMELESSLY SWIPED FROM BLOGPLUS PROJECT */

// POST /articles - create a new post
router.post('/', (req, res) => {
  db.place.create({
    name: req.body.name,
    county: req.body.countyId,
    content: req.body.content,
    category: req.body.categoryId,
    image: req.body.image
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// GET /articles/new - display form for creating new articles
router.get('/new', (req, res) => {
  db.place.findAll()
  .then((places) => {
    res.render('articles/new', { places: places })
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// GET /articles/:id - display a specific post and its author
router.get('/:id', (req, res) => {
  db.article.findOne({
    where: { id: req.params.id }
  })
  .then((article) => {
    if (!article) throw Error()
    console.log(article.id)
    res.render('articles/show', { article: article })
  })
  .catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
})

module.exports = router