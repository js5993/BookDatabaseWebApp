const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.options('*', cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB data connection established successfully');
});

const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('Server is running on port:  ${port}');
});

