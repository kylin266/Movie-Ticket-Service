const controller = require("../controller/gross.controller.js");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/gross/get",
    controller.getPlayingGross
  );
  app.put(
    "/api/gross/put",
    controller.updateGross
  );

  
};