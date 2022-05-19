module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      userCode: {
        type: Sequelize.STRING,
      },
      createdAt: {
          type: Sequelize.DATE,
      },
      updatedAt: {
          type: Sequelize.DATE,
      },
    });
    return User;
  };
  