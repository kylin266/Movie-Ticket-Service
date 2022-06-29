module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    adult: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    genres: {
      type: Sequelize.STRING,
    },
    original_title: {
      type: Sequelize.STRING,
    },
    poster_path: {
      type: Sequelize.STRING,
    },
    release_date: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    tagline: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    video: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    vote_average: {
      type: Sequelize.REAL,
    },
    vote_count: {
      type: Sequelize.INTEGER,
    },
    runtime: {
      type: Sequelize.REAL,
    },
    country: {
      type: Sequelize.STRING,
    },
    popularity: {
      type: Sequelize.REAL,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
  return Movie;
};
