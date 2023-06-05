const router = require('express').Router()

router.get('/', (req, res) => {
    // res.send('GET /places') changed to res.render
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai resturant.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Coding Cat Cafe.jpg' 
    }]
    res.render('places/index.jsx', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router