const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.model.js")(sequelize, Sequelize);
db.hall = require("./hall.model.js")(sequelize, Sequelize);
db.movie_playtime = require("./movie_playtime.model.js")(sequelize, Sequelize);
db.movie = require("./movie.model.js")(sequelize, Sequelize);
db.seat = require("./seat.model.js")(sequelize, Sequelize);
db.ticket = require("./ticket.model.js")(sequelize, Sequelize);
db.payment = require("./payment.model.js")(sequelize, Sequelize);


db.movie.hasMany(db.movie_playtime,{
  foreignKey: 'movieId'
})

db.movie_playtime.belongsTo(db.movie);

db.hall.hasMany(db.movie_playtime,{
    foreignKey: 'hallId'
})
db.movie_playtime.belongsTo(db.hall);

db.hall.hasMany(db.seat,{
    foreignKey: 'hallId'
})
  
db.seat.belongsTo(db.hall);
  

module.exports = db;