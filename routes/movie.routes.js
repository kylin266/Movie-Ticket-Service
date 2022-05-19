const { verifySignUp } = require("../middleware");
const controller = require("../controllers/movie.controller");
const { verifyToken } = require("../middleware/authJwt");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/movies/get",
    verifyToken
    ,
    controller.getAllMovies
  );
  app.get(
    "/api/movies/:id",
    verifyToken
    ,
    controller.getMovieDetail
  );
  app.get(
    "/api/movies",
    verifyToken
    ,
    controller.getMoviesByName
  );
  
};