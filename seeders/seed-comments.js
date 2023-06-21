require('dotenv').config
const db = require('../models')


//to use await, we need an async function
async function seed() {
    //get the place, H-Thai-ML
    
    let place = await db.Place.findOne({_id: '6487c41c417418747a27d57b'})
    //create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended'
    })

    //add that comment to the place's comment array
    place.comments.push(comment.id)


    //save the okace niw that it has comment 
    await place.save()

    //exit the prpgram
    process.exit()
}

seed()