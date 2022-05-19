const db = require("../models");
const config = require("../config/auth.config");
const Payment = db.payment;
const Op = db.Sequelize.Op;

exports.createPayment = async (req,res) => {
    let data = req.body;

    await Payment.create(data).then(async data => {
        await res.status(200).send({ data: data, status: 200, message: "Payment information created" });
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};

