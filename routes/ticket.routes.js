const { verifySignUp } = require("../middleware");
const controller = require("../controllers/ticket.controller");
const { verifyToken } = require("../middleware/authJwt");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/tickets/create",
    verifyToken
    ,
    controller.createTicket
  );
  app.get(
    "/api/tickets/:id",
    verifyToken
    ,
    controller.getTicket
  );
};