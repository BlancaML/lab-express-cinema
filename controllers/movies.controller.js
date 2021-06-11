const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req,res,next) => {
    Movie.find()
    .then( movies => {
        res.render ('movies/list',{movies})
    })
    .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            res.render('not-found')
        } else {
            next(error)
        }
    })
}


module.exports.detail = (req,res,next) => {
    Movie.findById(req.params.id)
    .then( movie => {
        if (movie) {
            res.render ('movies/detail',{movie})
        } else {
            res.redirect('/movies')
        }
        
    })
    .catch(next)

    }