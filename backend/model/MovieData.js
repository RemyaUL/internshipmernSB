const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    category:String,
    director:String,
    releaseYear:String
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData