const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = async (req, res) => {
  await User.create({

    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    userCode: ''
  }).then(async user => {
    
    await User.update({ userCode: `PD0000${user.id}` }, {
    where: {
      id: user.id
    }}).then(() => {
          res.status(200).send({ status: 200,message: "User was registered successfully!" });
        });;
    })
    .catch(err => {
      res.status(500).send({ status: 500,message: err.message });
    });
};
exports.signin = (req, res) => {
    if (!req.body.username || !req.body.password){
        res.status(400).send({
            status: 400,
            message: "Failed! Some of the values are missing"
          });
          return;
      }
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({status: 401, message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          status: 401,
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({
        status: 200,
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ status:500, message: err.message });
    });
};