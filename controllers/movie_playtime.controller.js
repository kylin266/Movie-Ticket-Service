const db = require("../models");
const config = require("../config/auth.config");
const MoviePlayTime = db.movie_playtime;
const Hall = db.hall;
const Op = db.Sequelize.Op;

exports.getMoviesPlayTime = async (req, res) => {
  const { movie, hall } = req.query;
  if (!!hall) {
    await MoviePlayTime.findAll({
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
    await MoviePlayTime.findAll({
      where: {
        movieId: movie,
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
exports.getMoviePlayTimeDetail = async (req, res) => {
  const id = req.params.id;
  await MoviePlayTime.findOne({
    where: {
      id: id,
    },
  }).then(async (movies) => {
      await Hall.findOne({
        where: {
          id: movies.hallId,
        },
      }).then(async hall =>{
        movies = movies.dataValues;
        let data = {...movies, hall: hall}

        await res.status(200).send({ status: 200, data: data });

      }).catch((err) => {
        res.status(500).send({ status: 500, message: err.message });
      });
    })
    .catch((err) => {
      res.status(500).send({ status: 500, message: err.message });
    });
};
