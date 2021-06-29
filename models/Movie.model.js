const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(

    {
    title: String,
    genre: String,
    plot: String,    
    cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity", default: [] }]
    }
);

//module.exports = model('Movie', movieSchema);

const Movie = model('Movie', movieSchema);
module.exports = Movie;