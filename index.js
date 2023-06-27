// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// ROUTES 
app.get('/', (req, res) => {
    // res.send('Hello World!') changed to
    res.render('home')
})

app.use('/places', require('./controllers/places'))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to : ', process.env.MONGO_URI)})
    
// 404 Page
app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>') changed to
    res.render('error404')
})

app.listen(process.env.PORT)