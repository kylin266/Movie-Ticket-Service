const movie = {
  id: 1,
  adult: false,
  genres: "Drama",
  original_title: "Fight Club",
  poster_path: "../assets",
  release_date: "2022-01-02",
  status: "Released",
  tagline: "Drama. Comedy. MainTheme",
  title: "Fight Club",
  video: false,
  vote_average: "8.4",
  vote_count: "23213",
  runtime: 120,
  country: "America",
  popularity: 53.312,
};

getmovies, get1movies

const hall = {
    id: 1,
    name: "Theatre 1",
    totalSeat: 72,
}

const movie_playtime ={
    id: 1,
    date: "14/2/2022",
    startTime: "7h30",
    endTime: "9h30",
    movieId: 1,
    hallId: 1
}
getMovieplayTimes - hall 


const seat = {
    id: 1,
      seatNumber: 'G2',
      type: 'normal',
      status: 1,
      hallId: 1
}

bulkUpdateSeats 


const ticket = {
    id: 1,
    userId: 1,
    moviePlayTimeId: 1,
    seatId: 1
}
payment -> create ticket ();
getTickets();

const user = {
    id: 1,
    username: "admin",
    email: "admin@example",
    password: "$2a$08$TDMBIv92Q8mbsy91k65OnuDR3YnCViLhom0zbD7uBrsZtw2o0Z.NS",
    userCode: "PD00001",
    createdAt: "2022-04-21 14:35:19",
    updatedAt: "2022-04-21 14:35:19"
  }

login, sign up


const payment = {
    id: 1,
    ticketsId: [],
    timestamp: '',
    amount: 100000,
    transactionId: '',
    PaymentMethod: 'Paypal'
}