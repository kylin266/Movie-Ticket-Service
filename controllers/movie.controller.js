const db = require("../models");
const config = require("../config/auth.config");
const Movie = db.movie;
const Op = db.Sequelize.Op;

exports.getAllMovies = async (req,res) => {
    await Movie.findAll({}).then(async movies =>{
        await res.status(200).send({status: 200, data: movies})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};

exports.getMoviesByName = async (req,res) => {
    const {title} = req.query;
    await Movie.findOne({
        where:{
            title:  {
                [Op.like]: `%${title}%`
            }
        }
    }).then(async movies =>{
        await res.status(200).send({status: 200, data: movies})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};

exports.getMovieDetail = async (req,res) => {
    const id = req.params.id;
    await Movie.findOne({
        where: {
            id: id
        }
    }).then(async movies =>{
        await res.status(200).send({status: 200, data: movies})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};
