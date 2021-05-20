require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
let moment = require('moment');
const db = require('./models');
const methodOverride = require("method-override");

const SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  res.locals.moment = moment
  next()
})

app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
  //console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  db.place.findAll()
  .then((response) => {
    let array = [];
   // console.log(response);
    response.forEach(result => {
      array.push(result)
      console.log('Here is array')
      console.log(array[0].dataValues);
      
    })
    res.render('index', {data:array})
  }).catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));
app.use('/places', require('./controllers/places'));
app.use('/comments', require('./controllers/comment'));


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;