module.exports = (sequelize, Sequelize) => {
    const MoviePlayTime = sequelize.define("movie_playtimes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: Sequelize.STRING,
      },
      startTime: {
        type: Sequelize.STRING,
      },
      endTime: {
        type: Sequelize.STRING,
      },
      movieId: {
        type: Sequelize.INTEGER,
      },
      hallId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
    });
    return MoviePlayTime;
  };
  