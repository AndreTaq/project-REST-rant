const router = require('express').Router()

//INDEX
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

//NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// POST (ask Hennry about the consle.log)
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})


module.exports = router