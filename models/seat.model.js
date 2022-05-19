module.exports = (sequelize, Sequelize) => {
  const Seat = sequelize.define("seats", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    seatNumber: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    hallId: {
      type: Sequelize.INTEGER,
    }
  });
  return Seat;
};
