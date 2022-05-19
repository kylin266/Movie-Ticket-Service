const db = require("../models");
const config = require("../config/auth.config");
const Ticket = db.ticket;
const Op = db.Sequelize.Op;

exports.createTicket = async (req,res) => {
    let data = req.body;

    await Ticket.create(data).then(async data => {
        await res.status(200).send({ data: data, status: 200, message: "Ticket created successfully" });
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};

exports.getTicket = async(req,res) => {
    const id = req.params.id;
    await Ticket.findOne({
        where: {
            id: id
        }
    }).then(async ticket =>{
        await res.status(200).send({status: 200, data: ticket})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};
