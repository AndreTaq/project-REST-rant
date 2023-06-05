const router = require('express').Router()
const places = require('../models/places.js')

//INDEX
router.get('/', (req, res) => {
    res.render('places/index.jsx', {places})
})

//NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// POST (ask Hennry about the consle.log)
router.post('/', (req, res) => {
    // console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
module.exports = router