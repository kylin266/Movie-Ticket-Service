module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("tickets", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      moviePlayTimeId: {
        type: Sequelize.INTEGER,
      },
      seatId:{
        type: Sequelize.INTEGER,
      },
      createdAt: {
          type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
    });
    return Ticket;
  };
  