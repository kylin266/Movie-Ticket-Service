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
db.movie = require("./movie.model.js")(sequelize, Sequelize);
db.playing = require("./playing.model.js")(sequelize, Sequelize);
db.week = require("./week.model.js")(sequelize, Sequelize);



db.movie.hasMany(db.playing,{
  foreignKey: 'movieId'
})

db.playing.belongsTo(db.movie);

db.week.hasMany(db.playing,{
    foreignKey: 'weekId'
  })
  
  db.playing.belongsTo(db.week);
  

module.exports = db;