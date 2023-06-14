const db = require("../models");

db.Place.create([
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/thairesturant.jpg",
    founded: 1989
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/CodingCatCafe.jpg",
    founded: 2020
  }
])
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})


// after running node seeders/seed-places.js it shows an error (MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.)