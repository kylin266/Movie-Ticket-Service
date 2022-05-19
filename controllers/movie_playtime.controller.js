const db = require("../models");
const config = require("../config/auth.config");
const MoviePlayTime = db.movie_playtime;
const Op = db.Sequelize.Op;

exports.getMoviesPlayTime = async (req, res) => {
  const { movie, hall } = req.query;
  if (!!hall) {
    await MoviePlayTime.findOne({
      where: {
        movieId: movie,
        hallId: hall,
      },
    })
      .then(async (result) => {
        await res.status(200).send({ status: 200, data: result });
      })
      .catch((err) => {
        res.status(500).send({ status: 500, message: err.message });
      });
  } else {
    await MoviePlayTime.findOne({
      where: {
        movieId: movie
      },
    })
      .then(async (result) => {
        await res.status(200).send({ status: 200, data: result });
      })
      .catch((err) => {
        res.status(500).send({ status: 500, message: err.message });
      });
  }
};
