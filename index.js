require('dotenv').config()
const express = require('express')
const app = express()

// ROUTES why do we have our routes at index.js insted of places.js
app.get('/', (req, res) => {
    // res.send('Hello World!') changed to
    res.render('home')
})
app.use('/places', require('./controllers/places'))


// Middleware
// app.set('views' __dirname + '/views') come back to this later
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// 404 Page
app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>') changed to
    res.render('error404')
})

app.listen(process.env.PORT)