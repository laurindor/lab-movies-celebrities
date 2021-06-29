// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { route } = require(".");
const Movie = require ('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model');

// all your routes here
router.get('/create', (req, res) => {
	Celebrity.find().then((allCelebrities) => {
		res.render('movies/new-movie', { allCelebrities });
	});
});

router.post('/create', (req, res) => {
	const { title, genre, plot, cast } = req.body;

	Movie.create({ title, genre, plot, cast })
		.then((newMovie) => {
			console.log(newMovie);
			res.redirect('/movies');
		})
		.catch((err) => console.log(err));
});

router.get('/', (req, res) => {
	Movie.find()
		.populate('cast')
		.then((allMovies) => {
			console.log(allMovies);
			res.render('movies/movies', { allMovies });
		})
		.catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Movie.findById(id)
		.populate('cast')
		.then((movie) => {
			console.log(movie);
			res.render('movies/movie-details', { movie });
		})
		.catch((err) => console.log(err));
});

router.get('/:id/edit', (req, res) => {
	const { id } = req.params;

	Movie.findById(id)
		.populate('cast')
		.then((movie) => {
			console.log(movie);
			res.render('movies/edit-movie', { movie });
		})
		.catch((err) => console.log(err));
});

router.post('/:id/edit', (req, res) => {
	const { id } = req.params;

	const { title, genre, plot, cast } = req.body;

	Movie.findByIdAndUpdate(id, { title, genre, plot, cast })
		.then((updatedMovie) => {
			console.log(updatedMovie);
			res.redirect('/movies');
		})
		.catch((err) => console.log(err));
});

router.get('/:id/delete', (req, res) => {
	const { id } = req.params;

	Movie.findByIdAndDelete(id)
		.then(() => {
			res.redirect('/movies');
		})
		.catch((err) => console.log(err));
});

module.exports = router;
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
