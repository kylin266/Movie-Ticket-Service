let express = require('express');
let app = require('express')();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8000"
};
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = require("./models");

// db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
// //   console.log('Drop and Resync Database with { force: true }');
// //   initial();
// });

require('./routes/auth.routes')(app);
require('./routes/movie.routes')(app);
require('./routes/movie_playtime.routes')(app);
require('./routes/seat.routes')(app);
require('./routes/ticket.routes')(app);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);
});
module.exports = app;