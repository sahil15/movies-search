var func = require("./getMoviesData")
var express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var app = express();
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/movies', (req, res)=>{
    const body = req.body;
    res.send(func.getMovies(req.body))
});

router.get('/movies/:movieId', (req, res)=>{
    const movieId = req.params.movieId;
    console.log("movieId",movieId);
    res.send(func.getMovieInformation(movieId))
});

router.get('/movies/searchTerm/:searchTerm', (req, res)=>{
    const searchTerm = req.params.searchTerm;
    console.log("searchTerm",searchTerm);
    res.send(func.getSearchResults(searchTerm))
});

app.use("/", router);

var server = app.listen(3000, ()=>{
console.log("Server running at http://localhost:3000/")
});

