const db = require("../models");
const config = require("../config/auth.config");
const Ticket = db.ticket;
const Movie = db.movie;
const MoviePlayTime = db.movie_playtime;
const Op = db.Sequelize.Op;
const mailgun = require("mailgun-js");
const User = db.user;
const DOMAIN = 'ql6625.live';
const mg = mailgun({apiKey: '4d3c1a04169341867cf8ec3cc3b21de1-443ec20e-2b50be32', domain: DOMAIN});
exports.createTicket = async (req,res) => {
    let data = req.body;

    await Ticket.create(data).then(async data => {
      data = data.dataValues;
      console.log(data);
        let userData = await User.findOne({
            where: {
              id: data.userId
            }
        });
      userData = userData.dataValues;
      console.log(userData);
        const movieData = await MoviePlayTime.findOne({
            where: {
              id: data.moviePlayTimeId,
            },
          }).then(async (movies) => {
            console.log(movies);


            movies = movies.dataValues;
            console.log(movies);
            const dataRet =  await Movie.findOne({
                where: {
                  id: movies.hallId,
                },
              }).then(async movie =>{
                movie = movie.dataValues;
                return movie;
              }).catch((err) => {
                console.log(err);
              });
              return dataRet;
            })
            .catch((err) => {
        });
        console.log('moviedata',movieData);
        await res.status(200).send({ data: data, status: 200, message: "Ticket created successfully" });
        const mailData = {
            from: 'postmaster@ql6625.live',
	to: `${userData.email}`,
	subject: 'Hello',
	text: `Here is your ticket information ${movieData}`
        };
        await mg.messages().send(mailData, function (error, body) {
            console.log(body,error);
        });


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
        await 
        await res.status(200).send({status: 200, data: ticket})
    }).catch(err => {
        res.status(500).send({ status: 500, message: err.message });
    });
};
