// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { route } = require(".");
const Celebrity = require("../models/Celebrity.model")

// all your routes here
router.get("/create", (req, res)=>{
    res.render('celebrities/new-celebrities')
});

router.post("/create", (req, res)=>{
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
    .then(addedCelebrity=>{
        console.log("Celebrity added!!", addedCelebrity)
        res.redirect('/celebrities');
    })
    .catch(err=> console.log(err))
});

router.get('/', (req, res)=>{

    Celebrity.find()
    .then(allCelebrities =>{
        console.log(allCelebrities)
        res.render("celebrities/celebrities.hbs", {allCelebrities});
    })
    .catch(err=> console.log(err))
})


module.exports = router;