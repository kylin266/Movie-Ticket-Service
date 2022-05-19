const db = require("../models");
const config = require("../config/auth.config");
const Seat = db.seat;
const Op = db.Sequelize.Op;

exports.getHallSeats= async(req,res) => {
    const hall = req.query.hall;
    await Seat.findAll({
        where:{
            hallId: hall
        }
    }).then(async seats =>{
        await res.status(200).send({status: 200, data: seats})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};
exports.getSeat = async(req,res) =>{ 
    const id = req.params.id;
    await Seat.findOne({
        where: {
            id: id
        }
    }).then(async seat =>{
        await res.status(200).send({status: 200, data: seat})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
}
async function getSeatById(id){
    return  await Seat.findOne({
        where: {
            id: id
        }
    }).then(async seat =>{
       return seat;
    }).catch(err => {
       return null;
    });
}
exports.updateSeats = async(req,res) =>{
    const id = req.params.id;
    const body = req.body;
    await Seat.update({
        status: body.status
    },{
        where: {
            id: id
        }
    }).then(async results =>{
        if (results) {
        const data = await getSeatById(id);
        await res.status(200).send({status: 200, data: data})
        }
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};
