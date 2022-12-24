let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const createError = require('createerror')

// Express Route
const studentRoute = require('../backend/routes/student.route');
const booksRoute = require('../backend/routes/books.route');


// Connecting mongoDB Database
mongoose
  .connect('mongodb+srv://lab12API:Qv1dgLmHXXtEUKew@lab12cluster.qrzcovh.mongodb.net/test')
  // .connect('mongodb://127.0.0.1:27017/mern-crud')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute);
app.use(booksRoute);


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
