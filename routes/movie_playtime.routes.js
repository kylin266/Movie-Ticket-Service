const { verifySignUp } = require("../middleware");
const controller = require("../controllers/movie_playtime.controller");
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
    "/api/movie_playtimes",
    verifyToken
    ,
    controller.getMoviesPlayTime
  );
};