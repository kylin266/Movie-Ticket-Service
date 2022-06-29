const db = require("../models");
const Playing = db.playing;
const Movie = db.movie;
const Week = db.week;
const Op = db.Sequelize.Op;

exports.getPlayingGross = async (req,res) => {
    await Playing.findAll({
        include: [
            {model: Movie},{model: Week}
        ]
    }).then(async play =>{
        await res.status(200).send({status: 200, data: play});
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};

exports.updateGross = async (req,res) => {
    const body = req.body;
    console.log(body);
    await Movie.findOne({
        where:{
            title:  {
                [Op.like]: `%${body.title}%`
            }
        }
    }).then(async movies =>{
        movies = movies.dataValues;
        let playData = await Playing.findOne({
            where:{
                movieId: movies.id
            }
        });
       const data = await Playing.update({
            revenue: playData.revenue + body.revenue,
            tickets: playData.tickets + body.tickets
        },{
            where:{
                movieId: movies.id
            }
        })
        await res.status(200).send({status: 200, data: data})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
   
};

