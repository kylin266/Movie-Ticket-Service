module.exports = (sequelize, Sequelize) => {
    const Hall = sequelize.define("halls", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      totalSeat: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
          type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
    });
    return Hall;
  };
  