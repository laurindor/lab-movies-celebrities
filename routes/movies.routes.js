// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { route } = require(".");
const Movie = require ('../models/Movie.model')

// all your routes here
router.get("/create", (req, res)=>{
    res.render('movies/new-movie')
});

router.post("/movies/create", (req, res)=>{
    const {title, genre, plot, cast} = req.body
    Movie.create({title, genre, plot, cast})
    .then(createdMovie=>{
        console.log("Movie created!!", createdMovie)
        res.redirect("/movies");
})
    .catch(err=> console.log(err))
});

router.get("/movies", (req, res)=>{
    Movie.find()
    .populate("Cast")
    .then(allMovies=>{
        console.log(allMovies)
        res.render("movies/movies", {allMovies})
    })
    .catch(err=> console.log(err))
})

// add movies to the database




module.exports = router;