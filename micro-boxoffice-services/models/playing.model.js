module.exports = (sequelize, Sequelize) => {
  const Playing = sequelize.define("playings", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    weekId: {
      type: Sequelize.INTEGER,
      defaultValue: false,
    },
    tickets: {
      type: Sequelize.INTEGER,
      defaultValue: false,
    },
    revenue: {
      type: Sequelize.REAL,
    },
    movieId: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });
  return Playing;
};
